import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Alex Thompson</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful, functional digital experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-background/80 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>San Francisco, CA</p>
              <a 
                href="mailto:alex@example.com" 
                className="block hover:text-background transition-colors"
              >
                alex@example.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="block hover:text-background transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            
            <div className="mt-4 p-3 bg-background/10 rounded-lg">
              <p className="text-xs text-background/80">
                Currently available for freelance projects and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Alex Thompson. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;