import {
  Aviso,
  Actividad,
  ArticuloPeriodico,
  EdicionPeriodico,
  PropuestaArticulo,
  User,
  AuditLog,
  SheetTableDef
} from '../types';

export const INSTITUCION_INFO = {
  nombreCompleto: 'Liceo Católico Tecnológico de Barahona',
  siglas: 'LICATEBA',
  lema: 'Formando Líderes en Valores Cristianos y Excelencia Tecnológica',
  lemaLatino: '"Sapientia, Fides et Ars Technica"',
  ubicacion: 'Barahona, República Dominicana',
  direccion: 'Calle Nuestra Señora del Rosario esq. Duarte, Barahona, R.D.',
  telefono: '(809) 524-2100 / (809) 524-2890',
  email: 'contacto@licateba.edu.do',
  rector: 'Pbro. Lic. Marcos Aurelio Féliz Méndez',
  directoraAcademica: 'Licda. Clara Inés Segura, M.A.',
  coordinadorTecnologico: 'Ing. David E. Pérez Peña',
  fundacion: '1998',
  redes: {
    facebook: 'https://facebook.com/licateba.oficial',
    instagram: 'https://instagram.com/licatebard',
    youtube: 'https://youtube.com/@licateba_tv',
  }
};

export const AREAS_TECNICAS = [
  {
    id: 'informatica-software',
    nombre: 'Desarrollo y Administración de Aplicaciones Informáticas',
    sigla: 'DAAI',
    duracion: '3 Años (4to, 5to y 6to de Secundaria)',
    icono: 'Code2',
    color: 'from-blue-600 to-cyan-700',
    descripcion: 'Forma técnicos con capacidad para programar en JavaScript/TypeScript, Python, PHP, gestionar bases de datos relacionales y NoSQL, y desarrollar soluciones web, móviles y en la nube.',
    salidasLaborales: ['Desarrollador Web Junior', 'Administrador de Bases de Datos', 'Técnico de Soporte de Software', 'Desarrollador de Apps Móviles'],
    competencias: [
      'Algoritmia y estructuras de datos',
      'Desarrollo Frontend con React y Tailwind',
      'APIs RESTful y Node.js / Google Apps Script',
      'Diseño UX/UI y metodologías ágiles (Scrum)'
    ],
    talleres: ['Laboratorio de Computación Ada Lovelace', 'Hub de Innovación y Robótica']
  },
  {
    id: 'redes-sistemas',
    nombre: 'Soporte de Redes y Sistemas Informáticos',
    sigla: 'SRSI',
    duracion: '3 Años',
    icono: 'Network',
    color: 'from-indigo-600 to-blue-800',
    descripcion: 'Capacita en la instalación, configuración, cableado estructurado, fibra óptica, mantenimiento preventivo y administración de redes LAN/WLAN y servidores Windows/Linux.',
    salidasLaborales: ['Administrador de Redes Locales', 'Técnico de Cableado y Telecomunicaciones', 'Especialista en Ciberseguridad Básica'],
    competencias: [
      'Configuración de routers y switches Cisco',
      'Cableado de fibra óptica y certificación',
      'Gestión de Directorio Activo y Workspace',
      'Mantenimiento de hardware y periféricos'
    ],
    talleres: ['Taller de Redes Cisco y Fibra Óptica']
  },
  {
    id: 'gestion-tributaria',
    nombre: 'Gestión Administrativa y Tributaria',
    sigla: 'GAT',
    duracion: '3 Años',
    icono: 'FileSpreadsheet',
    color: 'from-emerald-600 to-teal-800',
    descripcion: 'Especialidad orientada a la contabilidad computarizada, nóminas, declaraciones juradas de impuestos (DGII), inventarios y procesos de administración empresarial moderna.',
    salidasLaborales: ['Auxiliar de Contabilidad', 'Gestor de Compras y Almacén', 'Asistente de Recursos Humanos', 'Encargado de Facturación'],
    competencias: [
      'Legislación laboral dominicana y Código Tributario',
      'Sistemas contables computarizados',
      'Manejo avanzado de hojas de cálculo (Google Sheets/Excel)',
      'Archivo digital y correspondencia mercantil'
    ],
    talleres: ['Oficina de Prácticas Empresariales San José']
  },
  {
    id: 'instalaciones-electricas',
    nombre: 'Instalaciones Eléctricas y Automatización Industrial',
    sigla: 'IEAI',
    duracion: '3 Años',
    icono: 'Zap',
    color: 'from-amber-600 to-orange-700',
    descripcion: 'Prepara profesionales en instalaciones residenciales y comerciales, energía solar fotovoltaica, cuadros eléctricos industriales y controladores lógicos programables (PLC).',
    salidasLaborales: ['Instalador Electricista Certificado', 'Instalador de Paneles Solares', 'Técnico en Mantenimiento de Tableros Eléctricos'],
    competencias: [
      'Diseño y ejecución de circuitos de fuerza y control',
      'Dimensionamiento de sistemas solares fotovoltaicos',
      'Automatismos con relés y PLC',
      'Normas de seguridad eléctrica OSHA y RETIE'
    ],
    talleres: ['Taller de Electrotecnia Nikola Tesla']
  }
];

export const USUARIOS_MOCK: User[] = [
  {
    id: 'u-superadmin',
    nombre: 'Ing. David Pérez Peña',
    email: 'david.perez@licateba.edu.do',
    rol: 'superadmin',
    departamentoOCurso: 'Dirección de Tecnología & Sistemas',
    fotoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    activo: true
  },
  {
    id: 'u-admin',
    nombre: 'Licda. Clara Inés Segura',
    email: 'clara.segura@licateba.edu.do',
    rol: 'admin',
    departamentoOCurso: 'Dirección Académica',
    fotoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    activo: true
  },
  {
    id: 'u-editor',
    nombre: 'Prof. Rafael Alcántara M.',
    email: 'rafael.alcantara@licateba.edu.do',
    rol: 'editor',
    departamentoOCurso: 'Dpto. de Lengua Española & Medios Escolares',
    fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    activo: true
  },
  {
    id: 'u-docente',
    nombre: 'Inga. Marielis Batista',
    email: 'marielis.batista@licateba.edu.do',
    rol: 'docente',
    departamentoOCurso: 'Área Técnica de Informática',
    fotoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    activo: true
  },
  {
    id: 'u-estudiante',
    nombre: 'Carlos Manuel Matos',
    email: 'carlos.matos24@licateba.edu.do',
    rol: 'estudiante',
    departamentoOCurso: '6to Informática - Sección A',
    fotoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    activo: true
  },
  {
    id: 'u-visitante',
    nombre: 'Comunidad Educativa Barahonera',
    email: 'visitante@publico.com',
    rol: 'visitante',
    departamentoOCurso: 'Público General / Padre de Familia',
    fotoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    activo: true
  }
];

