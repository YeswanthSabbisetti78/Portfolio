import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Robotics Intern',
      company: 'Lynaysha & Thevan Software Technologies',
      location: 'Remote',
      period: 'Apr–Jun 2023',
      description: 'Gained practical exposure in robotics design and programming with a focus on automation and control systems.',
      achievements: [
        'Developed understanding of robotics programming fundamentals',
        'Worked on automation and control system projects',
        'Enhanced technical skills in robotics design'
      ]
    },
    {
      title: 'Engineering Intern',
      company: 'Water Resources Dept., Govt. of Andhra Pradesh',
      location: 'Polavaram Irrigation Project',
      period: 'May–Jun 2022',
      description: 'Studied welding techniques, NDT processes, and dam gate installation/design specifications at the Polavaram Irrigation Project.',
      achievements: [
        'Gained expertise in welding techniques and NDT methods',
        'Studied dam gate installation and design specifications',
        'Applied engineering principles to large-scale infrastructure projects'
      ]
    },
    {
      title: 'Student Coordinator',
      company: 'AVISHKAAR & ADVIKA, AKNUCE',
      location: 'Rajahmundry, AP',
      period: '2022–2023',
      description: 'Led initiatives and organized national-level events, technical talks, and orientations for undergraduate students.',
      achievements: [
        'Organized national-level technical events and competitions',
        'Conducted technical talks and student orientations',
        'Resolved student issues through structured counseling and mentoring'
      ]
    }
  ];

  const education = [
    {
      degree: 'MBA (Master of Business Administration)',
      school: 'Andhra University, Visakhapatnam',
      period: '2025–2027',
      description: 'Currently pursuing MBA to enhance business acumen and management skills'
    },
    {
      degree: 'B.Tech in Mechanical Engineering',
      school: 'Adi Kavi Nannaya University, Rajahmundry',
      period: '2020–2024',
      gpa: '8.3/10.0'
    },
    {
      degree: 'Intermediate Education',
      school: 'Sri Chaitanya Junior College, Rajahmundry',
      period: '2018–2020',
      description: 'Percentage: 84%'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and continuous learning path
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 card-elegant">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-lg font-medium text-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-muted-foreground mt-2 md:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education & CV Download */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6 mb-8">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 card-elegant">
                  <h4 className="font-semibold text-primary mb-2">
                    {edu.degree}
                  </h4>
                  <p className="font-medium text-foreground mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {edu.period}
                  </div>
                  {edu.gpa && (
                    <p className="text-sm text-muted-foreground">
                      GPA: {edu.gpa}
                    </p>
                  )}
                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {edu.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>

            {/* CV Download */}
            <Card className="p-6 card-elegant text-center">
              <h4 className="font-semibold mb-4">Download Resume</h4>
              <p className="text-sm text-muted-foreground mb-6">
                Get a detailed overview of my experience and qualifications
              </p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download CV (PDF)
              </Button>
            </Card>

            {/* Certifications */}
            <Card className="p-6 card-elegant mt-6">
              <h4 className="font-semibold mb-4">Publications & Activities</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium">Mukt Shabd Journal</p>
                  <p className="text-muted-foreground">Vol. 23, Issue XI, pp. 210–224</p>
                </div>
                <div>
                  <p className="font-medium">Journal for Basic Sciences</p>
                  <p className="text-muted-foreground">Vol. XII, Issue XI, pp. 522–531</p>
                </div>
                <div>
                  <p className="font-medium">Technical Workshops</p>
                  <p className="text-muted-foreground">TORQUE'23, Automotive Engine Technologies, Fusion Five Robotics</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;