import { employmentItem } from "../Models/EmploymentItem";

export const empItems: employmentItem[] =
    [
        {
            name: "PrismHR",
            title: "Senior Software Engineer",
            dates: "Sept 2023 - Present",
            exp_items: [
                "Used C# 10/.NET 14 with a layered architecture (Contracts, Repository, Provider, Controller) to create features and resolve defects in a multi-tenant HR SaaS platform called PrismHR Talent Management (TM)",
                "Developed integration between PrismHR Talent Management and PrismHR applications utilizing Azure Service Bus",
                "Used various database connection technologies, especially Dapper, to create SQL queries, stored procedures, tables, and functions. Included query optimization, refactoring, and major data cleanup efforts",
                "Led integration development between Prism Talent Management’s Onboarding module and PrismOne ID Single Sign On (SSO)",
                "Used various tools for testing, including NSubstitute, Bruno API collections, and Playwright automated front-end testing",
                "Used Azure DevOps and Jira to track stories, including backlog grooming, story pointing, and work tracking",
                "Utilized various AI tools including GitHub Copilot, Claude Code, and ChatGPT Codex to aid development efforts, including prompt engineering, agents, skills, tasks, etc. to enhance development",
                "Angular/TypeScript development, including bug fixes and minor UI modification",
                "Designed and developed robust Talent Management (TM) and Work Force Management (WFM) applications, ensuring strict adherence to PII information security requirements for sensitive Human Capital Management (HCM) data",
                "Collaborated closely with enterprise architects and technical supervisors to ensure all development and feature enhancements strictly adhered to established SDLC processes and architectural guidelines",
                "Engineered integrations between Prism HCM and Prism WFM utilizing Azure Service Bus, RabbitMQ, and C# webhooks to seamlessly sync employee changes and timesheet information",
                "Led the modernization and upgrade of legacy WFM projects from .NET 4 to .NET Core 8, implementing C# .NET features such as Entity Framework Core and Dependency Injection",
                "Maintained code quality and system stability by utilizing Factory/Unit of Work/Repository design patterns and writing comprehensive unit/API tests using XUnit, Moq, and NSubstitute",
                "Configured and utilized Duende identity server and scopes to manage secure authentication and authorization across the platform",

            ]
        },
        {
            name: "American Airlines",
            title: "Senior Web Applications Developer",
            dates: "Sept 2017 - Sept 2023",
            exp_items: [
                "Served as lead developer on development of a <a href='https://pilots.aa.com'>green field ATS</a> using React, ASP.Net, and SQL Server to allow pilot candidates to submit their profile for consideration for new pilot roles, from inception to production deployment",
               "Led team through migration of three legacy web applications from on-premise servers to Microsoft Azure Cloud",
               "Lead development team in updating union websites to meet new JCBA requirements",
               "Conducted interviews for all new developers on team from 2020 to present",
               "Created production support portal in SharePoint to organize tickets for four separate workgroups",
            ]
        },
        {
            name: "MWA Intelligence",
            title: "Director of Technical Support",
            dates: "Oct 2015 - Sept 2017",
            exp_items: [
                "Created and managed a team of 7 employees dedicated to production support of fourteen clients",
                "Regularly conducted team meetings and one-on-ones, including creation of metrics for individual improvement and other KPI’s",
                "Created revenue recognition module for SAP Business One in order to correctly analyze deferred revenue for multi-million dollar corporations",
                "Worked with the implementation team for SAP Business One SMB ERP systems, including training of users, feature creation, and system configuration",
            ]
        }
    ]