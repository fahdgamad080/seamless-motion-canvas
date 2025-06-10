import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-700 dark:to-pink-700 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 dark:from-green-600 dark:via-blue-700 dark:to-purple-800 opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-white/20 dark:bg-black/30"></div>
      
      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300/30 dark:bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-300/30 dark:bg-rose-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center">
                <span className="text-3xl font-bold gradient-text">FC</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-white drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Fahd's Code</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies and creative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/projects">
              {/*<Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                View My Work
              </Button>*/}
            </Link>
            <a
              href="/FAHD GAMAD.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/fahdgamad080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 backdrop-blur-md hover:scale-110 transition-all duration-300">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/fahd-gamad-420404200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 backdrop-blur-md hover:scale-110 transition-all duration-300">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="mailto:fahdgamad80@gmail.com"
            >
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 backdrop-blur-md hover:scale-110 transition-all duration-300">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
