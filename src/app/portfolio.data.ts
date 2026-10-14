export interface PortfolioProject {
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface PortfolioGalleryItem {
  title: string;
  image: string;
  description: string;
  kind: 'image' | 'video';
  category: string;
}

export const navItems = [
  { label: 'Inicio', href: '#inicio', icon: 'home' },
  { label: 'Sobre mí', href: '#sobre-mi', icon: 'person' },
  { label: 'Habilidades', href: '#habilidades', icon: 'code' },
  { label: 'Currículum', href: '#curriculum', icon: 'document' },
  { label: 'Portafolio', href: '#portafolio', icon: 'grid' },
  { label: 'Galería', href: '#galeria', icon: 'image' },
  { label: 'Contacto', href: '#contacto', icon: 'mail' },
];

export const skills = [
  { name: 'HTML', group: 'Web' },
  { name: 'CSS', group: 'Web' },
  { name: 'JavaScript', group: 'Web' },
  { name: 'TypeScript', group: 'Web' },
  { name: 'Angular', group: 'Web' },
  { name: 'PHP', group: 'Web' },
  { name: 'Laravel', group: 'Web' },
  { name: 'Python', group: 'Programación' },
  { name: 'PostgreSQL', group: 'Datos' },
  { name: 'Git', group: 'Herramientas' },
  { name: 'GitHub', group: 'Herramientas' },
  { name: 'Arduino', group: 'Electrónica' },
  { name: 'ESP32', group: 'Electrónica' },
  { name: 'PIC', group: 'Electrónica' },
];

export const projects: PortfolioProject[] = [
  {
    title: 'PetCare',
    description: 'Proyecto de gestión veterinaria. Aquí podrás añadir el propósito, las funciones y tu aporte personal.',
    category: 'Desarrollo web',
    image: 'images/projects/petcare-placeholder.svg',
    technologies: ['Stack por confirmar'],
    link: 'https://github.com/MATTUPAPI-art/veterinaria-petcare',
  },
  {
    title: 'NexoAprende',
    description: 'Proyecto académico. Completa esta descripción con el problema que aborda y las funciones desarrolladas.',
    category: 'Desarrollo web',
    image: 'images/projects/nexoaprende-placeholder.svg',
    technologies: ['Stack por confirmar'],
  },
  {
    title: 'CreceActivo',
    description: 'Proyecto académico. Añade aquí el objetivo, el público al que se dirige y tu contribución.',
    category: 'Desarrollo web',
    image: 'images/projects/creceactivo-placeholder.svg',
    technologies: ['Stack por confirmar'],
  },
  {
    title: 'Traductor Braille',
    description: 'Prototipo académico. Describe cómo funciona la traducción y qué componentes utilizaste.',
    category: 'Electrónica',
    image: 'images/projects/braille-placeholder.svg',
    technologies: ['Stack por confirmar'],
  },
  {
    title: 'FiestaPass',
    description: 'Proyecto académico. Personaliza este espacio con sus características y el reto técnico principal.',
    category: 'Desarrollo web',
    image: 'images/projects/fiestapass-placeholder.svg',
    technologies: ['Stack por confirmar'],
  },
  {
    title: 'Sistema Hidropónico Vertical',
    description: 'Prototipo académico. Añade los detalles del sistema, sus sensores y el proceso de construcción.',
    category: 'Electrónica',
    image: 'images/projects/hidroponia-placeholder.svg',
    technologies: ['Stack por confirmar'],
  },
];

export const filters = ['Todos', 'Desarrollo web', 'Electrónica'];

export const galleryCategories = ['Todas', 'Profesional', 'Personal', 'Deporte', 'Tecnología'];

export const galleryItems: PortfolioGalleryItem[] = [
  {
    title: 'Traje negro',
    image: 'images/portada.jpg',
    description: 'Retrato profesional.',
    kind: 'image',
    category: 'Profesional',
  },
  {
    title: 'Selfie en la playa',
    image: 'images/galeria/playa-selfie.jpg',
    description: 'Un momento junto al mar.',
    kind: 'image',
    category: 'Personal',
  },
  {
    title: 'Traje gris',
    image: 'images/galeria/traje-gris.jpg',
    description: 'Retrato formal.',
    kind: 'image',
    category: 'Profesional',
  },
  {
    title: 'Camisa blanca',
    image: 'images/sobre-mi.jpg',
    description: 'Retrato personal.',
    kind: 'image',
    category: 'Personal',
  },
  {
    title: 'Retrato en blanco y negro',
    image: 'images/perfil.jpg',
    description: 'Retrato en blanco y negro.',
    kind: 'image',
    category: 'Profesional',
  },
  {
    title: 'Entrenamiento',
    image: 'images/galeria/entrenamiento.jpg',
    description: 'Un momento de entrenamiento.',
    kind: 'image',
    category: 'Deporte',
  },
  {
    title: 'Deporte en la playa',
    image: 'images/galeria/playa-deporte.jpg',
    description: 'Actividad deportiva junto al mar.',
    kind: 'image',
    category: 'Deporte',
  },
  ...projects.map((project) => ({
    title: project.title,
    image: project.image,
    description: 'Imagen del proyecto académico.',
    kind: 'image' as const,
    category: 'Tecnología',
  })),
];

export const experience = [
  {
    role: 'Asesor inmobiliario',
    organization: 'Experiencia comercial',
    period: 'Octubre de 2024 – actualidad',
    details: ['Atención y asesoramiento a clientes.', 'Coordinación de visitas.', 'Promoción de propiedades.', 'Seguimiento comercial.'],
  },
  {
    role: 'Producción y coordinación de eventos',
    organization: 'Bolivia y Perú',
    period: '2025–2026',
    details: ['Participación en producción y promoción de eventos musicales.', 'Coordinación de patrocinadores.', 'Producción y edición de contenido audiovisual.', 'Coordinación de personal y actividades.'],
  },
  {
    role: 'Seguridad y logística de eventos',
    organization: 'Eventos deportivos y musicales',
    period: 'Experiencia por proyecto',
    details: ['Apoyo en seguridad y control de accesos.', 'Coordinación de desplazamientos y actividades.'],
  },
  {
    role: 'Activador',
    organization: 'FEXCO · stand UNIFRANZ',
    period: '2026',
    details: ['Atención e interacción con visitantes.', 'Promoción y apoyo a actividades universitarias.'],
  },
  {
    role: 'Ejecutivo de ventas',
    organization: 'Tigo',
    period: 'Finales de 2023 – mediados de 2024',
    details: ['Venta de servicios de internet.', 'Atención al cliente.', 'Seguimiento comercial.'],
  },
];

export const education = [
  { program: 'Ingeniería de Sistemas', institution: 'UNIFRANZ · Cochabamba, Bolivia', period: '2024 – actualidad' },
  { program: 'Bachillerato', institution: 'Instituto Americano', period: '2023' },
];

export const professionalSkills = [
  'Comunicación',
  'Liderazgo',
  'Trabajo en equipo',
  'Ventas y negociación',
  'Producción audiovisual',
  'Organización de eventos',
  'Atención al cliente',
  'Resolución de problemas',
  'Adaptabilidad',
];
