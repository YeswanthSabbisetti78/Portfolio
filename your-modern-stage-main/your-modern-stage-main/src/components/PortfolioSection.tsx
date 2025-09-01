import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Railway Track Crack/Obstacle Detection Robot',
      description: 'Designed and built a mobile robot for rail defect detection with GPS/IoT telemetry and Arduino-based L293D motor control. Conducted material review and stress/strain comparisons.',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop',
      technologies: ['Arduino', 'IoT', 'GPS', 'L293D Motor Driver'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Laptop/Serial-Controlled Robot',
      description: 'Engineered a wireless control pipeline using serial command parsing to drive motion reliably. Documented specifications and testing routines to ensure robust performance.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      technologies: ['Serial Communication', 'Wireless Control', 'Microcontroller'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'NDT Methods Research',
      description: 'Studied advanced Non-Destructive Testing techniques, welding processes, and dam gate installation during internship at Water Resources Department.',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=400&fit=crop',
      technologies: ['NDT', 'Welding Analysis', 'Material Testing'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'FEA Analysis Projects',
      description: 'Applied Finite Element Analysis concepts using ANSYS for structural analysis and design optimization in various mechanical components.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      technologies: ['ANSYS', 'FEA', 'Structural Analysis', 'CATIA'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from web applications to UI/UX design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="card-elegant overflow-hidden group">
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;