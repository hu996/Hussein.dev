import { PortfolioData } from '../core/models/portfolio.models';

export const PORTFOLIO: PortfolioData = {
  personal: {
    name: 'Hussein Antar',
    title: 'Full Stack .NET Developer',
    eyebrow: 'Full Stack .NET Developer',
    headline: 'Building enterprise-grade web applications, APIs, dashboards, and integrations with .NET and Angular.',
    subheadline:
      '3+ years of experience delivering scalable systems using ASP.NET Core, Angular, SQL Server, clean architecture, reporting workflows, and business-focused solutions.',
    location: 'Cairo, Egypt',
    email: 'husseinantar58@gmail.com',
    linkedIn: 'https://linkedin.com/in/hussein-antar',
    github: 'https://github.com/hu996',
    summary:
      'Full Stack .NET Developer with 3+ years of experience building enterprise web applications, RESTful APIs, Angular interfaces, dashboards, reporting modules, integrations, and SQL Server-backed business systems.',
    trustLine: 'Government Systems · Saudi Enterprise · Insurance Platforms · Dashboards · API Integrations'
  },
  stats: [
    { value: '3+', label: 'Years Experience', detail: 'Enterprise .NET and Angular delivery' },
    { value: '5+', label: 'Enterprise Projects', detail: 'Dashboards, APIs, integrations and reporting' },
    { value: '3+', label: 'Companies', detail: 'Government, Saudi software and insurance teams' },
    { value: '10+', label: 'Core Technologies', detail: 'Backend, frontend, database and messaging stack' }
  ],
  strengths: [
    { title: 'Full Stack Development', description: 'Skilled in building complete systems from database design to frontend interfaces using .NET and Angular.' },
    { title: 'Clean Architecture & SOLID Principles', description: 'Committed to writing maintainable, scalable code with clear separation of concerns and design patterns.' },
    { title: 'Enterprise System Design', description: 'Experienced in designing and implementing complex enterprise workflows, APIs, and integration layers.' },
    { title: 'Database Optimization', description: 'Proficient in SQL Server query optimization, schema design, and performance tuning for large-scale operations.' },
    { title: 'API Development & Integration', description: 'Skilled in building RESTful APIs, JWT authentication, microservices communication, and third-party integrations.' },
    { title: 'Business Problem Solving', description: 'Focused on translating business requirements into reliable technical solutions that add real value.' }
  ],
  capabilities: [
    'Enterprise Web Applications',
    'REST APIs & Integrations',
    'Admin Dashboards',
    'Angular Frontend Development',
    'Reporting Systems',
    'SQL Server Optimization',
    'Authentication & Authorization',
    'Microservices Communication'
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
      type: 'Private Pilgrims Services Company',
      domain: ['Pilgrims services operations', 'Hajj service workflows', 'Dashboards and operational platforms'],
      responsibilities: [
        'Delivered operational modules for pilgrims services workflows and reporting.',
        'Built API endpoints and integrated Angular screens with backend services.',
        'Supported dashboards, SQL Server queries, exports and operational reports for service teams.'
      ],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Dashboards', 'Reports']
    }
  ],
  projects: [
    {
      name: 'Hajj / Pilgrims Management System',
      category: 'Enterprise',
      status: 'Private Enterprise Project',
      shortDescription:
        'Enterprise operations system for pilgrim data, housing, incidents, complaints, dashboards, reports, and role-based workflows.',
      description:
        'Enterprise management platform for pilgrims, housing, incidents, complaints, dashboards and reporting workflows.',
      overview:
        'A large internal platform designed to organize operational pilgrim data and support service teams with structured modules, dashboards, and reporting workflows.',
      businessContext:
        'The system supports operational teams responsible for managing pilgrim records, housing coordination, incident tracking, complaints, reports, and internal follow-up processes.',
      problem:
        'Operational teams needed a centralized system to manage high-volume pilgrim data, housing assignments, incidents and reports.',
      myRole:
        'I contributed as a full stack developer across backend APIs, Angular screens, SQL Server queries, reporting workflows, filters, dashboard data, and business modules.',
      solution:
        'Built full stack modules with role-based access, structured data workflows, dashboard monitoring and export-ready reports.',
      features: ['Pilgrim data management', 'Housing management', 'Incident tracking', 'Reports', 'Role-based access'],
      backendWork: [
        'Designed REST API endpoints for operational modules and dashboard data.',
        'Implemented backend business logic for pilgrim records, housing, incidents, complaints, and reporting workflows.',
        'Supported role-based access patterns for internal users and protected operations.'
      ],
      frontendWork: [
        'Built Angular screens for data entry, search, filtering, lists, details, and dashboard views.',
        'Implemented reusable UI components for forms, tables, filters, and operational views.',
        'Connected Angular modules to backend APIs and handled structured response data.'
      ],
      databaseWork: [
        'Worked with SQL Server queries for operational records, reports, and dashboard summaries.',
        'Supported data filtering, joins, and reporting queries for business views.',
        'Helped optimize query patterns used by reporting and dashboard screens.'
      ],
      integrations: ['Internal enterprise services', 'Reporting tools', 'PDF / Excel export workflows'],
      challenges: [
        'Handling large operational datasets with filters and report queries.',
        'Keeping dashboard data consistent with business workflows.',
        'Supporting role-based access across multiple modules.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'Entity Framework Core', 'QuestPDF'],
      role: 'Full stack modules, database workflows, dashboards and report generation support.',
      impact: 'Centralized operational data and improved visibility for service teams.',
      businessValue: 'Reduced manual tracking and gave teams a clearer operational command center.',
      visualType: 'operations-dashboard'
    },
    {
      name: 'Enterprise Dashboard & Reporting System',
      category: 'Dashboard',
      status: 'Private Enterprise Project',
      shortDescription:
        'Business monitoring dashboard with KPIs, dynamic filters, charts, reporting exports, and API-driven dashboard responses.',
      description:
        'Business monitoring dashboard with dynamic filters, operational metrics, charts and export-ready reports.',
      overview:
        'A dashboard and reporting platform that helps business users monitor operational activity, apply filters, review KPIs, and export reports.',
      businessContext:
        'Business users needed a reliable way to analyze operational data, track key indicators, and generate PDF / Excel reports without manual spreadsheet work.',
      problem:
        'Business users needed quick visibility into operational data without relying on manual spreadsheet tracking.',
      myRole:
        'I worked on API responses, dashboard data shaping, Angular presentation, dynamic filters, reporting logic, and SQL Server query optimization.',
      solution:
        'Created dashboard views, KPI cards, filters, chart-ready API responses and PDF / Excel reporting workflows.',
      features: ['Dynamic filters', 'Dashboard cards', 'Charts', 'PDF reports', 'Excel exports'],
      backendWork: [
        'Built API endpoints that return dashboard summaries, KPI data, and filtered results.',
        'Implemented reporting logic for PDF and Excel export workflows.',
        'Prepared API response structures suitable for charts, cards, tables, and filters.'
      ],
      frontendWork: [
        'Built Angular dashboard views with KPI cards, filters, charts, and export actions.',
        'Handled filter state and API-driven dashboard refresh behavior.',
        'Presented aggregated data in readable business-focused layouts.'
      ],
      databaseWork: [
        'Wrote SQL Server queries for aggregation, filtering, reporting, and operational summaries.',
        'Optimized data retrieval for dashboard and report screens.',
        'Supported joins and stored procedure style reporting logic where needed.'
      ],
      integrations: ['REST API integration', 'PDF export workflow', 'Excel export workflow'],
      challenges: [
        'Designing flexible filters without slowing down dashboard responses.',
        'Preparing data for both visual dashboards and exportable reports.',
        'Balancing frontend clarity with backend query complexity.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'REST API', 'Reporting'],
      role: 'Full stack development, report workflow integration and SQL Server optimization.',
      impact: 'Helped business users monitor operational data and produce reports faster.',
      businessValue: 'Turned scattered operational data into usable business insight.',
      visualType: 'analytics'
    },
    {
      name: 'Stock Exchange System',
      category: 'Backend',
      status: 'Practice Project',
      shortDescription:
        'Real-time trading simulation backend with SignalR live updates, JWT authentication, trading operations, and SQL Server persistence.',
      description:
        'Real-time stock trading system built around .NET Core APIs and SignalR for live price updates and authenticated trading workflows.',
      overview:
        'A real-time stock trading simulation system focused on live price updates, authenticated operations, and structured backend design.',
      businessContext:
        'Trading-style systems require fast updates, secure access, and backend workflows that can support live market interactions.',
      problem:
        'Trading workflows require live price visibility, secure user access and fast market-data updates.',
      myRole:
        'I focused on backend API design, authentication, SignalR live communication, trading operation flows, and SQL Server persistence.',
      solution:
        'Implemented real-time SignalR communication, JWT authentication, structured backend layers and SQL Server persistence.',
      features: ['Real-time price updates', 'JWT authentication', '3-tier architecture', 'Market data handling'],
      backendWork: [
        'Implemented SignalR hubs for live price updates.',
        'Built REST APIs for authentication, authorization, and trading operations.',
        'Structured backend layers using a maintainable multi-tier approach.'
      ],
      frontendWork: [
        'Prepared API and SignalR contracts that can support a real-time frontend.',
        'Supported live data flow requirements for market screens and trading actions.'
      ],
      databaseWork: [
        'Designed SQL Server persistence for users, market data, and trading operations.',
        'Handled data access patterns for authenticated trading workflows.'
      ],
      integrations: ['SignalR real-time communication', 'JWT authentication'],
      challenges: [
        'Managing live data updates without breaking authenticated workflows.',
        'Structuring trading operations clearly across API and database layers.'
      ],
      technologies: ['.NET Core', 'SignalR', 'JWT', 'SQL Server', 'REST API'],
      role: 'Backend API development, authentication, SignalR integration and SQL Server design.',
      impact: 'Improved live market visibility and supported authenticated trading operations.',
      businessValue: 'Enabled real-time market interaction through a secure backend foundation.',
      visualType: 'realtime'
    },
    {
      name: 'Shopping Application Backend',
      category: 'E-commerce',
      status: 'Practice Project',
      shortDescription:
        'E-commerce backend with JWT authentication, Admin/User roles, product and order APIs, SQL Server, EF Core, and Redis caching.',
      description:
        'E-commerce backend system with role-based authentication, product workflows, order management and Redis-backed performance improvements.',
      overview:
        'A backend API system for an e-commerce application covering user access, product workflows, orders, and caching.',
      businessContext:
        'E-commerce platforms need secure user access, clear product management, order workflows, and performant API responses.',
      problem:
        'The application needed scalable product, user and order APIs with secure role-based access.',
      myRole:
        'I built backend APIs, authentication flows, role handling, data models, SQL Server persistence, and Redis-backed caching behavior.',
      solution:
        'Designed ASP.NET Core APIs with JWT roles, EF Core persistence, Redis caching and structured product/order workflows.',
      features: ['Admin and user roles', 'Product management', 'Order management', 'Redis caching'],
      backendWork: [
        'Built RESTful APIs for users, authentication, products, and orders.',
        'Implemented JWT authentication and Admin/User role-based authorization.',
        'Used Redis caching to improve repeated data access patterns.'
      ],
      frontendWork: [
        'Prepared endpoints and response structures suitable for storefront and admin UI integration.'
      ],
      databaseWork: [
        'Designed SQL Server tables and EF Core entities for products, users, orders, and roles.',
        'Handled relational data access and query patterns for product/order workflows.'
      ],
      integrations: ['Redis caching', 'JWT authentication'],
      challenges: [
        'Separating Admin and User responsibilities clearly.',
        'Designing APIs that support both user storefront and admin operations.'
      ],
      technologies: ['ASP.NET Core', 'SQL Server', 'Redis', 'JWT', 'Entity Framework Core'],
      role: 'Backend development, data modeling, authentication and caching implementation.',
      impact: 'Created a scalable API foundation for product and order operations.',
      businessValue: 'Provided a reliable backend that can support storefront and admin workflows.',
      visualType: 'commerce-api'
    },
    {
      name: 'E-commerce Angular Application',
      category: 'Frontend',
      status: 'Practice Project',
      shortDescription:
        'Angular storefront UI with product listing, cart, wishlist, authentication, guards, interceptors, routing, and lazy loading.',
      description:
        'Modern Angular storefront experience with cart, wishlist, search, authentication flows and optimized routing.',
      overview:
        'A frontend Angular application for e-commerce user journeys including product discovery, authentication, cart, and wishlist workflows.',
      businessContext:
        'Storefront users need responsive product browsing, clean navigation, protected flows, and consistent interaction with backend APIs.',
      problem:
        'The storefront needed a modern user interface with clean navigation, cart behavior and API-connected flows.',
      myRole:
        'I built Angular screens, routing structure, guards, interceptors, reusable components, API integration, and user-facing flows.',
      solution:
        'Built Angular views using routing, guards, interceptors, reusable UI patterns and responsive layouts.',
      features: ['Cart', 'Wishlist', 'Authentication', 'Search', 'Guards', 'Interceptors', 'Lazy loading'],
      backendWork: [
        'Integrated the frontend with REST API endpoints for authentication, product data, cart, and wishlist behavior.'
      ],
      frontendWork: [
        'Built Angular pages for product listing, product search, cart, wishlist, and authentication.',
        'Implemented route guards, interceptors, lazy-loaded modules, and reusable UI components.',
        'Handled API data binding, protected routes, and responsive layouts.'
      ],
      databaseWork: [
        'Worked against API-backed product, user, cart, and wishlist data structures.'
      ],
      integrations: ['REST API integration', 'JWT token flow through interceptors'],
      challenges: [
        'Keeping user flows consistent across authentication, cart, wishlist, and search.',
        'Structuring lazy-loaded modules and protected routes cleanly.'
      ],
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'REST API Integration'],
      role: 'Angular UI development, routing architecture, API integration and stateful user flows.',
      impact: 'Delivered a responsive shopping interface with reusable frontend patterns.',
      businessValue: 'Created a frontend experience ready for real e-commerce workflows.',
      visualType: 'storefront'
    },
    {
      name: 'Insurance / FRA Integration System',
      category: 'Integrations',
      status: 'Private Enterprise Project',
      shortDescription:
        'Internal insurance system integrated with FRA APIs for automated data exchange, reporting, and regulatory workflows.',
      description:
        'Insurance internal systems with automated data exchange, reporting workflows and FRA API integrations.',
      overview:
        'An internal insurance system supporting regulatory data exchange, backend business rules, reporting, and operational screens.',
      businessContext:
        'Insurance teams needed controlled integration with FRA APIs and internal workflows for automated exchange and reporting.',
      problem:
        'Insurance operations needed controlled data exchange with FRA platforms and internal reporting reliability.',
      myRole:
        'I worked on backend business logic, FRA API integration support, SQL Server structures, reporting workflows, and internal screens.',
      solution:
        'Built ASP.NET Core modules, SQL Server data flows, reporting screens and integration logic for automated exchange.',
      features: ['FRA API integration', 'Internal business systems', 'SQL reports', 'Data exchange workflows'],
      backendWork: [
        'Built backend modules for internal insurance workflows and regulatory exchange.',
        'Implemented API integration logic and data preparation for FRA-related workflows.',
        'Supported reporting endpoints and backend business rules.'
      ],
      frontendWork: [
        'Built internal screens for business users to review, manage, and track insurance data.',
        'Connected forms, tables, and reporting views to backend APIs.'
      ],
      databaseWork: [
        'Designed and queried SQL Server structures for insurance operations and reporting.',
        'Supported data exchange queries and reporting data preparation.'
      ],
      integrations: ['FRA APIs', 'Internal services', 'REST API workflows'],
      challenges: [
        'Keeping regulatory data exchange consistent and traceable.',
        'Handling reporting requirements across internal operations and external API workflows.'
      ],
      technologies: ['ASP.NET Core', 'SQL Server', 'FRA APIs', 'Reporting', 'SOLID'],
      role: 'Backend modules, database design, integration support and reporting workflows.',
      impact: 'Improved internal data exchange and reduced manual reporting overhead.',
      businessValue: 'Made compliance-oriented data movement more consistent and trackable.',
      visualType: 'integration'
    },
    {
      name: 'Saudi Enterprise Systems for Oasis and Sada Pilgrims Services',
      category: 'Enterprise',
      status: 'Private Enterprise Project',
      shortDescription:
        'Saudi enterprise work involving Oasis software systems and Sada private pilgrims services workflows, dashboards, reports, APIs, and Angular interfaces.',
      description:
        'Enterprise business modules, dashboards, reporting workflows and API integrations for Saudi software and pilgrims services contexts.',
      overview:
        'A group of Saudi enterprise contributions focused on internal operations, pilgrims services workflows, business automation, dashboards, reporting, APIs, and Angular interfaces.',
      businessContext:
        'Saudi business and pilgrims services teams needed digital transformation modules, reporting workflows, internal systems, and operational platforms.',
      problem:
        'Saudi business and pilgrims services teams needed internal systems to manage operations, reporting and platform integrations.',
      myRole:
        'I contributed to backend APIs, Angular interfaces, SQL Server workflows, dashboards, reports, and integration-ready business modules.',
      solution:
        'Contributed backend APIs, Angular interfaces, SQL Server workflows, dashboards and reporting modules.',
      features: ['Business automation', 'Dashboards', 'Operational modules', 'API integrations', 'Reports'],
      backendWork: [
        'Built and maintained backend APIs for enterprise business modules.',
        'Supported integration-ready service logic and reporting endpoints.',
        'Worked on backend performance and data handling improvements.'
      ],
      frontendWork: [
        'Integrated Angular interfaces with backend APIs.',
        'Built operational screens, dashboards, forms, and report-facing UI modules.'
      ],
      databaseWork: [
        'Worked with SQL Server data structures, queries, report data, and operational workflows.',
        'Supported dashboard and reporting queries for internal business users.'
      ],
      integrations: ['REST APIs', 'Internal service integrations', 'Reporting workflows'],
      challenges: [
        'Working across different enterprise domains without exposing client-specific details.',
        'Delivering modules that align with operational workflows and reporting needs.'
      ],
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'REST APIs', 'Dashboards', 'Reports'],
      role: 'Full stack development across enterprise modules and reporting workflows.',
      impact: 'Supported digital operation platforms for Saudi enterprise use cases.',
      businessValue: 'Helped transform business requirements into working internal platforms.',
      visualType: 'enterprise-suite'
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
  techStack: {
    Backend: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'C#', 'REST APIs', 'JWT', 'SignalR'],
    Frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'CSS', 'Bootstrap', 'Responsive UI'],
    Database: ['SQL Server', 'Entity Framework Core', 'Dapper', 'LINQ', 'Stored Procedures', 'Query Optimization'],
    Architecture: ['Clean Architecture', 'SOLID Principles', 'Design Patterns', 'Microservices', '3-Tier Architecture'],
    Tools: ['Git', 'Azure', 'Visual Studio', 'Postman'],
    'Messaging & Caching': ['RabbitMQ', 'Redis'],
    Integrations: ['External APIs', 'FRA APIs', 'RESTful Services']
  },
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
