from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PDF = ROOT / "output" / "pdf" / "danny-stone-resume.pdf"
PUBLIC_PDF = ROOT / "public" / "danny-stone-resume.pdf"

NAVY = colors.HexColor("#101D4D")
BLUE = colors.HexColor("#2447B8")
GOLD = colors.HexColor("#E7AD4B")
INK = colors.HexColor("#171B26")
MUTED = colors.HexColor("#4E5360")
PAPER = colors.HexColor("#FFFCF6")
RULE = colors.HexColor("#C9C1B5")


styles = getSampleStyleSheet()


def style(name, **kwargs):
    return ParagraphStyle(name, parent=styles["Normal"], **kwargs)


NAME = style(
    "Name",
    fontName="Helvetica-Bold",
    fontSize=24,
    leading=25,
    textColor=PAPER,
    spaceAfter=4,
)
ROLE = style(
    "Role",
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=12,
    textColor=GOLD,
)
CONTACT = style(
    "Contact",
    fontName="Helvetica",
    fontSize=8.5,
    leading=12,
    textColor=PAPER,
    alignment=TA_RIGHT,
)
SECTION = style(
    "Section",
    fontName="Helvetica-Bold",
    fontSize=12.5,
    leading=15,
    textColor=BLUE,
    spaceBefore=8,
    spaceAfter=5,
    keepWithNext=True,
)
SUMMARY = style(
    "Summary",
    fontName="Helvetica",
    fontSize=9.5,
    leading=13.2,
    textColor=INK,
    spaceAfter=7,
)
JOB = style(
    "Job",
    fontName="Helvetica-Bold",
    fontSize=10,
    leading=12.5,
    textColor=INK,
    keepWithNext=True,
)
JOB_META = style(
    "JobMeta",
    fontName="Helvetica",
    fontSize=8.3,
    leading=10.5,
    textColor=MUTED,
    spaceAfter=2.5,
    keepWithNext=True,
)
BODY = style(
    "Body",
    fontName="Helvetica",
    fontSize=8.8,
    leading=11.8,
    textColor=INK,
)
BULLET = style(
    "Bullet",
    fontName="Helvetica",
    fontSize=8.35,
    leading=10.4,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=0,
    textColor=INK,
    spaceAfter=1.6,
)
SMALL = style(
    "Small",
    fontName="Helvetica",
    fontSize=8,
    leading=10.5,
    textColor=MUTED,
)
SMALL_HEADING = style(
    "SmallHeading",
    fontName="Helvetica-Bold",
    fontSize=8.4,
    leading=10.5,
    textColor=INK,
    spaceAfter=2,
)
def bullet(text):
    return Paragraph(text, BULLET, bulletText="-")


def section(title):
    return Paragraph(title.upper(), SECTION)


def job(company, title, dates, summary, bullets):
    story = [
        Paragraph(f"{company} | {title}", JOB),
        Paragraph(f"{dates} | {summary}", JOB_META),
    ]
    story.extend(bullet(item) for item in bullets)
    story.append(Spacer(1, 3))
    return KeepTogether(story)


