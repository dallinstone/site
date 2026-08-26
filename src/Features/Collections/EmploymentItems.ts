import { EmploymentItem } from "../Models/EmploymentItem";

export const empItems: EmploymentItem[] = [
  {
    name: "PrismHR",
    title: "Senior Software Engineer",
    dates: "September 2023 – Present",
    summary: "Building and modernizing multi-tenant human-capital-management applications across talent, onboarding, identity, and workforce-management domains.",
    highlights: [
      "Develop features and resolve production defects in layered C#/.NET applications spanning contract, repository, provider, and API controller layers.",
      "Design and optimize SQL Server queries, stored procedures, indexes, tables, and functions using Dapper and Entity Framework Core to keep application data access efficient, maintainable, and reliable.",
      "Led the integration of Talent Management onboarding with PrismOne ID single sign-on and contributed to secure identity-server configuration and authorization scopes.",
      "Engineer Azure-centered, event-driven integrations across HCM and workforce-management products using Azure Service Bus, Azure Functions, RabbitMQ, and C# webhooks.",
      "Help modernize legacy workforce-management services from .NET Framework 4 to .NET 8 with dependency injection and contemporary data-access patterns.",
      "Maintain system quality through unit, API, and browser testing with xUnit, Moq, NSubstitute, Bruno, and Playwright while collaborating within established SDLC and architecture standards.",
      "Use Claude Code, GitHub Copilot, and ChatGPT Codex to accelerate implementation, refactoring, troubleshooting, and test development while retaining normal engineering review and quality standards.",
    ],
  },
  {
    name: "American Airlines",
    title: "Senior Web Applications Developer",
    dates: "September 2017 – September 2023",
    summary: "Led delivery and modernization work for recruiting, union, and operations applications in a large enterprise environment.",
    highlights: [
      "Served as lead developer for a greenfield pilot applicant-tracking system built with React, ASP.NET, and SQL Server, from initial design through production deployment.",
      "Led the migration of three legacy web applications from on-premises infrastructure to Microsoft Azure.",
      "Worked as production support for various applications on the Employee Shared Technology team, including sites in C#, VB.Net, Blazor Pages, Webforms, and MVC.",
      "Guided the development team through updates to union websites required by a new joint collective bargaining agreement.",
      "Interviewed developer candidates from 2020–2023 and helped shape technical hiring decisions for the team.",
    ],
  },
  {
    name: "MWA Intelligence",
    title: "Director of Technical Support",
    dates: "October 2015 – September 2017",
    summary: "Combined SQL report development, people leadership, production support, and ERP implementation work for small and midsize business clients.",
    highlights: [
      "Built and managed a seven-person team supporting fourteen production clients, including one-on-ones, team meetings, and service KPIs.",
      "Wrote and maintained SQL reports for SAP Business One clients, translating business and support requirements into accurate, reusable reporting outputs.",
      "Created a revenue-recognition module for SAP Business One to support deferred-revenue analysis for multi-million-dollar organizations.",
      "Partnered with the implementation team on SAP Business One configuration, user training, and feature development.",
      "Established repeatable support practices that improved ownership and visibility across the client portfolio.",
    ],
  },
];