export const AVISOS_INITIAL: Aviso[] = [
  {
    id: 'av-01',
    titulo: 'Convocatoria a Asamblea General Ordinaria de Familias (APMAE)',
    contenido: 'La Dirección General y el Consejo de Gestión invitan a todos los padres, madres y tutores de los estudiantes de 4to, 5to y 6to de secundaria a la Primera Asamblea General del año lectivo, para presentar el plan operativo anual, calendario de evaluaciones técnicas y acordar las metas de acompañamiento pastoral.',
    categoria: 'reunion',
    prioridad: 'alta',
    destinatario: 'padres',
    fechaPublicacion: '2026-09-08',
    fechaExpiracion: '2026-09-25',
    autor: 'Dirección General y Pastoral',
    autorCargo: 'Equipo Directivo LICATEBA',
    archivoAdjunto: {
      nombre: 'Circular_Asamblea_General_Familias_2026.pdf',
      url: 'https://drive.google.com/file/d/licateba-circular-01/view',
      tamano: '342 KB'
    },
    estado: 'publicado'
  },
  {
    id: 'av-02',
    titulo: 'ALERTA PREVENTIVA: Monitoreo de Vaguada y Plan de Continuidad Académica Virtual',
    contenido: 'Atendiendo a las orientaciones del Centro de Operaciones de Emergencias (COE) y la Dirección Regional 01 de Educación ante la presencia de una activa vaguada sobre la Región Enriquillo, informamos que la docencia se mantiene en modalidad híbrida/virtual a través de Google Classroom este jueves 17. Favor estar atentos a los canales oficiales.',
    categoria: 'suspension',
    prioridad: 'urgente',
    destinatario: 'todos',
    fechaPublicacion: '2026-09-11',
    fechaExpiracion: '2026-09-18',
    autor: 'Comité Institucional de Mitigación de Riesgos',
    autorCargo: 'Subdirección Administrativa',
    archivoAdjunto: {
      nombre: 'Protocolo_Emergencias_Lluvias_LICATEBA.pdf',
      url: 'https://drive.google.com/file/d/licateba-protocolo/view',
      tamano: '512 KB'
    },
    estado: 'publicado'
  },
  {
    id: 'av-03',
    titulo: 'Apertura de Convocatoria para Pasantías Técnicas en Empresas de la Región Sur',
    contenido: 'Se convoca a los estudiantes de 6to de Secundaria de las áreas técnicas de Informática, Contabilidad y Electricidad a registrar su documentación para el programa de Pasantías Técnicas Laborales 2026-2027 en empresas aliadas (Consorcio Azucarero Central, Banco Agrícola, Edesur Dominicana y Pymes Tecnológicas de Barahona).',
    categoria: 'academico',
    prioridad: 'alta',
    destinatario: 'estudiantes',
    fechaPublicacion: '2026-09-05',
    fechaExpiracion: '2026-10-15',
    autor: 'Coordinación de Formación en Centros de Trabajo (FCT)',
    autorCargo: 'Prof. Wilson Carrasco',
    archivoAdjunto: {
      nombre: 'Guia_Pasantias_FCT_Formularios_2026.pdf',
      url: 'https://drive.google.com/file/d/licateba-fct/view',
      tamano: '1.2 MB'
    },
    estado: 'publicado'
  },
  {
    id: 'av-04',
    titulo: 'Horario Especial de Eucaristía Mensual y Confesiones Juveniles',
    contenido: 'Invitamos a toda la comunidad escolar a la Santa Misa mensual en la Capilla Madre del Buen Consejo del centro. Los sacerdotes estarán disponibles para el sacramento de la reconciliación a partir de las 8:00 AM.',
    categoria: 'recordatorio',
    prioridad: 'normal',
    destinatario: 'todos',
    fechaPublicacion: '2026-09-02',
    fechaExpiracion: '2026-09-30',
    autor: 'Equipo de Pastoral Juvenil',
    autorCargo: 'Pastoral LICATEBA',
    estado: 'publicado'
  }
];

export const ACTIVIDADES_INITIAL: Actividad[] = [
  {
    id: 'act-01',
    titulo: 'Gran Feria Tecnológica y de Innovación: LICATEBA TECH 2026',
    descripcion: 'Muestra anual de proyectos de grado técnico: sistemas de automatización IoT para agricultura en el Valle de Neiba, aplicaciones móviles comunitarias, robots recicladores y proyectos de contabilidad financiera para cooperativas.',
    categoria: 'feria_tecnologica',
    fecha: '2026-10-24',
    hora: '09:00 AM - 04:30 PM',
    lugar: 'Polideportivo & Explanada Tecnológica LICATEBA',
    responsable: 'Comité de Áreas Técnicas e Ing. David Pérez',
    estado: 'proxima',
    imagenPrincipal: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    asistenciaEsperada: 650,
    galeria: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80'
    ],
    documentos: [
      { nombre: 'Bases_Concurso_Proyectos_Tech2026.pdf', url: 'https://drive.google.com/tech-rules' }
    ]
  },
  {
    id: 'act-02',
    titulo: 'Misa y Acto Solemne de Apertura del Año de Gracia y Compromiso Cristiano',
    descripcion: 'Celebración eucarística presidida por Mons. Obispo de la Diócesis de Barahona, con bendición especial a los estudiantes de nuevo ingreso y juramento de los presidentes de secciones escolares.',
    categoria: 'religiosa_pastoral',
    fecha: '2026-09-20',
    hora: '08:30 AM',
    lugar: 'Auditorio Mayor Monseñor Fabio Mamerto Rivas',
    responsable: 'Pastoral Educativa y Diócesis de Barahona',
    estado: 'proxima',
    imagenPrincipal: 'https://images.unsplash.com/photo-1548625361-195fe57876a4?w=800&auto=format&fit=crop&q=80',
    asistenciaEsperada: 480
  },
  {
    id: 'act-03',
    titulo: 'Conferencia Magistral: "Inteligencia Artificial Ética y Desarrollo en el Sur"',
    descripcion: 'Disertación dictada por egresados destacados en Silicon Valley y Santo Domingo sobre el uso de modelos de lenguaje, desarrollo con Google Cloud y oportunidades de empleo remoto para jóvenes de Barahona y la región Enriquillo.',
    categoria: 'charla',
    fecha: '2026-10-05',
    hora: '10:00 AM',
    lugar: 'Aula Magna Tecnológica & Transmisión Google Meet',
    responsable: 'Dpto. de Informática y Club de Programación',
    estado: 'proxima',
    imagenPrincipal: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
    asistenciaEsperada: 250
  },
  {
    id: 'act-04',
    titulo: 'Jornada Ecológica de Saneamiento y Reforestación del Río Birán',
    descripcion: 'Actividad comunitaria donde estudiantes de 5to y 6to plantaron más de 400 árboles de caoba y mangle en la ribera del río Birán en colaboración con Medio Ambiente y Defensa Civil.',
    categoria: 'cultural',
    fecha: '2026-08-28',
    hora: '07:30 AM - 12:00 PM',
    lugar: 'Margen del Río Birán y Parque Litoral María Montez',
    responsable: 'Club Ambiental LICATEBA Verde',
    estado: 'realizada',
    imagenPrincipal: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    asistenciaEsperada: 120
  }
];

