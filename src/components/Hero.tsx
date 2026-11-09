import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Button } from "@/components/ui/button"

const myImage = '/my-picture2.jpg'; 

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen"
    >
      <div className="md:w-1/3 flex justify-center pt-12 md:p-8">
        <div className="relative size-64 md:size-80 md:ml-auto">
          <div className="absolute inset-0 bg-white p-2 transform -rotate-3 shadow-2xl rounded-md">
            <img
              src={myImage}
              alt="Kaviraj Vijayanthiran"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:w-2/3 text-center md:text-left p-8">
        <span className="text-lg md:text-2xl -bold text-gray-300">Hi 👋, I'm</span>
        <h1 className="text-3xl md:text-7xl font-bold text-white">
          Kaviraj Vijayanthiran
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl">
          Software Engineer with 1+ year of professional experience.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl">
          At <a href='https://www.ideagen.com/' target='_blank' className='underline'>Ideagen</a>, I'm building solutions in <b>NET, React/TypeScript and AWS</b>, including the proof of concept for modernizing legacy .NET Framework 4.8 deployments onto AWS ECS.
        </p>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-xl">
          On the side, I love building web and mobile applications in <b>React &amp; TypeScript.</b>
        </p>
        <div className="mt-6 flex justify-center items-center md:justify-start space-x-6">
          <a
            href="https://github.com/KaviV23"
            target="_blank"
            className="text-gray-300 hover:text-accent-blue"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/023kavi"
            target="_blank"
            className="text-gray-300 hover:text-accent-blue"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:023kavi@gmail.com"
            target="_blank"
            className="text-gray-300 hover:text-accent-blue"
          >
            <SiGmail size={30} />
          </a>
          <a href="/resume.pdf" target="_blank">
            <Button
              size="sm"
              className="bg-secondary-dark hover:bg-accent-blue text-gray-300 rounded-xl"
            >
              <FaLink size={16} />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
