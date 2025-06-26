import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { ReactNode } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaDocker, FaAws, FaGithub, FaJava, FaLinux, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiAndroid, SiApache, SiDart, SiExpo, SiExpress, SiFastapi, SiFlutter, SiGnubash, SiJavascript, SiJenkins, SiKotlin, SiMysql, SiNginx, SiOracle, SiPrometheus, SiScala, SiSpringboot, SiSqlite } from 'react-icons/si';
import { VscAzure, VscTerminalPowershell } from "react-icons/vsc";

type Skills = {
  icon: ReactNode;
  name: string;
};

type RenderSkillsProps = {
  title: string;
  skills: Skills[];
};

// Languages
const languages = [
  { icon: <SiJavascript size={48} />, name: "JavaScript" },
  { icon: <SiTypescript size={48} />, name: "TypeScript" },
  { icon: <FaHtml5 size={48} />, name: "HTML" },
  { icon: <FaCss3Alt size={48} />, name: "CSS" },
  { icon: <FaJava size={48} />, name: "Java" },
  { icon: <FaPython size={48} />, name: "Python" },
  { icon: <SiScala size={48} />, name: "Scala" },
  { icon: <SiKotlin size={48} />, name: "Kotlin" },
  { icon: <SiDart size={48} />, name: "Dart" },
  { icon: <FaPhp size={48} />, name: "PHP" },
]

// Frameworks & Libraries
const framworksLibs = [
  { icon: <FaReact size={48} />, name: "React.js" },
  { icon: <SiExpo size={48} />, name: "Expo" },
  { icon: <SiExpress size={48} />, name: "Express.js" },
  { icon: <SiFastapi size={48} />, name: "FastAPI" },
  { icon: <SiSpringboot size={48} />, name: "Spring Boot" },
  { icon: <SiFlutter size={48} />, name: "Flutter" },
  { icon: <SiAndroid size={48} />, name: "Android Jetpack" },
  { icon: <SiTailwindcss size={48} />, name: "Tailwind CSS" },
]

  // Databases
const databases = [
  { icon: <SiMysql size={48} />, name: "MySQL" },
  { icon: <SiPostgresql size={48} />, name: "PostgreSQL" },
  { icon: <SiSqlite size={48} />, name: "SQLite" },
  { icon: <SiOracle size={48} />, name: "Oracle" },
]

  // DevOps & Tools
const devops = [
  { icon: <FaGithub size={48} />, name: "GitHub" },
  { icon: <FaDocker size={48} />, name: "Docker" },
  { icon: <FaAws size={48} />, name: "AWS" },
  { icon: <FaLinux size={48} />, name: "Linux" },
  { icon: <SiJenkins size={48} />, name: "Jenkins" },
  { icon: <SiApache size={48} />, name: "Apache" },
  { icon: <SiNginx size={48} />, name: "Nginx" },
  { icon: <SiPrometheus size={48} />, name: "Prometheus" },
  { icon: <VscTerminalPowershell size={48} />, name: 'PowerShell' },
  { icon: <SiGnubash size={48} />, name: "Bash" },
  { icon: <VscAzure size={48} />, name: 'Azure' },
];

export function RenderSkills(props: RenderSkillsProps) {
  return (
    <div className="block">
      <h3 className="text-2xl font-bold text-center text-white mb-12">{props.title}</h3>
      <div className="container mx-auto mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <TooltipProvider>
            {props.skills.map((skill, idx) => (
              <div key={idx} className="flex justify-center">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="p-4 bg-secondary-dark rounded-full text-gray-300 hover:text-accent-blue transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-gray-300">
                      {skill.name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>
      <div className="grid md:grid-cols-2">
        <RenderSkills title="Languages" skills={languages} />
        <RenderSkills title="Frameworks & Libraries" skills={framworksLibs} />
        <RenderSkills title="DevOps & Tools" skills={devops} />
        <RenderSkills title="Databases" skills={databases} />
      </div>
    </section>
  );
}