import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Button } from "@/components/ui/button"
const myImage = '/my-picture.jpg'; 

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen"
    >
      <div className="md:w-1/3 flex justify-center pt-12 md:p-8">
        <div className="relative w-64 h-64 md:ml-auto">
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
        <h2 className="text-lg md:text-2xl -bold text-gray-300">Hi 👋, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Kaviraj Vijayanthiran
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          I'm a final year Software Engineering student at <a href='https://sunwayuniversity.edu.my/' target='_blank' className='underline'>Sunway University</a> with hands-on experience in full-stack development, cloud infrastructure, and DevOps.
          I am passionate about software development and keen on working with the latest tech!
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