export const EDICIONES_PERIODICO: EdicionPeriodico[] = [
  {
    id: 'ed-04',
    numero: 'Edición 04',
    titulo: 'Innovación Tecnológica y Compromiso Social en la Perla del Sur',
    fechaPublicacion: 'Septiembre 2026',
    temaCentral: 'El rol de los jóvenes técnicos en el despegue económico de Barahona y Pedernales',
    portadaUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80',
    editorial: 'En esta cuarta entrega de "LICATEBA Informa", celebramos la convergencia entre la formación en valores cristianos y el dominio de herramientas tecnológicas de última generación. Nuestros estudiantes no solo aprenden a programar o a balancear estados contables; aprenden a poner su intelecto al servicio de los sectores más vulnerables de nuestra querida región Enriquillo.',
    editorJefe: 'Prof. Rafael Alcántara M. & Consejo Editorial Juvenil',
    activa: true
  },
  {
    id: 'ed-03',
    numero: 'Edición 03',
    titulo: 'Juventud, Robótica y Esperanza: Transformando el Presente',
    fechaPublicacion: 'Mayo 2026',
    temaCentral: 'Resultados del Encuentro Nacional de Robótica Educativa',
    portadaUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    editorial: 'Nuestros equipos de robótica demostraron que el talento del Sur dominicano compite al más alto nivel.',
    editorJefe: 'Prof. Rafael Alcántara M.',
    activa: false
  },
  {
    id: 'ed-02',
    numero: 'Edición 02',
    titulo: 'Educación Técnica: Pasaporte al Futuro Laboral Digno',
    fechaPublicacion: 'Febrero 2026',
    temaCentral: 'Alianzas público-privadas para la inserción laboral de bachilleres técnicos',
    portadaUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
    editorial: 'Reflexión profunda sobre las habilidades blandas y técnicas más cotizadas en la era digital.',
    editorJefe: 'Prof. Rafael Alcántara M.',
    activa: false
  }
];

export const ARTICULOS_PERIODICO_INITIAL: ArticuloPeriodico[] = [
  {
    id: 'art-01',
    edicionId: 'ed-04',
    titulo: 'Estudiantes de Informática de LICATEBA Crean Sistema de Monitoreo de Agua con Google Sheets y Sensores IoT',
    subtitulo: 'El proyecto beneficiará a tres comunidades rurales de la cuenca baja del Yaque del Sur alertando sobre niveles y turbidez.',
    autor: 'Carlos Manuel Matos & Nicole Terrero',
    autorRol: 'Estudiante',
    cursoOSeccion: '6to Informática A',
    fecha: '10 de Septiembre, 2026',
    categoria: 'tecnologia',
    imagenDestacada: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
    destacadoEnPortada: true,
    visitas: 1420,
    tags: ['IoT', 'Google Sheets', 'Microcontroladores', 'Impacto Social', 'Barahona'],
    estado: 'publicado',
    contenido: `
La sequía y las variaciones súbitas en el caudal de los canales de riego han sido históricamente un dolor de cabeza para los pequeños productores agrícolas de Barahona. Ante esta realidad, un equipo multidisciplinario de estudiantes del 6to año de la carrera técnica de Desarrollo y Administración de Aplicaciones Informáticas de LICATEBA desarrolló una solución de bajo costo y alto impacto.

Utilizando microcontroladores ESP32, sensores ultrasónicos de distancia y la API de Google Apps Script vinculada directamente a Google Sheets, el dispositivo toma mediciones del nivel del agua cada 15 minutos y las transmite vía red celular a una hoja de cálculo protegida en la nube institucional de LICATEBA.

"Nuestra meta era crear algo que no requiriera servidores costosos ni suscripciones mensuales en dólares que los agricultores locales no pudieran pagar", explica Carlos Manuel Matos, líder del equipo estudiantil. "Google Workspace nos dio la infraestructura perfecta: segura, gratuita y con alertas automáticas por correo electrónico vía Gmail".

El proyecto ya fue probado en una fase piloto en el canal de Vicente Noble, logrando un 99.2% de precisión en los datos de telemetría. La iniciativa fue felicitada por las autoridades de INDRHI y representará al liceo en el Congreso Científico Juvenil del Caribe.
    `
  },
  {
    id: 'art-02',
    edicionId: 'ed-04',
    titulo: 'La Fe y el Esfuerzo: Entrevista Exclusiva con la Maestra Fundadora Sor María Consuelo',
    subtitulo: '28 años de entrega incondicional forjando generaciones de técnicos íntegros en Barahona.',
    autor: 'Yuleisy Peña',
    autorRol: 'Estudiante',
    cursoOSeccion: '5to Gestión Administrativa',
    fecha: '08 de Septiembre, 2026',
    categoria: 'entrevistas',
    imagenDestacada: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&auto=format&fit=crop&q=80',
    destacadoEnPortada: false,
    visitas: 890,
    tags: ['Historia', 'Vocación', 'Valores Católicos', 'Entrevista'],
    estado: 'publicado',
    contenido: `
Con una sonrisa serena y un rosario de madera entre sus manos, Sor María Consuelo nos recibe en la biblioteca del liceo, un lugar que ella misma ayudó a catalogar libro por libro a finales de los años 90.

"Cuando pusimos la primera piedra de LICATEBA, muchos decían que un instituto tecnológico católico en el Suroeste no prosperaría por la falta de recursos. Sin embargo, San Juan Bosco y la Providencia divina nos enseñaron que donde hay fe, disciplina y amor sincero a los jóvenes, las montañas se allanan", rememora conmovida.

Durante la conversación, la religiosa enfatizó que la tecnología sin ética es una espada sin empuñadura: "Un técnico que sabe hackear un sistema o manipular una cuenta contable pero no tiene temor de Dios ni compasión por su prójimo, destruye a su comunidad. Por eso en LICATEBA formamos el corazón primero y la mente después".
    `
  },
  {
    id: 'art-03',
    edicionId: 'ed-04',
    titulo: 'Victoria Histórica: El Equipo de Ajedrez de LICATEBA se Corona Campeón Regional Escolar',
    subtitulo: 'Los estudiantes lograron marca perfecta en el torneo celebrado en San Juan de la Maguana.',
    autor: 'Prof. Wilson Carrasco',
    autorRol: 'Docente',
    cursoOSeccion: 'Educación Física y Deportes',
    fecha: '05 de Septiembre, 2026',
    categoria: 'deportes',
    imagenDestacada: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=900&auto=format&fit=crop&q=80',
    destacadoEnPortada: false,
    visitas: 745,
    tags: ['Ajedrez', 'Deportes', 'Campeonato', 'Mente Sana'],
    estado: 'publicado',
    contenido: `
En una jornada repleta de tensión y genialidad táctica, el seleccionado de ajedrez de LICATEBA se alzó con la copa del Campeonato Regional Escolar del Sur, superando a delegaciones tradicionales de Azua, Bahoruco y San Juan.

La estudiante de 4to año de Electricidad, Génesis Medina, fue nombrada la jugadora más valiosa tras vencer en seis rondas consecutivas con aperturas impecables de peón dama. "El ajedrez se parece mucho a programar o a diseñar un circuito eléctrico: un error de cálculo te cuesta la partida, pero si piensas tres jugadas adelante con paciencia, la victoria llega", declaró Génesis entre los vítores de sus compañeros.
    `
  },
  {
    id: 'art-04',
    edicionId: 'ed-04',
    titulo: 'El Larimar y la Bahía de Neiba: Belleza Natural que Debemos Proteger',
    subtitulo: 'Crónica estudiantil sobre el tesoro geológico único en el mundo ubicado en nuestra provincia.',
    autor: 'Bryan Emmanuel Suero',
    autorRol: 'Estudiante',
    cursoOSeccion: '5to Informática B',
    fecha: '02 de Septiembre, 2026',
    categoria: 'medio_ambiente',
    imagenDestacada: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80',
    destacadoEnPortada: false,
    visitas: 630,
    tags: ['Medio Ambiente', 'Barahona', 'Larimar', 'Ecoturismo'],
    estado: 'publicado',
    contenido: `
Nuestra provincia de Barahona tiene privilegios que ninguna otra latitud del planeta puede ostentar: en las lomas de Los Chupaderos yace la única mina de pectolita azul, conocida por todos como la gema Larimar.

El Club Ecológico de LICATEBA realizó una expedición de investigación comunitaria para entender las condiciones de los artesanos y la importancia de preservar los ríos que bajan de la Sierra de Bahoruco. La riqueza de Barahona no reside únicamente en extraer minerales, sino en convivir armónicamente con nuestra flora costera, manglares y playas vírgenes.
    `
  },
  {
    id: 'art-05',
    edicionId: 'ed-04',
    titulo: 'Finanzas Personales para Jóvenes Bachilleres: ¿Cómo Administrar tu Primer Sueldo?',
    subtitulo: 'Consejos prácticos redactados por los estudiantes de 6to de Gestión Administrativa y Tributaria.',
    autor: 'Lía Marie Feliz & Altagracia Cuevas',
    autorRol: 'Estudiante',
    cursoOSeccion: '6to Contabilidad y Tributación',
    fecha: '30 de Agosto, 2026',
    categoria: 'proyectos',
    imagenDestacada: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&auto=format&fit=crop&q=80',
    destacadoEnPortada: false,
    visitas: 512,
    tags: ['Finanzas', 'Ahorro', 'Emprendimiento', 'Contabilidad'],
    estado: 'publicado',
    contenido: `
La transición de la vida escolar a las primeras pasantías remuneradas suele traer dudas financieras: ¿cuánto ahorrar?, ¿cómo funciona la retención del ISR y la TSS en la República Dominicana?, ¿es conveniente solicitar una tarjeta de crédito?

En este artículo, desglosamos la regla 50/30/20 adaptada al contexto dominicano y compartimos una plantilla interactiva de Google Sheets creada por los alumnos de GAT para proyectar gastos personales con facilidad.
    `
  }
];

