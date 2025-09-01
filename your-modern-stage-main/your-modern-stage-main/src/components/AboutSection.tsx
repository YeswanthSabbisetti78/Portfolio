import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">
                Hi there! I'm Yeswanth Sabbisetti
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Mechanical Engineer with a strong foundation in CAD/CAE technologies and robotics. 
                Currently pursuing my MBA at Andhra University to blend technical expertise with business acumen. 
                My journey in engineering has been driven by a passion for automation and innovative problem-solving.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With experience in robotics design, IoT systems, and NDT methods, I enjoy creating solutions that 
                bridge the gap between mechanical engineering and modern technology. My projects range from railway 
                track detection robots to wireless control systems, always focusing on practical applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Based in Rajahmundry, Andhra Pradesh, I'm passionate about contributing to the engineering community 
                through leadership roles and technical innovation. I believe in continuous learning and applying 
                engineering principles to solve real-world challenges.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">8.3</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Publications</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Technical Projects</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Leadership Roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
