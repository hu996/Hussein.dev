import { PortfolioData } from '../core/models/portfolio.models';

export const PORTFOLIO: PortfolioData = {
  personal: {
    name: 'Hussein Antar',
    title: 'Full Stack .NET Developer',
    location: 'Cairo, Egypt',
    email: 'husseinantar.58@gmail.com',
    linkedIn: 'https://linkedin.com/in/hussein-antar',
    github: 'https://github.com/hu996',
    summary:
      'Full Stack .NET Developer with 3+ years building scalable enterprise web applications using ASP.NET Core, Angular, RESTful APIs, SQL Server, and Microservices architecture.'
  },
  stats: [
    { value: '3+', label: 'Years Experience', detail: 'Enterprise .NET and Angular delivery' },
    { value: '5+', label: 'Enterprise Projects', detail: 'Dashboards, APIs, integrations and reporting' },
    { value: '3+', label: 'Companies', detail: 'Government, Saudi software and insurance teams' },
    { value: '10+', label: 'Core Technologies', detail: 'Backend, frontend, database and messaging stack' }
  ],
  experience: [
    {
      company: 'MCIT, Ministry of Communications and Information Technology',
      title: '.NET Developer',
      period: '04/2025 - Present',
      type: 'Government / Enterprise Digital Transformation',
      domain: ['Government digital services', 'Enterprise internal systems', 'Government platform integrations'],
      responsibilities: [
        'Developed and maintained enterprise-level web applications using ASP.NET MVC and Web API.',
        'Designed and implemented secure RESTful APIs.',
        'Worked with microservices communication using HTTP and RabbitMQ.',
        'Optimized SQL Server queries, stored procedures, and database performance.',
        'Applied clean architecture and scalable backend practices.'
      ],
      technologies: ['ASP.NET MVC', 'Web API', 'SQL Server', 'RabbitMQ', 'Microservices', 'Clean Architecture']
    },
    {
      company: 'Oasis Computer Systems',
      title: 'Full Stack .NET Developer',
      period: '10/2024 - 03/2025',
      type: 'Saudi Software Company / Enterprise Solutions Provider',
      domain: ['Saudi enterprise clients', 'Business automation systems', 'Operational integrations'],
      responsibilities: [
        'Developed and maintained backend APIs using .NET Core.',
        'Integrated APIs with Angular frontend applications.',
        'Enhanced existing systems and fixed performance issues.',
        'Worked on enterprise business modules and system integrations.'
      ],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Entity Framework Core']
    },
    {
      company: 'Iskan Insurance Company',
      title: '.NET Developer',
      period: '07/2023 - 09/2024',
      type: 'Insurance / Financial Technology',
      domain: ['Insurance operations', 'FRA integrations', 'Reporting and data exchange'],
      responsibilities: [
        'Built internal web applications using ASP.NET Core.',
        'Integrated with FRA APIs for automated data exchange.',
        'Designed SQL Server databases and reporting solutions.',
        'Applied SOLID principles and design patterns.'
      ],
      technologies: ['ASP.NET Core', 'SQL Server', 'FRA APIs', 'Reporting', 'SOLID', 'Design Patterns']
    },
    {
      company: 'Sada',
      title: '.NET / Full Stack Developer',
      period: 'Project-based engagement',
      type: 'Saudi Software Company / Digital Solutions Provider',
      domain: ['Saudi enterprise clients', 'Business automation', 'Dashboards and operational platforms'],
      responsibilities: [
        'Delivered enterprise modules for business automation and reporting workflows.',
        'Built API endpoints and integrated Angular screens with backend services.',
        'Supported dashboards, SQL Server queries, exports and operational reports.'
      ],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Dashboards', 'Reports']
    }
  ],
  projects: [
    {
      name: 'Hajj / Pilgrims Management System',
      category: 'Enterprise',
      description:
        'Enterprise management platform for pilgrims, housing, incidents, complaints, dashboards and reporting workflows.',
      problem:
        'Operational teams needed a centralized system to manage high-volume pilgrim data, housing assignments, incidents and reports.',
      solution:
        'Built full stack modules with role-based access, structured data workflows, dashboard monitoring and export-ready reports.',
      features: ['Pilgrim data management', 'Housing management', 'Incident tracking', 'Reports', 'Role-based access'],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Entity Framework Core', 'QuestPDF'],
      role: 'Full stack modules, database workflows, dashboards and report generation support.',
      impact: 'Centralized operational data and improved visibility for service teams.',
      businessValue: 'Reduced manual tracking and gave teams a clearer operational command center.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'Enterprise Dashboard & Reporting System',
      category: 'Dashboard',
      description:
        'Business monitoring dashboard with dynamic filters, operational metrics, charts and export-ready reports.',
      problem:
        'Business users needed quick visibility into operational data without relying on manual spreadsheet tracking.',
      solution:
        'Created dashboard views, KPI cards, filters, chart-ready API responses and PDF / Excel reporting workflows.',
      features: ['Dynamic filters', 'Dashboard cards', 'Charts', 'PDF reports', 'Excel exports'],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST API', 'Reporting'],
      role: 'Full stack development, report workflow integration and SQL Server optimization.',
      impact: 'Helped business users monitor operational data and produce reports faster.',
      businessValue: 'Turned scattered operational data into usable business insight.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'Stock Exchange System',
      category: 'Backend',
      description:
        'Real-time stock trading system built around .NET Core APIs and SignalR for live price updates and authenticated trading workflows.',
      problem:
        'Trading workflows require live price visibility, secure user access and fast market-data updates.',
      solution:
        'Implemented real-time SignalR communication, JWT authentication, structured backend layers and SQL Server persistence.',
      features: ['Real-time price updates', 'JWT authentication', '3-tier architecture', 'Market data handling'],
      technologies: ['.NET Core', 'SignalR', 'JWT', 'SQL Server', 'REST API'],
      role: 'Backend API development, authentication, SignalR integration and SQL Server design.',
      impact: 'Improved live market visibility and supported authenticated trading operations.',
      businessValue: 'Enabled real-time market interaction through a secure backend foundation.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'Shopping Application Backend',
      category: 'E-commerce',
      description:
        'E-commerce backend system with role-based authentication, product workflows, order management and Redis-backed performance improvements.',
      problem:
        'The application needed scalable product, user and order APIs with secure role-based access.',
      solution:
        'Designed ASP.NET Core APIs with JWT roles, EF Core persistence, Redis caching and structured product/order workflows.',
      features: ['Admin and user roles', 'Product management', 'Order management', 'Redis caching'],
      technologies: ['ASP.NET Core', 'SQL Server', 'Redis', 'JWT', 'Entity Framework Core'],
      role: 'Backend development, data modeling, authentication and caching implementation.',
      impact: 'Created a scalable API foundation for product and order operations.',
      businessValue: 'Provided a reliable backend that can support storefront and admin workflows.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'E-commerce Angular Application',
      category: 'Frontend',
      description:
        'Modern Angular storefront experience with cart, wishlist, search, authentication flows and optimized routing.',
      problem:
        'The storefront needed a modern user interface with clean navigation, cart behavior and API-connected flows.',
      solution:
        'Built Angular views using routing, guards, interceptors, reusable UI patterns and responsive layouts.',
      features: ['Cart', 'Wishlist', 'Authentication', 'Search', 'Guards', 'Interceptors', 'Lazy loading'],
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'REST API Integration'],
      role: 'Angular UI development, routing architecture, API integration and stateful user flows.',
      impact: 'Delivered a responsive shopping interface with reusable frontend patterns.',
      businessValue: 'Created a frontend experience ready for real e-commerce workflows.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'Insurance / FRA Integration System',
      category: 'Integrations',
      description:
        'Insurance internal systems with automated data exchange, reporting workflows and FRA API integrations.',
      problem:
        'Insurance operations needed controlled data exchange with FRA platforms and internal reporting reliability.',
      solution:
        'Built ASP.NET Core modules, SQL Server data flows, reporting screens and integration logic for automated exchange.',
      features: ['FRA API integration', 'Internal business systems', 'SQL reports', 'Data exchange workflows'],
      technologies: ['ASP.NET Core', 'SQL Server', 'FRA APIs', 'Reporting', 'SOLID'],
      role: 'Backend modules, database design, integration support and reporting workflows.',
      impact: 'Improved internal data exchange and reduced manual reporting overhead.',
      businessValue: 'Made compliance-oriented data movement more consistent and trackable.',
      status: 'Private Enterprise Project'
    },
    {
      name: 'Saudi Enterprise Systems for Oasis and Sada',
      category: 'Enterprise',
      description:
        'Enterprise business modules, dashboards, reporting workflows and API integrations for Saudi software companies.',
      problem:
        'Saudi business clients needed internal systems to manage operations, reporting and platform integrations.',
      solution:
        'Contributed backend APIs, Angular interfaces, SQL Server workflows, dashboards and reporting modules.',
      features: ['Business automation', 'Dashboards', 'Operational modules', 'API integrations', 'Reports'],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Dashboards', 'Reports'],
      role: 'Full stack development across enterprise modules and reporting workflows.',
      impact: 'Supported digital operation platforms for Saudi enterprise use cases.',
      businessValue: 'Helped transform business requirements into working internal platforms.',
      status: 'Private Enterprise Project'
    }
  ],
  skills: {
    Backend: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'C#', 'REST APIs', 'JWT', 'SignalR'],
    Frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS', 'Bootstrap', 'Responsive UI'],
    Database: ['SQL Server', 'Entity Framework Core', 'Dapper', 'LINQ', 'Stored Procedures', 'Query Optimization'],
    Architecture: ['Clean Architecture', 'SOLID Principles', 'Design Patterns', 'Microservices', '3-Tier Architecture'],
    Tools: ['Git', 'Azure', 'Visual Studio', 'Postman'],
    'Messaging & Caching': ['RabbitMQ', 'Redis'],
    Integrations: ['External APIs', 'FRA APIs', 'RESTful Services']
  },
  services: [
    { title: 'Enterprise Web Applications', description: 'Internal systems for operations, users, workflows, authorization, and structured data.', icon: '01' },
    { title: 'REST APIs & Integrations', description: 'Secure ASP.NET Core APIs, JWT authentication, external integrations, and clean service boundaries.', icon: '02' },
    { title: 'Admin Dashboards', description: 'Dashboards with filters, charts, KPIs, and operational visibility for business teams.', icon: '03' },
    { title: 'Angular Frontend Development', description: 'Responsive Angular interfaces with maintainable components and clean user experience.', icon: '04' },
    { title: 'Reporting Systems', description: 'PDF, Excel, and dashboard reporting workflows for business tracking and decision-making.', icon: '05' },
    { title: 'SQL Server Optimization', description: 'Schema design, stored procedures, query tuning, and data-layer performance improvements.', icon: '06' },
    { title: 'Authentication & Authorization', description: 'JWT authentication, role-based access, secure user flows, and backend authorization policies.', icon: '07' },
    { title: 'Microservices Communication', description: 'Service-to-service workflows using HTTP messaging patterns, RabbitMQ, and integration-ready APIs.', icon: '08' }
  ],
  clients: [
    'Government sector',
    'Saudi enterprise companies',
    'Insurance sector',
    'E-commerce systems',
    'Internal enterprise systems',
    'Dashboards and reporting systems',
    'API integration platforms',
    'Business automation systems'
  ],
  // Replace these placeholders with real testimonials before publishing publicly.
  testimonials: [
    { role: 'Manager / Team Lead', quote: 'Placeholder testimonial about delivery quality, communication and ownership.' },
    { role: 'Client / Business User', quote: 'Placeholder testimonial about reliable dashboards, reporting and workflow improvements.' },
    { role: 'Senior Developer', quote: 'Placeholder testimonial about clean backend practices, API work and team collaboration.' }
  ],
  whyHire: [
    { title: 'Enterprise Application Development', description: 'Experienced in building structured systems for enterprise workflows, reporting, and operations.', icon: 'EA' },
    { title: 'Full Stack Delivery', description: 'I can build backend APIs, frontend Angular interfaces, databases, and integrations.', icon: 'FS' },
    { title: 'API & Integration Experience', description: 'Hands-on experience with REST APIs, FRA integrations, RabbitMQ, Redis, and platform communication.', icon: 'AI' },
    { title: 'Clean & Maintainable Code', description: 'I follow clean architecture, SOLID principles, and scalable backend practices.', icon: 'CL' },
    { title: 'Performance Focused', description: 'I optimize SQL Server queries, APIs, and application performance.', icon: 'PF' },
    { title: 'Business-Oriented Problem Solving', description: 'I translate requirements into reliable technical features that support real operations.', icon: 'BP' }
  ]
};
