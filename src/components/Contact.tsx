import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export function Contact() {
    return (
        <section id="contact" className="py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 mb-8">Feel free to reach out on my socials!</p>
            <div className="flex justify-center space-x-8">
                <a href="https://github.com/KaviV23" target="_blank" className="text-gray-300 hover:text-accent-blue"><FaGithub size={40} /></a>
                <a href="https://linkedin.com/in/023kavi" target="_blank" className="text-gray-300 hover:text-accent-blue"><FaLinkedin size={40} /></a>
                <a href="mailto:023kavi@gmail.com" target="_blank" className="text-gray-300 hover:text-accent-blue"><SiGmail size={40} /></a>
            </div>
        </section>
    )
}