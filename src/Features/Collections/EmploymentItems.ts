import { EmploymentItem } from "../Models/EmploymentItem";

export const empItems: EmploymentItem[] = [
  {
    name: "PrismHR",
    title: "Senior Software Engineer",
    dates: "September 2023 – Present",
    summary: "Building and modernizing multi-tenant Talent Management and Workforce Management applications and integrations with PrismHR HCM and PEO Core.",
    highlights: [
      "Build features and resolve production defects in multi-tenant PrismHR Talent Management using C# 14 and .NET 10 with layered contract, repository, provider, and API controller architecture.",
      "Design and optimize SQL Server queries, stored procedures, indexes, tables, and functions using Dapper and Entity Framework Core, including query refactoring and major data-cleanup efforts.",
      "Led the integration of Talent Management onboarding with PrismOne ID single sign-on and configure Duende IdentityServer clients and authorization scopes.",
      "Engineer integrations connecting Workforce Management with HCM, Talent Management with HCM, and Talent Management with PrismHR PEO Core using Azure Service Bus, Azure Functions, RabbitMQ, and C# webhooks.",
      "Help modernize legacy Workforce Management projects from .NET Framework 4 to .NET 8 using Entity Framework Core, dependency injection, and maintainable data-access patterns.",
      "Protect sensitive HCM data through strict PII information-security practices while testing with xUnit, Moq, NSubstitute, Bruno, and Playwright and following established SDLC and architecture standards.",
      "Use GitHub Copilot, Claude Code, and ChatGPT Codex with prompt engineering, agents, hooks, skills, and task-based workflows to accelerate development and improve delivery.",
    ],
  },
  {
    name: "American Airlines",
    title: "Senior Web Developer / Team Lead",
    dates: "September 2017 – September 2023",
    summary: "Led delivery and modernization work for recruiting, union, and operations applications in a large enterprise environment.",
    highlights: [
      "Served as team lead and lead developer for a high-priority, greenfield applicant-tracking system built with React, ASP.NET, and SQL Server, from initial design through production deployment.",
      "Managed software engineers through work assignment, project-status communication, one-on-ones, performance reviews, and ongoing mentorship.",
      "Established team objectives and delivery KPIs and partnered with project managers and business stakeholders on long-term tactical plans and strategic feature decisions.",
      "Created and tested disaster-recovery and business-continuity plans used during three live business-critical events, and led CWA/IBT and TWU union-site work under strict PII-security requirements.",
      "Migrated three legacy applications to Azure App Service, SQL Managed Instance, and Azure Data Factory.",
      "Conducted more than 30 technical interviews and made final hiring decisions for eight developers.",
      "Designed SQL Server 2016 databases and supported C#, VB.NET, Blazor, Web Forms, and MVC applications, including PingFederate- and JWT-secured APIs.",
    ],
  },
  {
    name: "MWA Intelligence",
    title: "Director of Technical Support",
    dates: "October 2015 – September 2017",
    summary: "Combined SQL report development, people leadership, production support, and ERP implementation work for small and midsize business clients.",
    highlights: [
      "Built and managed a seven-person technical-support team serving fourteen enterprise clients, with departmental objectives, one-on-ones, performance metrics, and service KPIs.",
      "Created hundreds of SQL reports and views that streamlined business processes and supported client transitions to new ERP software.",
      "Architected a SAP Business One revenue-recognition module using SQL stored procedures to analyze deferred revenue for multi-million-dollar corporations.",
      "Partnered with the SAP Business One implementation team on system configuration, feature creation, and end-user training.",
      "Established repeatable support practices that improved case ownership and service visibility across the client portfolio.",
    ],
  },
];
