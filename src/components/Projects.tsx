import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaLinkedin, FaPhp, FaReact } from "react-icons/fa";
import { SiExpress, SiFastapi, SiMantine, SiPostgresql, SiSpringboot, SiXampp } from "react-icons/si";
import { RiGeminiLine } from "react-icons/ri";
import type { ReactNode } from "react";
import { FaFlutter } from "react-icons/fa6";

type ProjectData = {
  title: string;
  description: string[];
  github?: string;
  linkedIn?: string;
  thumbnail?: string;
  images?: string[];
  tech: ReactNode[];
};

const projectData: ProjectData[] = [
  {
    title: "🏆 GrabEx - AI-Powered Sales & Customer Retention Dashboard",
    description: [
        "Secured first place in a large-scale hackathon, outperforming over 1,000 participants from 113 universities.",
        "Developed a full-stack web platform to help merchants re-engage lapsed customers and optimize inventory decisions using natural language prompts.",
        "Deployed using Docker for modular development and ease of deployment; designed interactive UI with React.js + Mantine and backend API with FastAPI",
    ],
    github: "https://github.com/KaviV23/nttc-umhack",
    linkedIn:
      "https://www.linkedin.com/posts/023kavi_hackathon-umhackathon2025-grab-activity-7321759956636954624-nAwp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADv2IRoBd0gVNmUjTJ2M_KhIFH9aLD3siE0",
    thumbnail: "/projects/grabEx/1.jpg",
    images: ["/projects/grabEx/1.jpg", "/projects/grabEx/2.gif", "/projects/grabEx/3.jpg", "/projects/grabEx/4.jpeg"],
    tech: [
      <FaReact size={24} />,
      <SiMantine size={24} />,
      <SiFastapi size={24} />,
      <RiGeminiLine size={24} />,
      <SiPostgresql size={24} />,
    ],
  },
  {
    title: "IxC Pay - Offline Payment System",
    description: [
        "Participated in a 9-day hackathon programme with workshops focusing on sustainability and green coding.",
        "Collaborated in a team of three to develop a fully functional offline peer-to-peer payment system, designed for areas with limited internet connectivity.",
        "Built a cross-platform mobile app in Flutter, with a React.js dashboard and Express.js + PostgreSQL backend for handling transactions.",
    ],
    thumbnail: "/projects/ixcpay/1.jpg",
    images: ["/projects/ixcpay/1.jpg", "/projects/ixcpay/2.jpeg", "/projects/ixcpay/3.jpg"],
    tech: [
        <FaFlutter size={24} />,
        <FaReact size={24}/>,
        <SiExpress size={24}/>,
        <SiPostgresql size={24}/>,
    ]
  },
  {
    title: "CityWatch - Community Issue Reporting Platform",
    github: "https://github.com/KaviV23/CityWatch",
    description: [
        "Designed and built a functional forum-style website for residents to report and track township issues (e.g., potholes, streetlight outages, water disruptions).",
        "Implemented user authentication, and admin moderation features using PHP and the XAMPP stack.",
        "Styled a clean and intuitive UI with HTML/CSS, enabling a simple and accessible reporting experience.",
    ],
    thumbnail: "/projects/citywatch/1.png",
    images: ["/projects/citywatch/1.png", "/projects/citywatch/2.png", "/projects/citywatch/3.png"],
    tech: [
        <FaPhp size={24}/>,
        <FaHtml5 size={24}/>,
        <FaCss3 size={24}/>,
        <SiXampp size={24} />,
    ]
  },
  {
    title: "Tackboard - Todo App",
    github: "https://github.com/KaviV23/tackboard",
    description: [
      "Built a responsive full-stack Todo app using React, Bootstrap, and Spring Boot, with PostgreSQL for data persistence.",
      "Implemented JWT-based authentication with Spring Security to ensure secure user login and API protection.",
      "Designed RESTful APIs and dynamic UI components to support CRUD operations with a focus on clean architecture and reusability.",
    ],
    thumbnail: "/projects/tackboard/1.png",
    images: ["/projects/tackboard/1.png", "/projects/tackboard/2.png", "/projects/tackboard/3.png", "/projects/tackboard/4.png"],
    tech: [
        <FaReact size={24}/>,
        <FaBootstrap size={24}/>,
        <SiSpringboot size={24}/>,
        <SiPostgresql size={24} />,
    ]
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Featured Projects
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Dialog key={index}>
            <Card className="min-h-0 bg-secondary-dark border-gray-700 text-white">
              <CardHeader>
                {project.thumbnail && <DialogTrigger asChild>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`rounded-lg ${
                      project.images && "cursor-pointer"
                    } aspect-video object-cover`}
                  />
                </DialogTrigger>}
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-4">{project.title}</CardTitle>
                <ul className="list-disc list-inside text-gray-300">
                  {project.description.map((line, idx) => (
                    <li className="mb-2" key={idx}>{line}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="hover:text-accent-blue"
                    >
                      <FaGithub size={30} />
                    </a>
                  )}
                  {project.linkedIn && (
                    <a
                      href={project.linkedIn}
                      target="_blank"
                      className="hover:text-accent-blue"
                    >
                      <FaLinkedin size={30} />
                    </a>
                  )}
                </div>
                <div className="flex space-x-2">
                  {project.tech.map((Icon, i) => (
                    <div key={i}>{Icon}</div>
                  ))}
                </div>
              </CardFooter>
            </Card>
            {project.images && (
              <DialogContent
                className="
                  bg-secondary-dark border-gray-700 text-white
                  w-full max-w-7xl
                  max-h-[calc(100vh-2rem)]
                  my-4
                  p-4
                "
              >
                <Carousel>
                  <CarouselContent>
                    {project.images.map((img, i) => (
                      <CarouselItem key={i} className="flex justify-center items-center">
                        <img
                          src={img}
                          className="max-h-[70vh] max-w-full w-auto h-auto rounded-lg object-contain"
                          alt={`Project image ${i + 1}`}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex"/>
                  <CarouselNext className="hidden md:flex"/>
                </Carousel>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </section>
  );
}
