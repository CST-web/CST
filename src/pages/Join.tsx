import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Lock, Phone, UserPlus, LogIn } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const signupSchema = z.object({
  fullName: z.string().trim().min(2, "Le nom complet doit contenir au moins 2 caractères").max(100),
  codeMassar: z.string().trim().min(1, "Le code massar est requis").max(50),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").max(72)
});
const signinSchema = z.object({
  fullName: z.string().trim().min(2, "Le nom complet est requis").max(100),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères").max(72)
});
const Join = () => {
  const {
    toast
  } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    fullName: "",
    codeMassar: "",
    email: "",
    phone: "",
    password: ""
  });
  const [signinData, setSigninData] = useState({
    fullName: "",
    password: ""
  });
  const benefits = ["Accès à tous les ateliers et équipements du club", "Participation aux compétitions nationales et internationales", "Mentorat par des membres expérimentés", "Networking avec d'autres passionnés", "Certificats de participation et de réussite", "Accès prioritaire aux événements spéciaux"];
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      signupSchema.parse(signupData);

      // TODO: Implement signup logic with Supabase
      toast({
        title: "Inscription envoyée !",
        description: "Nous vous contacterons bientôt pour finaliser votre inscription."
      });
      setSignupData({
        fullName: "",
        codeMassar: "",
        email: "",
        phone: "",
        password: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      signinSchema.parse(signinData);

      // TODO: Implement login logic with Supabase
      toast({
        title: "Connexion réussie !",
        description: "Bienvenue au club !"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen py-12">
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
                  {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero shadow-medium">
              <CardContent className="pt-6 text-center bg-[#bc77d0]">
                <h3 className="text-2xl font-bold text-primary-foreground mb-3">Cotisation Par An</h3>
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
                <h2 className="text-2xl font-bold mb-6 text-center">Rejoignez le Club</h2>
                <Tabs defaultValue="signup" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Inscription
                    </TabsTrigger>
                    <TabsTrigger value="signin">
                      <LogIn className="w-4 h-4 mr-2" />
                      Connexion
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-fullname">Nom Complet *</Label>
                        <Input id="signup-fullname" type="text" placeholder="Nom Complet" value={signupData.fullName} onChange={e => setSignupData({
                        ...signupData,
                        fullName: e.target.value
                      })} required maxLength={100} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-code-massar">Code Massar *</Label>
                        <Input id="signup-code-massar" type="text" placeholder="Code Massar" value={signupData.codeMassar} onChange={e => setSignupData({
                        ...signupData,
                        codeMassar: e.target.value
                      })} required maxLength={50} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email *</Label>
                        <Input id="signup-email" type="email" placeholder="exemple@email.com" value={signupData.email} onChange={e => setSignupData({
                        ...signupData,
                        email: e.target.value
                      })} required maxLength={255} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-phone">Téléphone *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="signup-phone" type="tel" placeholder="+212 XXX-XXXXXX" value={signupData.phone} onChange={e => setSignupData({
                          ...signupData,
                          phone: e.target.value
                        })} className="pl-10" required maxLength={20} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Mot de passe *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="signup-password" type="password" placeholder="••••••••" value={signupData.password} onChange={e => setSignupData({
                          ...signupData,
                          password: e.target.value
                        })} className="pl-10" required minLength={6} maxLength={72} />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Minimum 6 caractères
                        </p>
                      </div>
                      <Button type="submit" variant="hero" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? "Inscription..." : "S'inscrire"}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="signin">
                    <form onSubmit={handleSignIn} className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-fullname">Nom Complet *</Label>
                        <Input id="signin-fullname" type="text" placeholder="Nom Complet" value={signinData.fullName} onChange={e => setSigninData({
                        ...signinData,
                        fullName: e.target.value
                      })} required maxLength={100} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password">Mot de passe *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="signin-password" type="password" placeholder="••••••••" value={signinData.password} onChange={e => setSigninData({
                          ...signinData,
                          password: e.target.value
                        })} className="pl-10" required minLength={6} maxLength={72} />
                        </div>
                      </div>
                      <Button type="submit" variant="hero" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? "Connexion..." : "Se connecter"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};
export default Join;