import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
const myImage = '/my-picture.jpg'; 

export function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/3 flex justify-center pt-12 md:p-8">
        <div className="relative w-64 h-64 md:ml-auto">
          <div className="absolute inset-0 bg-white p-2 transform -rotate-3 shadow-2xl rounded-md">
            <img src={myImage} alt="Kaviraj Vijayanthiran" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="md:w-2/3 text-center md:text-left p-8">
        <h2 className="text-lg md:text-2xl -bold text-gray-300">Hi 👋, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white">Kaviraj Vijayanthiran</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          I'm a final-year Software Engineering student at Sunway University.<br className='hidden sm:block'/> I have fun working on frontend and backend projects that solve real world problems using my experience from past internship, freelance projects, and competitions.
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-6">
          <a href="https://github.com/KaviV23" target="_blank" className="text-gray-300 hover:text-accent-blue"><FaGithub size={30} /></a>
          <a href="https://linkedin.com/in/023kavi" target="_blank" className="text-gray-300 hover:text-accent-blue"><FaLinkedin size={30} /></a>
          <a href="mailto:023kavi@gmail.com" target="_blank" className="text-gray-300 hover:text-accent-blue"><SiGmail size={30} /></a>
        </div>
      </div>
    </section>
  );
}