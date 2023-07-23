import { employmentItem } from "../Models/EmploymentItem";

export const empItems: employmentItem[] =
    [
        {
            name: "American Airlines",
            title: "Senior Web Applications Developer",
            dates: "Sept 2017 - Present",
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