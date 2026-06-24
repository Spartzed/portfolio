export const personalInfo = {
  name: 'Marcus Rodrigues',
  title: 'Full Stack Developer',
  email: 'marcusr.dev@gmail.com',
  location: 'Curitiba, PR - Brasil',
  phone: '(41) 99590-8607',
  availability: 'Open to opportunities',
  github: 'https://github.com/marcusviniciusr',
  linkedin: 'https://www.linkedin.com/in/marcus-rodrigues-dev/',
};

export const skills = {
  frontend: [
    {name: 'Vue.js', level: 90},
    {name: 'React', level: 85},
    {name: 'JavaScript', level: 90},
    {name: 'TypeScript', level: 80},
    {name: 'HTML/CSS', level: 95},
    {name: 'Tailwind CSS', level: 85},
  ],
  backend: [
    {name: 'C# / .NET', level: 90},
    {name: 'PHP / Laravel', level: 85},
    {name: 'Node.js', level: 75},
    {name: 'Python', level: 80},
    {name: 'REST APIs', level: 90},
    {name: 'Microserviços', level: 85},
  ],
  database: [
    {name: 'SQL Server', level: 85},
    {name: 'MySQL', level: 85},
    {name: 'PostgreSQL', level: 80},
    {name: 'MongoDB', level: 75},
  ],
  tools: [
    {name: 'Git', level: 90},
    {name: 'Docker', level: 80},
    {name: 'Azure', level: 75},
    {name: 'AWS', level: 70},
    {name: 'VS Code', level: 90},
    {name: 'Postman', level: 85},
  ],
  soft: [
    'Comunicação Efetiva',
    'Trabalho em Equipe',
    'Resolução de Problemas',
    'Aprendizado Contínuo',
    'Adaptabilidade',
    'Metodologias Ágeis',
    'Arquitetura Limpa',
    'Escalabilidade',
  ],
};

export const experience = [
  {
    id: 1,
    company: 'Empresa Atual',
    position: 'Desenvolvedor Full Stack',
    period: '2021 - Presente',
    description: 'Desenvolvimento de plataformas de grande escala e sistemas distribuídos. Atuação desde a concepção do produto até a implementação completa, com foco em arquitetura limpa, escalabilidade e integração entre serviços.',
    technologies: ['C#', '.NET', 'Vue.js', 'SQL Server', 'Azure'],
  },
  {
    id: 2,
    company: 'Empresa Anterior',
    position: 'Desenvolvedor Full Stack',
    period: '2019 - 2021',
    description: 'Criação e manutenção de aplicações web usando PHP com Laravel e JavaScript. Desenvolvimento de APIs REST, automações e integrações entre sistemas.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Python'],
  },
  {
    id: 3,
    company: 'Primeira Empresa',
    position: 'Desenvolvedor Júnior',
    period: '2018 - 2019',
    description: 'Início da carreira desenvolvendo soluções web e integrações. Foco em aprendizado de tecnologias web e boas práticas de desenvolvimento.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Git'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Plataforma de Escala',
    description: 'Sistema distribuído para gerenciamento de grandes volumes de dados com arquitetura de microserviços, comunicação assíncrona e alta disponibilidade.',
    technologies: ['C#', '.NET', 'Azure', 'SQL Server', 'RabbitMQ'],
    github: 'https://github.com/marcusviniciusr',
    demo: null,
    image: null,
  },
  {
    id: 2,
    title: 'API de Integração',
    description: 'API REST para integração entre múltiplos sistemas com autenticação, rate limiting e documentação automática.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Swagger'],
    github: 'https://github.com/marcusviniciusr',
    demo: null,
    image: null,
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Painel administrativo com visualização de dados em tempo real, gráficos interativos e exportação de relatórios.',
    technologies: ['Vue.js', 'Chart.js', 'Laravel', 'PostgreSQL'],
    github: 'https://github.com/marcusviniciusr',
    demo: null,
    image: null,
  },
  {
    id: 4,
    title: 'Sistema de Automação',
    description: 'Automação de processos business using Python com integração de APIs externas e processamento de dados.',
    technologies: ['Python', 'FastAPI', 'Celery', 'Redis'],
    github: 'https://github.com/marcusviniciusr',
    demo: null,
    image: null,
  },
];

export const stats = [
  {value: '5+', label: 'Anos de Experiência'},
  {value: '25+', label: 'Projetos Entregues'},
  {value: '15+', label: 'Tecnologias'},
  {value: '100%', label: 'Dedicação'},
];
