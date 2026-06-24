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
    {name: 'JavaScript', level: 90},
    {name: 'HTML/CSS', level: 95},
    {name: 'jQuery', level: 85},
  ],
  backend: [
    {name: 'PHP', level: 95},
    {name: 'Laravel', level: 90},
    {name: 'C# / .NET', level: 85},
    {name: 'Java', level: 80},
    {name: 'Node.js', level: 75},
    {name: 'Python', level: 80},
    {name: 'REST APIs', level: 90},
  ],
  database: [
    {name: 'MySQL', level: 90},
    {name: 'PostgreSQL', level: 85},
    {name: 'PostGIS', level: 80},
    {name: 'Firebase', level: 75},
    {name: 'Redis', level: 80},
  ],
  tools: [
    {name: 'Docker', level: 85},
    {name: 'AWS', level: 85},
    {name: 'CI/CD', level: 85},
    {name: 'Git', level: 90},
    {name: 'AWS Lambda', level: 75},
  ],
  soft: [
    'Comunicação Efetiva',
    'Trabalho em Equipe',
    'Resolução de Problemas',
    'Aprendizado Contínuo',
    'Arquitetura Limpa',
    'Escalabilidade',
    'Microserviços',
  ],
};

export const experience = [
  {
    id: 1,
    company: 'Aleevia',
    companySite: 'https://aleevia.com.br',
    location: 'São José dos Campos, SP',
    position: 'Engenheiro de Software',
    period: '02/2025 - Atual',
    description: 'Contribuindo com a idealização até o desenvolvimento de uma plataforma de gestão para clínicas, com sistema completo de agendamento, planos de saúde, faturamento e conciliação bancária. Atuação como desenvolvedor Backend utilizando Java e PHP com Laravel, definindo arquitetura do banco de dados e implementando PostGIS para cálculos de geolocalização.',
    technologies: ['PHP', 'Laravel', 'Java', 'PostgreSQL', 'PostGIS', 'Docker'],
  },
  {
    id: 2,
    company: 'Inevent',
    companySite: 'https://inevent.com',
    location: 'Atlanta, Geórgia',
    position: 'Desenvolvedor Full Stack Pleno',
    period: '02/2022 - 03/2025',
    description: 'Desenvolvimento e manutenção de plataformas de multi-eventos. Backend com PHP/Laravel criando APIs RESTful robustas e microsserviços. Frontend com Vue.js e jQuery em sistemas legados. Infraestrutura com Docker e serviços AWS, utilizando MySQL e Firebase para gerenciamento de dados.',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Firebase', 'AWS', 'Docker', 'Node.js'],
  },
  {
    id: 3,
    company: 'IESDE',
    companySite: 'https://iesde.com.br',
    location: 'Curitiba, PR',
    position: 'Desenvolvedor Full Stack',
    period: '06/2021 - 02/2022',
    description: 'Desenvolvimento e manutenção de plataforma de E-learning para instituições de ensino superior. Criação de APIs robustas em PHP (CodeIgniter) suportando centenas de requisições por minuto. Gerenciamento de dados com MySQL e otimização com Redis para cache. Manutenção de sistema de pagamentos em Node.js com AWS Lambda.',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Redis', 'Node.js', 'AWS Lambda', 'JavaScript', 'jQuery'],
  },
];

export const education = [
  {
    id: 1,
    institution: 'PUC-PR',
    institutionSite: 'https://pucpr.br',
    degree: 'Big Data: Ciência de Dados',
    period: '06/2021 - 12/2023',
    location: 'Curitiba, PR',
    description: 'Machine Learning, Big Query, Clusters, Análise de dados',
  },
  {
    id: 2,
    institution: 'SESI-PR',
    institutionSite: 'https://sesi.pr',
    degree: 'Técnico em Análise e Desenvolvimento de Sistemas',
    period: '06/2019 - 12/2020',
    location: 'Curitiba, PR',
    description: 'Tecnologia',
  },
];

export const languages = [
  {name: 'Português', level: 'Língua materna'},
  {name: 'Inglês', level: 'C1 - Avançado'},
];

export const stats = [
  {value: '5+', label: 'Anos de Experiência'},
  {value: '15+', label: 'Projetos Entregues'},
  {value: '10+', label: 'Tecnologias'},
  {value: '100%', label: 'Dedicação'},
];

// Empty export for compatibility (projects section hidden)
export const projects: Array<{
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  image: string | null;
}> = [];
