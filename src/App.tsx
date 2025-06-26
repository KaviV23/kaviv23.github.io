import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navbar } from './components/NavBar';

function App() {
  return (
    <div className="bg-primary-dark min-h-screen">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23007BFF' fill-opacity='0.4'%3E%3Crect x='0' y='0' width='1' height='100'/%3E%3Crect x='0' y='0' width='100' height='1'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;