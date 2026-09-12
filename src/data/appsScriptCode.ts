export const APPS_SCRIPT_CODE_GS = `/**
 * =========================================================================
 * LICEO CATÓLICO TECNOLÓGICO DE BARAHONA (LICATEBA)
 * SISTEMA WEB INSTITUCIONAL Y GESTOR DE CONTENIDOS (CMS)
 * Google Apps Script Backend - Versión 2.4 (Producción)
 * =========================================================================
 * Desarrollado para conectar Google Sites con Google Sheets, Google Drive,
 * Google Calendar y Gmail institucional (@licateba.edu.do).
 */

const CONFIG = {
  SPREADSHEET_ID: SpreadsheetApp.getActiveSpreadsheet().getId(),
  DOMINIO_PERMITIDO: "@licateba.edu.do",
  EMAIL_EDITORIAL: "periodico@licateba.edu.do",
  DRIVE_FOLDER_UPLOADS: "LICATEBA_PORTAL_ARCHIVOS",
  CALENDAR_ID: "c_licateba_eventos@group.calendar.google.com"
};

/**
 * Endpoint GET para servir la API JSON o la WebApp Embebida
 */
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "portal";

  // Retorno de API JSON para componentes dinámicos
  if (action === "getAvisos") {
    return jsonResponse(obtenerAvisosPublicados());
  }
  if (action === "getActividades") {
    return jsonResponse(obtenerActividades());
  }
  if (action === "getArticulos") {
    const edicion = e.parameter.edicion || "ed-04";
    return jsonResponse(obtenerArticulosPorEdicion(edicion));
  }
  if (action === "getPropuestas") {
    return jsonResponse(obtenerPropuestas(e.parameter.usuarioEmail));
  }
  if (action === "getCurrentUser") {
    return jsonResponse(obtenerUsuarioActual());
  }

  // Por defecto, sirve el HTML embebible en Google Sites
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("LICATEBA | Portal Institucional")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}

/**
 * Endpoint POST para transacciones: envío de propuestas, publicación de avisos
 */
function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    const action = postData.action;

    if (action === "proponerArticulo") {
      return jsonResponse(procesarPropuestaEstudiantil(postData.data));
    }
    if (action === "crearAviso") {
      return jsonResponse(guardarAviso(postData.data));
    }
    if (action === "actualizarEstadoPropuesta") {
      return jsonResponse(actualizarEstadoPropuesta(postData.id, postData.nuevoEstado, postData.feedback));
    }

    return jsonResponse({ success: false, message: "Acción no reconocida" });
  } catch (err) {
    return jsonResponse({ success: false, error: err.toString() });
  }
}

/**
 * Identifica al usuario autenticado mediante su cuenta institucional de Google Workspace
 */
function obtenerUsuarioActual() {
  const email = Session.getActiveUser().getEmail() || "visitante@publico.com";
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Usuarios");
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][1].toString().toLowerCase() === email.toLowerCase()) {
      return {
        email: email,
        nombre: data[i][2],
        rol: data[i][3],
        departamento: data[i][4],
        autenticado: true
      };
    }
  }

  // Usuario fuera de la lista o visitante público
  return {
    email: email,
    nombre: email.split("@")[0] || "Visitante",
    rol: email.endsWith(CONFIG.DOMINIO_PERMITIDO) ? "estudiante" : "visitante",
    autenticado: email.endsWith(CONFIG.DOMINIO_PERMITIDO)
  };
}

/**
 * Registra una propuesta estudiantil enviada desde el formulario web
 */
function procesarPropuestaEstudiantil(propuesta) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Propuestas");
  const idPropuesta = "prop-" + Utilities.formatDate(new Date(), "GMT-4", "yyyyMMdd-HHmmss");
  
  let fotoUrl = propuesta.fotografiaUrl || "";
  
  // Si se envió un archivo en Base64, se guarda en Google Drive
  if (propuesta.archivoBase64 && propuesta.archivoNombre) {
    fotoUrl = guardarEnDrive(propuesta.archivoBase64, propuesta.archivoNombre, idPropuesta);
  }

  sheet.appendRow([
    idPropuesta,
    propuesta.nombreEstudiante,
    propuesta.emailEstudiante,
    propuesta.cursoSeccion,
    propuesta.tema,
    propuesta.categoria,
    propuesta.tituloPropuesto,
    propuesta.contenido,
    fotoUrl,
    propuesta.documentoUrl || "",
    propuesta.autorizacionPublicacion ? "TRUE" : "FALSE",
    Utilities.formatDate(new Date(), "GMT-4", "yyyy-MM-dd"),
    "pendiente",
    "",
    "Comité Editorial"
  ]);

  // Auditoría
  registrarAuditoria(propuesta.emailEstudiante, "estudiante", "Propuestas", "ENVIAR_PROPUESTA", "Título: " + propuesta.tituloPropuesto);

  // Notificación automática al editor por Gmail
  try {
    MailApp.sendEmail({
      to: CONFIG.EMAIL_EDITORIAL,
      subject: "[LICATEBA Informa] Nueva propuesta de artículo: " + propuesta.tituloPropuesto,
      htmlBody: "<p>El estudiante <b>" + propuesta.nombreEstudiante + "</b> (" + propuesta.cursoSeccion + ") ha enviado un artículo para revisión.</p>" +
                "<p><b>Categoría:</b> " + propuesta.categoria + "</p>" +
                "<p>Favor ingresar al Panel Administrativo para su evaluación.</p>"
    });
  } catch (e) {
    Logger.log("Aviso de correo omitido: " + e.message);
  }

  return { success: true, id: idPropuesta, message: "Propuesta enviada con éxito al Consejo Editorial" };
}

/**
 * Guarda archivos en Google Drive institucional
 */
function guardarEnDrive(base64Data, nombreArchivo, prefijo) {
  const folders = DriveApp.getFoldersByName(CONFIG.DRIVE_FOLDER_UPLOADS);
  let targetFolder = folders.hasNext() ? folders.next() : DriveApp.createFolder(CONFIG.DRIVE_FOLDER_UPLOADS);
  
  const decoded = Utilities.base64Decode(base64Data.split(",")[1] || base64Data);
  const blob = Utilities.newBlob(decoded, "image/jpeg", prefijo + "_" + nombreArchivo);
  const file = targetFolder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  
  return file.getUrl();
}

/**
 * Consulta de avisos en Google Sheets
 */
function obtenerAvisosPublicados() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Avisos");
  const data = sheet.getDataRange().getValues();
  const avisos = [];
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][10] === "publicado") {
      avisos.push({
        id: data[i][0],
        titulo: data[i][1],
        contenido: data[i][2],
        categoria: data[i][3],
        prioridad: data[i][4],
        destinatario: data[i][5],
        fechaPublicacion: Utilities.formatDate(new Date(data[i][6]), "GMT-4", "yyyy-MM-dd"),
        fechaExpiracion: Utilities.formatDate(new Date(data[i][7]), "GMT-4", "yyyy-MM-dd"),
        autor: data[i][8],
        adjuntoUrl: data[i][9]
      });
    }
  }
  return avisos;
}

/**
 * Bitácora inmutable en la hoja Auditoria
 */
function registrarAuditoria(usuario, rol, modulo, accion, detalles) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Auditoria");
  if (!sheet) return;
  const timestamp = Utilities.formatDate(new Date(), "GMT-4", "yyyy-MM-dd HH:mm:ss");
  const logId = "log-" + Utilities.getUuid().substring(0, 8);
  sheet.appendRow([logId, timestamp, usuario, rol, modulo, accion, detalles]);
}

/**
 * Helper para responder en JSON con CORS habilitado
 */
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
`;

