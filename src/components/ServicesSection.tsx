import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Stethoscope, Shield, Clock, Users, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Preventive Cardiology",
      description: "Comprehensive cardiovascular risk assessment and prevention strategies to maintain optimal heart health.",
      features: ["Risk Factor Assessment", "Lifestyle Counseling", "Early Detection Screening", "Preventive Medications"],
      color: "primary"
    },
    {
      icon: Activity,
      title: "Heart Disease Management",
      description: "Advanced treatment and management of various heart conditions with personalized care plans.",
      features: ["Coronary Artery Disease", "Heart Failure Treatment", "Arrhythmia Management", "Post-Surgery Care"],
      color: "secondary"
    },
    {
      icon: Stethoscope,
      title: "Diagnostic Testing",
      description: "State-of-the-art cardiac diagnostic procedures to accurately assess heart function and health.",
      features: ["Echocardiograms", "Stress Testing", "Holter Monitoring", "Cardiac Catheterization"],
      color: "accent"
    },
    {
      icon: Shield,
      title: "Hypertension Care",
      description: "Comprehensive blood pressure management to reduce cardiovascular risk and improve quality of life.",
      features: ["Blood Pressure Monitoring", "Medication Management", "Lifestyle Modifications", "Regular Follow-ups"],
      color: "primary"
    }
  ];

  const specializations = [
    "Preventive Cardiology",
    "Interventional Cardiology", 
    "Heart Failure Management",
    "Hypertension Treatment",
    "Cardiac Rehabilitation",
    "Women's Heart Health",
    "Geriatric Cardiology",
    "Sports Cardiology"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Medical Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Cardiovascular Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From prevention to treatment, I offer a full spectrum of cardiovascular services 
            tailored to meet your individual health needs and goals.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-subtle">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                      <IconComponent className={`h-7 w-7 text-${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="group/btn w-full justify-between">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Specializations */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Areas of Specialization</h3>
            <p className="text-muted-foreground">
              Focused expertise across multiple cardiovascular disciplines
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {specializations.map((specialization, index) => (
              <div key={index} className="group">
                <Badge 
                  variant="secondary" 
                  className="w-full py-3 px-4 justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer"
                >
                  {specialization}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary-light" />
              <span className="text-primary-light font-medium">Same-day appointments available</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take Care of Your Heart?
            </h3>
            <p className="text-primary-light mb-8 max-w-2xl mx-auto">
              Schedule a consultation today and take the first step towards better cardiovascular health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary-medical" size="lg">
                Book Consultation
              </Button>
              <Button variant="outline-medical" size="lg">
                View Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;