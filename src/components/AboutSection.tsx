import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "MD - Harvard Medical School",
        "Residency - Johns Hopkins Hospital",
        "Fellowship - Mayo Clinic Cardiology"
      ]
    },
    {
      icon: Award,
      title: "Certifications",
      items: [
        "Board Certified Cardiologist",
        "Internal Medicine Certification",
        "Advanced Cardiac Life Support (ACLS)"
      ]
    },
    {
      icon: Heart,
      title: "Specializations",
      items: [
        "Preventive Cardiology",
        "Heart Disease Management",
        "Hypertension Treatment"
      ]
    },
    {
      icon: Users,
      title: "Experience",
      items: [
        "15+ Years Clinical Practice",
        "5,000+ Patients Treated",
        "500+ Successful Procedures"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Dr. Johnson</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dedicated to Your Heart Health
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With a passion for preventive medicine and patient-centered care, Dr. Sarah Johnson 
            combines cutting-edge medical expertise with compassionate treatment approaches to 
            help patients achieve optimal cardiovascular health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Biography</h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience 
                in cardiovascular medicine. She completed her medical degree at Harvard Medical School, 
                followed by her internal medicine residency at Johns Hopkins Hospital and cardiology 
                fellowship at the prestigious Mayo Clinic.
              </p>
              <p>
                Her expertise encompasses a wide range of cardiovascular conditions, with a particular 
                focus on preventive cardiology, heart disease management, and hypertension treatment. 
                Dr. Johnson believes in a holistic approach to patient care, emphasizing lifestyle 
                modifications alongside advanced medical interventions.
              </p>
              <p>
                She has published numerous research papers in peer-reviewed journals and regularly 
                speaks at medical conferences. Dr. Johnson is committed to staying at the forefront 
                of cardiovascular medicine to provide her patients with the most effective and 
                innovative treatments available.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Professional Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5,000+</div>
                  <div className="text-sm text-muted-foreground">Patients Treated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-lg font-semibold mb-4">Philosophy of Care</h4>
              <p className="text-primary-light leading-relaxed">
                "Every patient deserves personalized, compassionate care. I believe in educating 
                my patients about their conditions and working together to develop treatment plans 
                that fit their lifestyle and goals."
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;