class ResumeDocTemplate(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(
            filename,
            pagesize=letter,
            leftMargin=0.58 * inch,
            rightMargin=0.58 * inch,
            topMargin=1.56 * inch,
            bottomMargin=0.68 * inch,
            title='Dallin "Danny" Stone - Senior Software Engineer',
            author='Dallin "Danny" Stone',
            subject="Professional resume",
        )
        frame = Frame(
            self.leftMargin,
            self.bottomMargin,
            self.width,
            self.height,
            leftPadding=0,
            rightPadding=0,
            topPadding=0,
            bottomPadding=0,
            id="resume-frame",
        )
        self.addPageTemplates(PageTemplate(id="resume", frames=[frame], onPage=draw_page))


def draw_page(canvas, doc):
    width, height = letter
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 1.35 * inch, width, 1.35 * inch, stroke=0, fill=1)
    canvas.setFillColor(GOLD)
    canvas.rect(0, height - 1.39 * inch, width, 0.04 * inch, stroke=0, fill=1)

    header = Table(
        [
            [
                [Paragraph('Dallin "Danny" Stone', NAME), Paragraph("Senior Software Engineer at PrismHR", ROLE)],
                Paragraph(
                    '<link href="mailto:danny@dallinstone.com" color="#FFFCF6">danny@dallinstone.com</link><br/>'
                    "602-316-9476 | Richland, WA<br/>"
                    '<link href="https://dallinstone.com" color="#FFFCF6">dallinstone.com</link> | '
                    '<link href="https://www.linkedin.com/in/dallinstone" color="#FFFCF6">linkedin.com/in/dallinstone</link>',
                    CONTACT,
                ),
            ]
        ],
        colWidths=[4.0 * inch, 3.34 * inch],
    )
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    header.wrapOn(canvas, width - 0.84 * inch, 1.05 * inch)
    header.drawOn(canvas, 0.42 * inch, height - 1.1 * inch)

    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, 0.34 * inch, width - doc.rightMargin, 0.34 * inch)
    canvas.setFont("Helvetica", 7.2)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.19 * inch, "DALLINSTONE.COM")
    canvas.drawRightString(width - doc.rightMargin, 0.19 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


def build_resume():
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)

    story = [
        section("Profile"),
        Paragraph(
            "Senior software engineer and technical leader with more than a decade of experience building, modernizing, and supporting data-heavy business software. I lead teams and work across C# 14/.NET 10 applications, SQL Server 2012+, React and Angular interfaces, Azure integrations, and the requirements that turn business needs into reliable systems.",
            SUMMARY,
        ),
        section("Core expertise"),
    ]

    expertise = Table(
        [
            [
                [Paragraph("DATABASE ENGINEERING", SMALL_HEADING), Paragraph("SQL Server 2012+, database design, stored procedures, triggers, views, index and query tuning, Dapper, Entity Framework Core", SMALL)],
                [Paragraph("APPLICATION SYSTEMS", SMALL_HEADING), Paragraph("C# 14, .NET 10, .NET Framework, ASP.NET, REST APIs, React, Angular, TypeScript, identity and SSO", SMALL)],
                [Paragraph("TECHNICAL LEADERSHIP", SMALL_HEADING), Paragraph("People management, requirements gathering, project planning, stakeholder communication, mentoring, interviewing", SMALL)],
            ]
        ],
        colWidths=[2.39 * inch, 2.39 * inch, 2.39 * inch],
    )
    expertise.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F4E2BB")),
                ("BOX", (0, 0), (-1, -1), 0.6, RULE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, RULE),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.extend([expertise, section("Experience")])
    story.append(
        job(
            "PrismHR",
            "Senior Software Engineer",
            "September 2023 - Present",
            "Multi-tenant Talent Management and Workforce Management applications and integrations with PrismHR HCM and PEO Core",
            [
                "Build features and resolve defects in multi-tenant PrismHR Talent Management using C# 14 and .NET 10 with layered contract, repository, provider, and API controller architecture.",
                "Design SQL Server queries, stored procedures, tables, functions, and indexes using Dapper and Entity Framework Core, including query optimization, refactoring, and major data cleanup.",
                "Led the integration of Talent Management onboarding with PrismOne ID single sign-on.",
                "Configure Duende IdentityServer clients and scopes for secure authentication and authorization.",
                "Engineer integrations connecting Workforce Management with HCM, Talent Management with HCM, and Talent Management with PrismHR PEO Core using Azure Service Bus, Azure Functions, RabbitMQ, and C# webhooks.",
                "Test application behavior with xUnit, Moq, NSubstitute, Bruno API collections, and Playwright browser automation.",
                "Use Azure DevOps and Jira for backlog refinement, estimation, sprint planning, and delivery tracking.",
                "Use GitHub Copilot, Claude Code, and ChatGPT Codex with prompt engineering, agents, hooks, skills, and task-based workflows to accelerate development and improve delivery.",
                "Deliver Angular and TypeScript bug fixes and focused interface improvements alongside backend work.",
                "Build Talent Management and Workforce Management features under strict PII information-security requirements for sensitive HCM data.",
                "Collaborate with enterprise architects and technical leads to align features with established SDLC and architecture standards.",
                "Help modernize legacy Workforce Management projects from .NET Framework 4 to .NET 8 using Entity Framework Core, dependency injection, and contemporary data-access patterns.",
                "Apply factory, unit-of-work, and repository patterns to keep services testable and maintainable across legacy and modernized codebases.",
            ],
        )
    )
    story.append(PageBreak())
    story.append(section("Experience continued"))
    story.append(
        job(
            "American Airlines",
            "Senior Web Developer / Team Lead",
            "September 2017 - September 2023",
            "Enterprise recruiting, union, and operations applications",
            [
                "Served as team lead and lead developer for a high-priority, greenfield applicant-tracking system built with React, ASP.NET, and SQL Server, from initial design through production deployment; assigned work and reported status to senior leadership.",
                "Managed software engineers through regular one-on-ones, performance reviews, and ongoing mentorship.",
                "Set team objectives and tracked KPIs including story points per sprint and deployments per week.",
                "Partnered with project managers and business stakeholders on long-term tactical plans and strategic feature-rollout decisions.",
                "Created and rigorously tested disaster-recovery and business-continuity plans used during three live business-critical events to maximize uptime.",
                "Led CWA/IBT and TWU union-site development under strict PII-security requirements for sensitive user data and new collective bargaining agreements.",
                "Migrated three legacy applications to Azure App Service, SQL Managed Instance, and Azure Data Factory.",
                "Managed API authentication and authorization with PingFederate and JWT tokens.",
                "Conducted more than 30 technical interviews and made final hiring decisions for eight developers, scaling the team to meet organizational priorities.",
                "Designed and maintained SQL Server 2016 databases, stored procedures, triggers, and views, including the American Airlines drug-and-alcohol-testing random-selection program.",
                "Supported production applications built with C#, VB.NET, Blazor, Web Forms, and MVC on the Employee Shared Technology team.",
            ],
        )
    )
    story.extend(
        [
            section("Earlier experience"),
            job(
                "MWA Intelligence",
                "Director of Technical Support",
                "October 2015 - September 2017",
                "ERP implementation, SQL reporting, production support, and people leadership",
                [
                    "Built and managed a seven-person technical-support team serving fourteen enterprise clients; set departmental objectives and used one-on-ones, performance metrics, and KPIs to drive improvement.",
                    "Created hundreds of SQL reports and views that streamlined business processes and supported client transitions to new ERP software.",
                    "Architected a SAP Business One revenue-recognition module using SQL stored procedures to analyze deferred revenue for multi-million-dollar corporations.",
                    "Partnered with the SAP Business One implementation team on system configuration, feature creation, and end-user training.",
                    "Established repeatable support practices that improved case ownership and service visibility across the client portfolio.",
                ],
            ),
            section("Education"),
        ]
    )

    education = Table(
        [
            [
                [Paragraph("Boston University", SMALL_HEADING), Paragraph("MS, Computer Information Systems", BODY), Paragraph("Data Analytics emphasis | 2017-2019", SMALL)],
                [Paragraph("Arizona State University", SMALL_HEADING), Paragraph("BS, Accountancy", BODY), Paragraph("Minor: Asian Languages - Chinese | 2009-2015", SMALL)],
            ]
        ],
        colWidths=[3.59 * inch, 3.59 * inch],
    )
    education.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOX", (0, 0), (-1, -1), 0.6, RULE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, RULE),
                ("BACKGROUND", (0, 0), (0, 0), colors.HexColor("#F4E2BB")),
                ("BACKGROUND", (1, 0), (1, 0), colors.HexColor("#EAD6D4")),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    story.extend([education, section("Technical toolkit")])

    toolkit = Table(
        [
            [Paragraph("LANGUAGES & FRAMEWORKS", SMALL_HEADING), Paragraph("C# 14, .NET 10, .NET Framework, ASP.NET, React, Angular, TypeScript", SMALL)],
            [Paragraph("DATA", SMALL_HEADING), Paragraph("SQL Server 2012+, database design, stored procedures, query plans, indexes, Dapper, Entity Framework Core", SMALL)],
            [Paragraph("CLOUD & INTEGRATION", SMALL_HEADING), Paragraph("Azure App Service, Azure Functions, Azure Service Bus, Azure Data Factory, RabbitMQ, REST APIs, webhooks", SMALL)],
            [Paragraph("LEADERSHIP & DELIVERY", SMALL_HEADING), Paragraph("People management, requirements gathering, project planning, mentoring, interviewing, PII security, disaster recovery, SDLC governance", SMALL)],
            [Paragraph("QUALITY & AI", SMALL_HEADING), Paragraph("xUnit, Moq, NSubstitute, Playwright, Bruno, GitHub Copilot, Claude Code, ChatGPT Codex", SMALL)],
        ],
        colWidths=[1.7 * inch, 5.48 * inch],
    )
    toolkit.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LINEBELOW", (0, 0), (-1, -2), 0.35, RULE),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(toolkit)

    doc = ResumeDocTemplate(str(OUTPUT_PDF))
    doc.build(story)
    shutil.copyfile(OUTPUT_PDF, PUBLIC_PDF)


if __name__ == "__main__":
    build_resume()
