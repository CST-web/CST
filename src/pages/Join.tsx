import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Lightbulb, Bot, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const joinSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20),
  message: z.string().trim().max(500, "Le message ne peut pas dépasser 500 caractères").optional(),
  activities: z.array(z.string()).min(1, "Sélectionnez au moins une activité"),
});

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    activities: [] as string[],
  });

  const benefits = [
    "Accès à tous les ateliers et équipements du club",
    "Participation aux compétitions nationales et internationales",
    "Mentorat par des membres expérimentés",
    "Networking avec d'autres passionnés",
    "Certificats de participation et de réussite",
    "Accès prioritaire aux événements spéciaux",
  ];

  const activities = [
    { id: "chess", label: "Échecs & Rubik's Cube", icon: Brain },
    { id: "innovation", label: "Innovation", icon: Lightbulb },
    { id: "robotics", label: "Robotique", icon: Bot },
  ];

  const handleActivityToggle = (activityId: string) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activityId)
        ? prev.activities.filter((id) => id !== activityId)
        : [...prev.activities, activityId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      joinSchema.parse(formData);
      
      toast({
        title: "Inscription envoyée !",
        description: "Nous vous contacterons bientôt pour finaliser votre inscription.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        activities: [],
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
          <h1 className="text-5xl font-bold mb-6">Rejoignez-nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Devenez membre du Club Scientifique et Technologique et commencez votre aventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Pourquoi Nous Rejoindre ?</h2>
            <Card className="shadow-medium mb-8">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero shadow-medium">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                  Cotisation Annuelle
                </h3>
                <div className="text-4xl font-bold text-primary-foreground mb-2">
                  XXX DH/an
                </div>
                <p className="text-primary-foreground/90 text-sm">
                  Accès illimité à toutes les activités
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div>
            <Card className="shadow-strong">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Formulaire d'Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                      required
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+212 XXX-XXXXXX"
                      required
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block">Activités d'Intérêt *</Label>
                    <div className="space-y-3">
                      {activities.map((activity) => (
                        <div key={activity.id} className="flex items-center gap-3">
                          <Checkbox
                            id={activity.id}
                            checked={formData.activities.includes(activity.id)}
                            onCheckedChange={() => handleActivityToggle(activity.id)}
                          />
                          <Label
                            htmlFor={activity.id}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <activity.icon className="w-4 h-4" />
                            {activity.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optionnel)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Parlez-nous un peu de vous et de vos intérêts..."
                      rows={4}
                      maxLength={500}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {formData.message.length}/500 caractères
                    </p>
                  </div>

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Envoyer ma Candidature
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

export default Join;