export const PROPUESTAS_INITIAL: PropuestaArticulo[] = [
  {
    id: 'prop-01',
    nombreEstudiante: 'Ángel Gabriel Ferreras',
    emailEstudiante: 'angel.ferreras@licateba.edu.do',
    cursoSeccion: '5to Informática - B',
    tema: 'Ciberseguridad y Redes Sociales',
    categoria: 'tecnologia',
    tituloPropuesto: '¿Por qué nunca debes usar la misma contraseña en tus cuentas educativas y personales?',
    contenido: 'Quiero alertar a mis compañeros sobre los ataques de phishing que han estado llegando a correos estudiantiles con supuestas ofertas de empleo y becas falsas. Explico cómo activar la verificación de 2 pasos de Google Workspace institucional y cómo usar un gestor de contraseñas seguro.',
    fotografiaUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
    documentoUrl: 'https://docs.google.com/document/d/propuesta-angel-ferreras/edit',
    autorizacionPublicacion: true,
    fechaEnvio: '2026-09-10',
    estado: 'pendiente',
    retroalimentacionDocente: 'Excelente temática. Pendiente de que el comité editorial revise la redacción del tercer párrafo sobre autenticación biométrica.',
    revisorAsignado: 'Prof. Rafael Alcántara M.'
  },
  {
    id: 'prop-02',
    nombreEstudiante: 'Rosanna Méndez Féliz',
    emailEstudiante: 'rosanna.mendez@licateba.edu.do',
    cursoSeccion: '6to Electricidad y Automatización',
    tema: 'Energía Solar en la Costa de Barahona',
    categoria: 'ciencia',
    tituloPropuesto: 'Potencial fotovoltaico en Barahona: La capital del sol dominicano',
    contenido: 'Análisis técnico de radiación solar en la provincia de Barahona y propuesta para que el techo del pabellón técnico de LICATEBA sea energizado con paneles solares monocristalinos instalados por los propios estudiantes de electricidad.',
    fotografiaUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
    documentoUrl: 'https://docs.google.com/document/d/propuesta-rosanna-solar/edit',
    autorizacionPublicacion: true,
    fechaEnvio: '2026-09-07',
    estado: 'en_revision',
    retroalimentacionDocente: 'Muy buen sustento técnico. Favor incluir los cálculos de ahorro de la factura de Edesur en pesos dominicanos.',
    revisorAsignado: 'Inga. Marielis Batista'
  },
  {
    id: 'prop-03',
    nombreEstudiante: 'Enmanuel Medina R.',
    emailEstudiante: 'enmanuel.medina@licateba.edu.do',
    cursoSeccion: '4to Contabilidad y Finanzas',
    tema: 'Poesía y Sentimiento Barahonero',
    categoria: 'literatura',
    tituloPropuesto: 'Oda al Mar Caribe desde el Malecón de Barahona',
    contenido: 'Conjunto de tres poemas dedicados al azul turquesa de nuestras costas y al esfuerzo de los pescadores locales que madrugan con esperanza.',
    autorizacionPublicacion: true,
    fechaEnvio: '2026-09-04',
    estado: 'aprobado',
    retroalimentacionDocente: 'Poemas con hermosa métrica y sensibilidad. Aprobado para inclusión en la sección de Literatura de la Edición 04.',
    revisorAsignado: 'Prof. Rafael Alcántara M.',
    fechaRevision: '2026-09-06'
  },
  {
    id: 'prop-04',
    nombreEstudiante: 'Franklin Silfa',
    emailEstudiante: 'franklin.silfa@licateba.edu.do',
    cursoSeccion: '5to Informática - A',
    tema: 'Videojuegos y Aprendizaje',
    categoria: 'opinion',
    tituloPropuesto: 'Los eSports deberían tener un club oficial en nuestro liceo',
    contenido: 'Ensayo de opinión argumentando cómo juegos como Rocket League y League of Legends fomentan el trabajo en equipo, la rapidez de reflejos y la estrategia lógica.',
    autorizacionPublicacion: true,
    fechaEnvio: '2026-08-25',
    estado: 'requiere_correccion',
    retroalimentacionDocente: 'El tema es atractivo, pero el tono debe ser más académico y basarse en estudios de neurociencia educativa. Favor reescribir la sección de conclusiones.',
    revisorAsignado: 'Licda. Clara Inés Segura',
    fechaRevision: '2026-08-29'
  }
];

