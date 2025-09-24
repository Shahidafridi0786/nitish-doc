import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
import doctorProfile from "@/assets/doctor-profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-20"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              Available for Consultations
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Dr. Sarah Johnson
              <span className="block text-2xl md:text-3xl font-normal text-primary-light mt-2">
                Cardiologist & Internal Medicine Specialist
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl leading-relaxed">
              Board-certified cardiologist with over 15 years of experience in preventive cardiology, 
              heart disease management, and comprehensive internal medicine care. Dedicated to providing 
              personalized, compassionate healthcare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="medical" size="lg" className="group">
                <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </Button>
              <Button variant="secondary-medical" size="lg" className="group">
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-primary-light">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">dr.sarah@medicalcenter.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
            </div>
          </div>
          
          {/* Doctor Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-secondary/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-accent/20 rounded-full"></div>
              
              {/* Main Image */}
              <div className="relative bg-card rounded-3xl p-2 shadow-medical">
                <img
                  src={doctorProfile}
                  alt="Dr. Sarah Johnson - Cardiologist"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Certifications Badge */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
                  <div className="text-sm font-semibold text-primary mb-1">Board Certified</div>
                  <div className="text-xs text-muted-foreground">Cardiology • Internal Medicine</div>
                </div>
                
                {/* Years of Experience Badge */}
                <div className="absolute top-6 right-6 bg-secondary/95 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary-foreground">15+</div>
                    <div className="text-xs text-secondary-foreground">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;