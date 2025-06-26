import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experienceData = [
  {
    role: "Software Engineering Trainee",
    company: "Exabytes Enterprise Sdn. Bhd.",
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