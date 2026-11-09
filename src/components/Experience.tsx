import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    role: "Associate Software Engineer",
    company: "Ideagen (Please Review)",
    period: "October 2025 - Present",
    description: [
      "Built the proof of concept and drove R&D for moving legacy .NET Framework 4.8 applications onto AWS ECS with GitHub Actions and Terraform, after iterating across Azure DevOps, Azure Web Apps and ArgoCD.",
      "Replaced RDP, manual provisioning, and config editing with a dashboard (React, .NET) and XML config rendering tool; in testing, cut tenant onboarding and server upgrades from a few hours to under 30 minutes, with production rollout planned for 2027.",
      "Deliver feature enhancements, refactors and bugfixes in C#/.NET, TypeScript and MSSQL across the full software development lifecycle.",
      "Write unit tests, collaborate with QA and participate in code reviews to reduce regressions.",
    ]
  },
  {
    role: "Software Engineering Trainee",
    company: "Exabytes Enterprise",
    period: "January 2025 - April 2025",
    description: [
      "Automated provisioning and validation of virtual machines by developing a full stack React, Express & PostgreSQL application.",
      "Implemented Infrastructure as Code (IaC) with Terraform, CloudFormation & AWS CDK to provision resources and deploy applications on AWS.",
      "Streamlined deployments of applications and docker images through automated CI/CD pipelines using Jenkins, AWS CodePipeline & GitHub Actions.",
      "Monitored real-time system resource metrics with Prometheus and implemented automated system data collection using Bash & PowerShell scripts with scheduled execution.",
    ]
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Professional Experience</h2>
      <div className="container mx-auto">
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="bg-secondary-dark border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">{exp.role}</CardTitle>
                <p className="text-accent-blue">{exp.company} | {exp.period}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.description.map((desc, i) => <li key={i} className="mb-2">{desc}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}