import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center section-padding">
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <p className="text-primary font-medium text-lg md:text-xl">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-gradient">Yeswanth Sabbisetti</span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Mechanical Engineer & Robotics Enthusiast pursuing MBA
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about robotics, automation, and engineering solutions. Currently expanding my horizons 
            with business management while developing innovative projects in IoT and robotic systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="font-medium"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://linkedin.com/in/yeswanth-sabbisetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:yeswanthsabbisetti@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;