export const AUDITORIA_INITIAL: AuditLog[] = [
  {
    id: 'log-01',
    fechaHora: '2026-09-11 10:14:22',
    usuario: 'david.perez@licateba.edu.do',
    rol: 'superadmin',
    modulo: 'Avisos',
    accion: 'CREAR_AVISO',
    detalles: 'Se publicó el aviso urgente "ALERTA PREVENTIVA: Monitoreo de Vaguada"'
  },
  {
    id: 'log-02',
    fechaHora: '2026-09-10 16:30:15',
    usuario: 'rafael.alcantara@licateba.edu.do',
    rol: 'editor',
    modulo: 'Editorial',
    accion: 'REVISAR_PROPUESTA',
    detalles: 'Propuesta #prop-03 de Enmanuel Medina cambiada a estado APROBADO'
  },
  {
    id: 'log-03',
    fechaHora: '2026-09-09 11:05:40',
    usuario: 'clara.segura@licateba.edu.do',
    rol: 'admin',
    modulo: 'Actividades',
    accion: 'ACTUALIZAR_ESTADO',
    detalles: 'Actividad "Jornada Ecológica Río Birán" marcada como REALIZADA'
  },
  {
    id: 'log-04',
    fechaHora: '2026-09-08 09:20:00',
    usuario: 'david.perez@licateba.edu.do',
    rol: 'superadmin',
    modulo: 'Seguridad / Roles',
    accion: 'AUDITAR_PERMISOS',
    detalles: 'Verificación de sincronización con la unidad organizativa de Google Workspace @licateba.edu.do'
  }
];

