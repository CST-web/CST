import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import socialBg from "@/assets/social-media-bg.jpg";
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z
    .string()
    .trim()
    .min(5, "Le sujet doit contenir au moins 5 caractères")
    .max(200),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(1000),
});
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "club.scientifique.tech@gmail.com",
      link: "mailto:club.scientifique.tech@gmail.com",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 619-099651",
      link: "tel:+212619099651",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Lycée Ibn Timiya - Salle de conférence",
      link: "#",
    },
  ];
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/club.scientifique.tech",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/company/club.scientifique.tech/",
    },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question, une suggestion ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="relative overflow-hidden shadow-medium">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${socialBg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
              <CardContent className="relative pt-6 flex flex-col items-center text-center">
                <h3 className="font-semibold text-white mb-4">Suivez-nous</h3>
                <div className="flex gap-3 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">
                  Envoyez-nous un Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nom *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Votre nom"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="votre@email.com"
                        required
                        maxLength={255}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      placeholder="Objet de votre message"
                      required
                      maxLength={200}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Votre message..."
                      rows={8}
                      required
                      maxLength={1000}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/1000 caractères
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Envoyer le Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
