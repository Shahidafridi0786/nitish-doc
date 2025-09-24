import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Calendar } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      appointmentDate: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtext: "Mon-Fri 8:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "dr.sarah@medicalcenter.com",
      subtext: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Medical Center Drive",
      subtext: "Suite 200, City, State 12345"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Monday - Friday",
      subtext: "8:00 AM - 6:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to take control of your heart health? Contact us today to schedule your 
            consultation with Dr. Johnson and begin your journey to better cardiovascular wellness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medical border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                Book Appointment
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="appointmentDate">Preferred Date</Label>
                    <Input
                      id="appointmentDate"
                      name="appointmentDate"
                      type="date"
                      value={formData.appointmentDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Reason for Visit *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your symptoms, concerns, or reason for the appointment..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" variant="medical" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to be contacted about your appointment.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="group hover:shadow-card transition-all duration-200 border-0 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Notice */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Medical Emergency</h4>
                    <p className="text-sm text-muted-foreground">
                      If you are experiencing a medical emergency, please call 911 immediately 
                      or visit your nearest emergency room. Do not use this form for urgent medical situations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-card">
              <div className="h-64 bg-gradient-primary/10 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Our Location</h4>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    123 Medical Center Drive<br />
                    Suite 200, City, State 12345
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;