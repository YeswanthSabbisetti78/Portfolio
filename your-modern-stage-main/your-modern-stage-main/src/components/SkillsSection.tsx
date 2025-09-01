import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Users,
  Lightbulb,
  MessageSquare,
  Target,
  Clock
} from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'CATIA & NX CAD', level: 90, icon: Code2 },
    { name: 'ANSYS & FEA', level: 85, icon: Database },
    { name: 'AutoCAD & SolidWorks', level: 80, icon: Palette },
    { name: 'Python & MATLAB', level: 75, icon: Code2 },
    { name: 'Robotics & IoT', level: 85, icon: Globe },
  ];

  const softSkills = [
    { name: 'Analytical Problem Solving', icon: Lightbulb },
    { name: 'Team Coordination', icon: Users },
    { name: 'Technical Communication', icon: MessageSquare },
    { name: 'Project Leadership', icon: Target },
    { name: 'Research & Development', icon: Clock },
    { name: 'NDT Methods', icon: Smartphone },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A blend of technical proficiency and creative problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <Card key={skill.name} className="p-6 card-elegant">
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <Card 
                  key={skill.name} 
                  className="p-6 card-elegant text-center hover:scale-105 transition-transform"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <skill.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-medium text-sm">{skill.name}</h4>
                </Card>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Technologies I Use</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'CATIA', 'ANSYS', 'NX CAD', 'AutoCAD', 'SolidWorks', 'Python',
                  'MATLAB', 'Arduino', 'IoT', 'GPS', 'NDT', 'FEA'
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