export const GOOGLE_SITES_EMBED_SNIPPET = `<!--
================================================================================
CÓDIGO DE INCRUSTACIÓN PARA GOOGLE SITES
Liceo Católico Tecnológico de Barahona (LICATEBA)
Pegar en Google Sites: Menú "Insertar" > "Incorporar" > "Incorporar código"
================================================================================
-->
<div style="width: 100%; min-height: 850px; position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); background: #f8fafc;">
  <iframe 
    src="https://script.google.com/macros/s/AKfycbz_LICATEBA_WEBAPP_ID/exec" 
    style="width: 100%; height: 850px; border: none; display: block;" 
    allow="camera; microphone; geolocation"
    loading="lazy"
    title="Portal Interactivo LICATEBA">
  </iframe>
</div>
`;

export const IMPLEMENTATION_PHASES_DATA = [
  {
    fase: 'FASE 1',
    nombre: 'Estructuración y Páginas en Google Sites',
    duracion: 'Semana 1',
    responsable: 'Coordinador Web / Equipo de Tecnología',
    descripcion: 'Creación de la plantilla base en new Google Sites con la paleta institucional (Azul Marino #1e3a8a, Dorado/Ámbar #d97706, Blanco y Gris pizarra). Maquetación de las páginas principales: Inicio, Nosotros, Áreas Técnicas, Contacto.',
    pasos: [
      'Crear sitio en sites.google.com con la cuenta oficial admin@licateba.edu.do',
      'Configurar nombre oficial: "Liceo Católico Tecnológico de Barahona"',
      'Subir logo institucional con fondo transparente y favicon en formato .png',
      'Configurar menú superior jerárquico con páginas estáticas y enlaces a módulos embebidos'
    ]
  },
  {
    fase: 'FASE 2',
    nombre: 'Diseño de Identidad Visual y Guía de Estilo',
    duracion: 'Semana 1',
    responsable: 'Dpto. de Arte y Diseño Gráfico / Docentes DAAI',
    descripcion: 'Definición de tipografías (Plus Jakarta Sans para cuerpo, Cinzel para lema solemne, Playfair Display para el periódico escolar), banner fotográfico con vistas aéreas de Barahona y los talleres del centro.',
    pasos: [
      'Selección de fotografías de alta resolución de las instalaciones y estudiantes con uniformes',
      'Diseño del cabezal oficial del periódico "LICATEBA INFORMA"',
      'Estandarización de badges cromáticos para las 4 áreas técnicas y niveles de prioridad'
    ]
  },
  {
    fase: 'FASE 3',
    nombre: 'Estructura de Almacenamiento en Google Drive',
    duracion: 'Semana 2',
    responsable: 'Administrador de Google Workspace',
    descripcion: 'Creación de Unidades Compartidas (Shared Drives) para centralizar y proteger los archivos del portal sin depender de cuentas personales que puedan perderse.',
    pasos: [
      'Crear Unidad Compartida: "LICATEBA - Portal y Periódico"',
      'Crear subcarpetas: /Circulares_PDF, /Fotos_Actividades, /Periodico_Ediciones, /Propuestas_Estudiantes',
      'Configurar permisos: Público con enlace de solo lectura para descargas, edición restringida al equipo directivo'
    ]
  },
  {
    fase: 'FASE 4',
    nombre: 'Configuración del Libro de Google Sheets como Base de Datos',
    duracion: 'Semana 2',
    responsable: 'Ingeniero de Sistemas LICATEBA',
    descripcion: 'Creación del archivo central de Google Sheets con las 13 pestañas normalizadas (Usuarios, Avisos, Actividades, Artículos, Ediciones, Propuestas, Auditoría, etc.).',
    pasos: [
      'Crear libro "LICATEBA_PORTAL_DATABASE_2026"',
      'Aplicar validación de datos a columnas tipo Enum (Prioridades, Estados editoriales, Categorías)',
      'Bloquear y proteger rangos para que solo el script de servicio tenga acceso de escritura directo'
    ]
  },
  {
    fase: 'FASE 5',
    nombre: 'Formularios Complementarios de Google Forms',
    duracion: 'Semana 3',
    responsable: 'Secretaría Docente / Orientación',
    descripcion: 'Formularios para procesos complementarios: Registro de Solicitud de Admisión de Nuevo Ingreso, Buzón de Sugerencias Pastoral y Encuesta de Clima Escolar.',
    pasos: [
      'Vincular respuestas de Forms a pestañas dedicadas de Google Sheets',
      'Configurar restricción "Solo usuarios de licateba.edu.do" cuando sea aplicable'
    ]
  },
  {
    fase: 'FASE 6',
    nombre: 'Desarrollo y Despliegue de Google Apps Script',
    duracion: 'Semana 3-4',
    responsable: 'Desarrollador Web Senior',
    descripcion: 'Implementación del código Code.gs para conectar el portal con la base de datos de Sheets y Google Drive con seguridad mediante Session.getActiveUser().',
    pasos: [
      'Abrir Editor de Apps Script vinculado al Google Sheets',
      'Pegar código de servicio API y controladores doGet / doPost',
      'Desplegar como Aplicación Web: "Ejecutar como: Mi cuenta", "Quién tiene acceso: Cualquier usuario con la cuenta institucional o cualquier usuario (según el módulo)"',
      'Obtener URL de ejecución (AKfycb...)'
    ]
  },
  {
    fase: 'FASE 7',
    nombre: 'Sistema Dinámico de Avisos y Actividades',
    duracion: 'Semana 4',
    responsable: 'Equipo Web y Prensa Escolar',
    descripcion: 'Incrustación de las tarjetas interactivas de Avisos urgentes en la portada y sincronización con el calendario oficial de Google Calendar.',
    pasos: [
      'Integrar widget de avisos con filtros por destinatario (Padres, Estudiantes, Docentes)',
      'Incrustar iframe de Google Calendar institucional para la agenda escolar'
    ]
  },
  {
    fase: 'FASE 8',
    nombre: 'Lanzamiento del Periódico Escolar Digital',
    duracion: 'Semana 5',
    responsable: 'Consejo Editorial / Club de Periodismo',
    descripcion: 'Publicación de la Edición 04 con artículos redactados por estudiantes y docentes, maquetación tipo revista y buscador por categorías temáticas.',
    pasos: [
      'Cargar los artículos aprobados en la hoja Articulos',
      'Generar portada digital de alta calidad',
      'Habilitar el selector de números y archivo histórico de ediciones pasadas'
    ]
  },
  {
    fase: 'FASE 9',
    nombre: 'Panel Administrativo y Flujo Editorial en Vivo',
    duracion: 'Semana 5-6',
    responsable: 'Equipo Directivo y Desarrollador',
    descripcion: 'Configuración de la bandeja de entrada para que los editores y docentes califiquen, soliciten correcciones o aprueben las propuestas de los estudiantes en tiempo real.',
    pasos: [
      'Probar el ciclo completo: Estudiante envía propuesta -> Docente revisa -> Editor aprueba -> Aparece en portada',
      'Auditoría automática de cada cambio registrado'
    ]
  },
  {
    fase: 'FASE 10',
    nombre: 'Matriz de Roles, Permisos y Seguridad',
    duracion: 'Semana 6',
    responsable: 'Administrador de Dominio Google Workspace',
    descripcion: 'Asignación formal de privilegios a los correos del personal según su función (Superadmin, Administrador, Editor, Docente, Estudiante).',
    pasos: [
      'Crear grupos de Google Workspace: administradores@, editores-periodico@, docentes@',
      'Sincronizar correos institucionales con la hoja Usuarios'
    ]
  },
  {
    fase: 'FASE 11',
    nombre: 'Pruebas de Calidad, Responsive y Accesibilidad',
    duracion: 'Semana 7',
    responsable: 'Equipo de QA / Estudiantes de 6to Informática',
    descripcion: 'Verificación en teléfonos móviles, tabletas y computadoras portátiles. Pruebas de velocidad de carga y cumplimiento de contraste WCAG AA.',
    pasos: [
      'Probar envío de fotos desde teléfonos Android e iOS',
      'Auditar rendimiento en conexiones con ancho de banda variable del Suroeste'
    ]
  },
  {
    fase: 'FASE 12',
    nombre: 'Capacitación, Publicación Oficial y Lanzamiento Comunitario',
    duracion: 'Semana 8',
    responsable: 'Rectoría / Dirección General',
    descripcion: 'Presentación formal ante la comunidad de Barahona, Diócesis, distrito educativo 01-03 y entrega del Manual del Administrador al personal.',
    pasos: [
      'Taller práctico de 2 horas para docentes sobre cómo subir circulares y revisar artículos',
      'Vincular dominio personalizado oficial: www.licateba.edu.do a Google Sites vía DNS de Google Workspace'
    ]
  }
];