export const GOOGLE_SHEETS_SCHEMA_DEFINITIONS: SheetTableDef[] = [
  {
    nombre: 'Usuarios',
    descripcion: 'Almacena el directorio de usuarios con acceso autenticado institucional y su rol asignado.',
    icono: 'Users',
    columnas: [
      { nombre: 'id_usuario', tipo: 'string', descripcion: 'Identificador único (u-xxx)', ejemplo: 'u-001' },
      { nombre: 'email_institucional', tipo: 'string', descripcion: 'Correo @licateba.edu.do obtenido vía Session.getActiveUser()', ejemplo: 'david.perez@licateba.edu.do' },
      { nombre: 'nombre_completo', tipo: 'string', descripcion: 'Nombre y apellido del usuario', ejemplo: 'Ing. David Pérez' },
      { nombre: 'rol', tipo: 'enum', descripcion: 'superadmin | admin | editor | docente | estudiante | visitante', ejemplo: 'superadmin' },
      { nombre: 'departamento_curso', tipo: 'string', descripcion: 'Área académica o curso/sección escolar', ejemplo: 'Dirección de Tecnología' },
      { nombre: 'fecha_alta', tipo: 'date', descripcion: 'Fecha de registro en la plataforma', ejemplo: '2026-01-15' },
      { nombre: 'estado_activo', tipo: 'boolean', descripcion: 'TRUE si tiene acceso habilitado', ejemplo: 'TRUE' }
    ],
    registrosEjemplo: [
      { id_usuario: 'u-001', email_institucional: 'david.perez@licateba.edu.do', nombre_completo: 'Ing. David Pérez', rol: 'superadmin', departamento_curso: 'Dirección de Tecnología', fecha_alta: '2026-01-15', estado_activo: true },
      { id_usuario: 'u-002', email_institucional: 'clara.segura@licateba.edu.do', nombre_completo: 'Licda. Clara Inés Segura', rol: 'admin', departamento_curso: 'Dirección Académica', fecha_alta: '2026-01-15', estado_activo: true },
      { id_usuario: 'u-003', email_institucional: 'rafael.alcantara@licateba.edu.do', nombre_completo: 'Prof. Rafael Alcántara', rol: 'editor', departamento_curso: 'Lengua y Medios', fecha_alta: '2026-02-01', estado_activo: true },
      { id_usuario: 'u-004', email_institucional: 'carlos.matos24@licateba.edu.do', nombre_completo: 'Carlos Manuel Matos', rol: 'estudiante', departamento_curso: '6to Informática A', fecha_alta: '2026-08-20', estado_activo: true }
    ]
  },
  {
    nombre: 'Avisos',
    descripcion: 'Base de datos de circulares, alertas meteorológicas, comunicados urgentes y reuniones.',
    icono: 'BellRing',
    columnas: [
      { nombre: 'id_aviso', tipo: 'string', descripcion: 'Código único del comunicado (av-xxx)', ejemplo: 'av-01' },
      { nombre: 'titulo', tipo: 'string', descripcion: 'Encabezado claro del aviso', ejemplo: 'ALERTA PREVENTIVA: Vaguada' },
      { nombre: 'contenido', tipo: 'string', descripcion: 'Cuerpo completo de la notificación', ejemplo: 'Se activa el protocolo...' },
      { nombre: 'categoria', tipo: 'enum', descripcion: 'comunicado | suspension | reunion | recordatorio | academico', ejemplo: 'suspension' },
      { nombre: 'prioridad', tipo: 'enum', descripcion: 'urgente | alta | normal', ejemplo: 'urgente' },
      { nombre: 'destinatario', tipo: 'enum', descripcion: 'todos | estudiantes | docentes | padres', ejemplo: 'todos' },
      { nombre: 'fecha_publicacion', tipo: 'date', descripcion: 'Fecha de emisión (YYYY-MM-DD)', ejemplo: '2026-09-11' },
      { nombre: 'fecha_expiracion', tipo: 'date', descripcion: 'Fecha límite tras la cual se archiva automáticamente', ejemplo: '2026-09-18' },
      { nombre: 'autor', tipo: 'string', descripcion: 'Firma responsable', ejemplo: 'Subdirección Administrativa' },
      { nombre: 'adjunto_url', tipo: 'url', descripcion: 'Enlace a archivo en Google Drive', ejemplo: 'https://drive.google.com/...' },
      { nombre: 'estado', tipo: 'enum', descripcion: 'publicado | borrador | archivado', ejemplo: 'publicado' }
    ],
    registrosEjemplo: [
      { id_aviso: 'av-01', titulo: 'ALERTA: Vaguada y Modalidad Virtual', categoria: 'suspension', prioridad: 'urgente', destinatario: 'todos', fecha_publicacion: '2026-09-11', estado: 'publicado' },
      { id_aviso: 'av-02', titulo: 'Convocatoria Asamblea General APMAE', categoria: 'reunion', prioridad: 'alta', destinatario: 'padres', fecha_publicacion: '2026-09-08', estado: 'publicado' },
      { id_aviso: 'av-03', titulo: 'Apertura de Pasantías Técnicas 2026', categoria: 'academico', prioridad: 'alta', destinatario: 'estudiantes', fecha_publicacion: '2026-09-05', estado: 'publicado' }
    ]
  },
  {
    nombre: 'Actividades',
    descripcion: 'Eventos escolares, ferias tecnológicas, charlas magistrales y celebraciones pastorales.',
    icono: 'CalendarCheck',
    columnas: [
      { nombre: 'id_actividad', tipo: 'string', descripcion: 'Código identificador (act-xxx)', ejemplo: 'act-01' },
      { nombre: 'titulo', tipo: 'string', descripcion: 'Nombre del evento', ejemplo: 'LICATEBA TECH 2026' },
      { nombre: 'descripcion', tipo: 'string', descripcion: 'Resumen y objetivos del evento', ejemplo: 'Feria de proyectos técnicos...' },
      { nombre: 'categoria', tipo: 'enum', descripcion: 'feria_tecnologica | religiosa_pastoral | deportiva | charla | cultural', ejemplo: 'feria_tecnologica' },
      { nombre: 'fecha', tipo: 'date', descripcion: 'Fecha de celebración (YYYY-MM-DD)', ejemplo: '2026-10-24' },
      { nombre: 'hora', tipo: 'string', descripcion: 'Horario del evento', ejemplo: '09:00 AM' },
      { nombre: 'lugar', tipo: 'string', descripcion: 'Instalación dentro o fuera del centro', ejemplo: 'Polideportivo LICATEBA' },
      { nombre: 'responsable', tipo: 'string', descripcion: 'Coordinador del evento', ejemplo: 'Ing. David Pérez' },
      { nombre: 'estado', tipo: 'enum', descripcion: 'proxima | realizada | cancelada', ejemplo: 'proxima' },
      { nombre: 'imagen_url', tipo: 'url', descripcion: 'Foto principal (Drive o CDN)', ejemplo: 'https://images.unsplash.com/...' },
      { nombre: 'asistencia_esperada', tipo: 'number', descripcion: 'Aforo proyectado', ejemplo: 650 }
    ],
    registrosEjemplo: [
      { id_actividad: 'act-01', titulo: 'Feria de Innovación LICATEBA TECH', categoria: 'feria_tecnologica', fecha: '2026-10-24', lugar: 'Polideportivo', estado: 'proxima' },
      { id_actividad: 'act-02', titulo: 'Misa Solemne de Bendición Escolar', categoria: 'religiosa_pastoral', fecha: '2026-09-20', lugar: 'Auditorio Mayor', estado: 'proxima' },
      { id_actividad: 'act-03', titulo: 'Conferencia Inteligencia Artificial Ética', categoria: 'charla', fecha: '2026-10-05', lugar: 'Aula Magna', estado: 'proxima' }
    ]
  },
  {
    nombre: 'Articulos',
    descripcion: 'Artículos publicados en el Periódico Escolar Digital "LICATEBA Informa".',
    icono: 'Newspaper',
    columnas: [
      { nombre: 'id_articulo', tipo: 'string', descripcion: 'Código del artículo (art-xxx)', ejemplo: 'art-01' },
      { nombre: 'id_edicion', tipo: 'string', descripcion: 'Número de edición a la que pertenece', ejemplo: 'ed-04' },
      { nombre: 'titulo', tipo: 'string', descripcion: 'Titular periodístico', ejemplo: 'Estudiantes crean sistema IoT' },
      { nombre: 'subtitulo', tipo: 'string', descripcion: 'Bajada o sumario de la noticia', ejemplo: 'Beneficiará a comunidades...' },
      { nombre: 'autor', tipo: 'string', descripcion: 'Nombre del autor', ejemplo: 'Carlos Manuel Matos' },
      { nombre: 'autor_rol', tipo: 'enum', descripcion: 'Estudiante | Docente | Equipo Editorial | Egresado', ejemplo: 'Estudiante' },
      { nombre: 'curso_seccion', tipo: 'string', descripcion: 'Grado o cargo institucional', ejemplo: '6to Informática A' },
      { nombre: 'categoria', tipo: 'enum', descripcion: 'tecnologia | ciencia | cultura | deportes | literatura | entrevistas', ejemplo: 'tecnologia' },
      { nombre: 'contenido', tipo: 'string', descripcion: 'Texto completo en formato enriquecido/Markdown', ejemplo: 'La sequía y las variaciones...' },
      { nombre: 'imagen_destacada_url', tipo: 'url', descripcion: 'Fotografía principal del artículo', ejemplo: 'https://...' },
      { nombre: 'destacado_portada', tipo: 'boolean', descripcion: 'TRUE para encabezar la edición', ejemplo: 'TRUE' },
      { nombre: 'visitas', tipo: 'number', descripcion: 'Contador de lecturas', ejemplo: 1420 },
      { nombre: 'estado', tipo: 'enum', descripcion: 'publicado | archivado', ejemplo: 'publicado' }
    ],
    registrosEjemplo: [
      { id_articulo: 'art-01', id_edicion: 'ed-04', titulo: 'Monitoreo de Agua con IoT en Barahona', autor: 'Carlos Manuel Matos', categoria: 'tecnologia', visitas: 1420, estado: 'publicado' },
      { id_articulo: 'art-02', id_edicion: 'ed-04', titulo: 'Entrevista con Sor María Consuelo', autor: 'Yuleisy Peña', categoria: 'entrevistas', visitas: 890, estado: 'publicado' },
      { id_articulo: 'art-03', id_edicion: 'ed-04', titulo: 'Ajedrez de LICATEBA Campeón Regional', autor: 'Prof. Wilson Carrasco', categoria: 'deportes', visitas: 745, estado: 'publicado' }
    ]
  },
  {
    nombre: 'Ediciones',
    descripcion: 'Volúmenes y números periódicos del Periódico Escolar Digital.',
    icono: 'BookOpen',
    columnas: [
      { nombre: 'id_edicion', tipo: 'string', descripcion: 'Código de edición (ed-xxx)', ejemplo: 'ed-04' },
      { nombre: 'numero', tipo: 'string', descripcion: 'Etiqueta pública (Edición 01, etc.)', ejemplo: 'Edición 04' },
      { nombre: 'titulo', tipo: 'string', descripcion: 'Lema central de la edición', ejemplo: 'Innovación en el Caribe' },
      { nombre: 'fecha_publicacion', tipo: 'string', descripcion: 'Mes y Año de lanzamiento', ejemplo: 'Septiembre 2026' },
      { nombre: 'portada_url', tipo: 'url', descripcion: 'Imagen de portada', ejemplo: 'https://...' },
      { nombre: 'editorial', tipo: 'string', descripcion: 'Texto de la carta editorial', ejemplo: 'En esta entrega...' },
      { nombre: 'editor_jefe', tipo: 'string', descripcion: 'Profesor o estudiante editor en jefe', ejemplo: 'Prof. Rafael Alcántara' },
      { nombre: 'activa', tipo: 'boolean', descripcion: 'TRUE para la edición corriente', ejemplo: 'TRUE' }
    ],
    registrosEjemplo: [
      { id_edicion: 'ed-04', numero: 'Edición 04', titulo: 'Innovación Tecnológica y Esperanza', fecha_publicacion: 'Septiembre 2026', editor_jefe: 'Prof. Rafael Alcántara', activa: true },
      { id_edicion: 'ed-03', numero: 'Edición 03', titulo: 'Juventud y Robótica', fecha_publicacion: 'Mayo 2026', editor_jefe: 'Prof. Rafael Alcántara', activa: false },
      { id_edicion: 'ed-02', numero: 'Edición 02', titulo: 'Educación Técnica: Pasaporte al Futuro', fecha_publicacion: 'Febrero 2026', editor_jefe: 'Prof. Rafael Alcántara', activa: false }
    ]
  },
  {
    nombre: 'Propuestas',
    descripcion: 'Artículos y contenidos propuestos por estudiantes para el flujo editorial.',
    icono: 'FileText',
    columnas: [
      { nombre: 'id_propuesta', tipo: 'string', descripcion: 'Código de la propuesta (prop-xxx)', ejemplo: 'prop-01' },
      { nombre: 'nombre_estudiante', tipo: 'string', descripcion: 'Nombre del alumno remitente', ejemplo: 'Ángel Gabriel Ferreras' },
      { nombre: 'email_estudiante', tipo: 'string', descripcion: 'Correo institucional @licateba.edu.do', ejemplo: 'angel.ferreras@licateba.edu.do' },
      { nombre: 'curso_seccion', tipo: 'string', descripcion: 'Grado y sección', ejemplo: '5to Informática B' },
      { nombre: 'tema', tipo: 'string', descripcion: 'Eje temático', ejemplo: 'Ciberseguridad y Redes' },
      { nombre: 'categoria', tipo: 'string', descripcion: 'Categoría propuesta', ejemplo: 'tecnologia' },
      { nombre: 'titulo_propuesto', tipo: 'string', descripcion: 'Título propuesto por el alumno', ejemplo: 'Seguridad en Contraseñas' },
      { nombre: 'contenido', tipo: 'string', descripcion: 'Texto redactado por el estudiante', ejemplo: 'Quiero alertar a mis compañeros...' },
      { nombre: 'fotografia_url', tipo: 'url', descripcion: 'Archivo fotográfico adjunto', ejemplo: 'https://drive.google.com/...' },
      { nombre: 'documento_url', tipo: 'url', descripcion: 'Google Doc con la propuesta', ejemplo: 'https://docs.google.com/...' },
      { nombre: 'autorizacion_publicacion', tipo: 'boolean', descripcion: 'Consentimiento para divulgar autoría', ejemplo: 'TRUE' },
      { nombre: 'fecha_envio', tipo: 'date', descripcion: 'Fecha de recepción', ejemplo: '2026-09-10' },
      { nombre: 'estado', tipo: 'enum', descripcion: 'borrador | pendiente | en_revision | requiere_correccion | aprobado | publicado', ejemplo: 'pendiente' },
      { nombre: 'retroalimentacion_docente', tipo: 'string', descripcion: 'Comentarios del profesor revisor', ejemplo: 'Revisar párrafos...' },
      { nombre: 'revisor_asignado', tipo: 'string', descripcion: 'Profesor o editor a cargo', ejemplo: 'Prof. Rafael Alcántara' }
    ],
    registrosEjemplo: [
      { id_propuesta: 'prop-01', nombre_estudiante: 'Ángel Gabriel Ferreras', curso_seccion: '5to Informática B', titulo_propuesto: 'Seguridad en Contraseñas', estado: 'pendiente' },
      { id_propuesta: 'prop-02', nombre_estudiante: 'Rosanna Méndez Féliz', curso_seccion: '6to Electricidad', titulo_propuesto: 'Potencial Fotovoltaico en Barahona', estado: 'en_revision' },
      { id_propuesta: 'prop-03', nombre_estudiante: 'Enmanuel Medina R.', curso_seccion: '4to Contabilidad', titulo_propuesto: 'Oda al Mar Caribe de Barahona', estado: 'aprobado' }
    ]
  },
  {
    nombre: 'Categorias',
    descripcion: 'Taxonomía unificada para avisos, eventos y artículos.',
    icono: 'Tag',
    columnas: [
      { nombre: 'id_categoria', tipo: 'string', descripcion: 'Código slug', ejemplo: 'tecnologia' },
      { nombre: 'nombre_legible', tipo: 'string', descripcion: 'Nombre visible al usuario', ejemplo: 'Tecnología e Innovación' },
      { nombre: 'modulo_aplicable', tipo: 'string', descripcion: 'periodico | avisos | actividades | todos', ejemplo: 'todos' },
      { nombre: 'color_badge', tipo: 'string', descripcion: 'Color hexadecimal o clase Tailwind', ejemplo: 'blue' }
    ],
    registrosEjemplo: [
      { id_categoria: 'tecnologia', nombre_legible: 'Tecnología & Robótica', modulo_aplicable: 'todos', color_badge: 'blue' },
      { id_categoria: 'pastoral_valores', nombre_legible: 'Pastoral & Valores', modulo_aplicable: 'todos', color_badge: 'amber' },
      { id_categoria: 'ciencia', nombre_legible: 'Ciencia & Medio Ambiente', modulo_aplicable: 'periodico', color_badge: 'emerald' },
      { id_categoria: 'deportes', nombre_legible: 'Deportes & Salud', modulo_aplicable: 'todos', color_badge: 'rose' }
    ]
  },
  {
    nombre: 'Galeria',
    descripcion: 'Evidencias fotográficas y audiovisuales de actividades escolares.',
    icono: 'Image',
    columnas: [
      { nombre: 'id_foto', tipo: 'string', descripcion: 'ID multimedia', ejemplo: 'gal-01' },
      { nombre: 'id_actividad_relacionada', tipo: 'string', descripcion: 'Vínculo a la actividad', ejemplo: 'act-01' },
      { nombre: 'titulo', tipo: 'string', descripcion: 'Pie de foto', ejemplo: 'Estudiantes calibrando brazo robótico' },
      { nombre: 'drive_image_id', tipo: 'string', descripcion: 'ID de archivo en Google Drive', ejemplo: '1aBcDeFgHiJkLmNoP' },
      { nombre: 'url_visualizacion', tipo: 'url', descripcion: 'Enlace web directo', ejemplo: 'https://...' },
      { nombre: 'fecha_captura', tipo: 'date', descripcion: 'Fecha de la foto', ejemplo: '2026-08-28' }
    ],
    registrosEjemplo: [
      { id_foto: 'gal-01', id_actividad_relacionada: 'act-01', titulo: 'Presentación de software de telemetría', fecha_captura: '2026-10-24' },
      { id_foto: 'gal-02', id_actividad_relacionada: 'act-04', titulo: 'Siembra de árboles en la ribera del Río Birán', fecha_captura: '2026-08-28' }
    ]
  },
  {
    nombre: 'Roles',
    descripcion: 'Definición de privilegios y capacidades por perfil.',
    icono: 'Shield',
    columnas: [
      { nombre: 'codigo_rol', tipo: 'string', descripcion: 'superadmin | admin | editor | docente | estudiante | visitante', ejemplo: 'superadmin' },
      { nombre: 'nombre_rol', tipo: 'string', descripcion: 'Nombre descriptivo', ejemplo: 'Superadministrador' },
      { nombre: 'nivel_jerarquia', tipo: 'number', descripcion: '1 (Mayor) a 6 (Menor)', ejemplo: 1 },
      { nombre: 'puede_publicar_directo', tipo: 'boolean', descripcion: 'TRUE si no requiere aprobación', ejemplo: 'TRUE' },
      { nombre: 'puede_aprobar_propuestas', tipo: 'boolean', descripcion: 'TRUE para editores y docentes', ejemplo: 'TRUE' },
      { nombre: 'puede_crear_usuarios', tipo: 'boolean', descripcion: 'TRUE solo para Superadmin', ejemplo: 'TRUE' }
    ],
    registrosEjemplo: [
      { codigo_rol: 'superadmin', nombre_rol: 'Superadministrador', nivel_jerarquia: 1, puede_publicar_directo: true, puede_crear_usuarios: true },
      { codigo_rol: 'admin', nombre_rol: 'Administrador Institucional', nivel_jerarquia: 2, puede_publicar_directo: true, puede_crear_usuarios: false },
      { codigo_rol: 'editor', nombre_rol: 'Editor del Periódico', nivel_jerarquia: 3, puede_publicar_directo: true, puede_aprobar_propuestas: true },
      { codigo_rol: 'docente', nombre_rol: 'Docente / Asesor Técnico', nivel_jerarquia: 4, puede_publicar_directo: false, puede_aprobar_propuestas: true },
      { codigo_rol: 'estudiante', nombre_rol: 'Estudiante / Colaborador', nivel_jerarquia: 5, puede_publicar_directo: false, puede_aprobar_propuestas: false },
      { codigo_rol: 'visitante', nombre_rol: 'Visitante / Público', nivel_jerarquia: 6, puede_publicar_directo: false, puede_aprobar_propuestas: false }
    ]
  },
  {
    nombre: 'Configuracion',
    descripcion: 'Parámetros institucionales, enlaces de Google Drive, ID de Calendario y switch de mantenimiento.',
    icono: 'Settings',
    columnas: [
      { nombre: 'clave', tipo: 'string', descripcion: 'Identificador del parámetro', ejemplo: 'CALENDAR_ID_INSTITUCIONAL' },
      { nombre: 'valor', tipo: 'string', descripcion: 'Valor de configuración', ejemplo: 'licateba.edu.do_calendar@group.calendar.google.com' },
      { nombre: 'descripcion', tipo: 'string', descripcion: 'Propósito del valor', ejemplo: 'ID de Google Calendar público incrustado' }
    ],
    registrosEjemplo: [
      { clave: 'DOMINIO_PERMITIDO', valor: 'licateba.edu.do', descripcion: 'Dominio de Google Workspace para login' },
      { clave: 'DRIVE_FOLDER_PERIODICO', valor: '1Z_licateba_periodico_drive_id', descripcion: 'Carpeta en Drive para fotos de artículos' },
      { clave: 'DRIVE_FOLDER_CIRCULARES', valor: '1Y_licateba_circulares_drive_id', descripcion: 'Carpeta pública para PDFs de avisos' },
      { clave: 'EMAIL_NOTIFICACIONES_EDITOR', valor: 'periodico@licateba.edu.do', descripcion: 'Buzón para alertas de nuevas propuestas' }
    ]
  },
  {
    nombre: 'Auditoria',
    descripcion: 'Bitácora inmutable de eventos administrativos y cambios de estado.',
    icono: 'FileCheck',
    columnas: [
      { nombre: 'id_log', tipo: 'string', descripcion: 'ID del evento', ejemplo: 'log-01' },
      { nombre: 'timestamp', tipo: 'date', descripcion: 'Fecha y hora exacta', ejemplo: '2026-09-11 10:14:22' },
      { nombre: 'usuario_email', tipo: 'string', descripcion: 'Cuenta de Google Workspace ejecutora', ejemplo: 'david.perez@licateba.edu.do' },
      { nombre: 'rol', tipo: 'string', descripcion: 'Rol activo en ese momento', ejemplo: 'superadmin' },
      { nombre: 'modulo', tipo: 'string', descripcion: 'Avisos | Actividades | Editorial | Usuarios', ejemplo: 'Avisos' },
      { nombre: 'accion', tipo: 'string', descripcion: 'CREAR | MODIFICAR | ELIMINAR | CAMBIO_ESTADO', ejemplo: 'CREAR_AVISO' },
      { nombre: 'detalles', tipo: 'string', descripcion: 'Descripción detallada', ejemplo: 'Publicado aviso urgente vaguada' }
    ],
    registrosEjemplo: [
      { id_log: 'log-01', timestamp: '2026-09-11 10:14:22', usuario_email: 'david.perez@licateba.edu.do', modulo: 'Avisos', accion: 'CREAR_AVISO' },
      { id_log: 'log-02', timestamp: '2026-09-10 16:30:15', usuario_email: 'rafael.alcantara@licateba.edu.do', modulo: 'Editorial', accion: 'APROBAR_PROPUESTA' }
    ]
  }
];
