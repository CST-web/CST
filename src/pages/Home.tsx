import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Target, Users, Award, Brain, Bot } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import chessImage from "@/assets/chess-activity.jpg";
import tipeImage from "@/assets/tipe-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";
import ctaBackground from "@/assets/cta-bg.jpg";
const Home = () => {
  const activities = [{
    title: "Robotique",
    description: "Construisez et programmez des robots pour participer à des compétitions nationales.",
    icon: Bot,
    image: roboticsImage,
    color: "from-primary-glow to-cyan-400"
  }, {
    title: "Échecs & Rubik's Cube",
    description: "Développez votre stratégie et logique à travers des tournois et sessions d'entraînement.",
    icon: Brain,
    image: chessImage,
    color: "from-primary to-primary-glow"
  }, {
    title: "Prix du meilleur TIPE",
    description: "Participez à la compétition du meilleur TIPE et présentez vos travaux de recherche scientifique.",
    icon: Award,
    image: tipeImage,
    color: "from-accent to-orange-400"
  }];
  const stats = [{
    icon: Users,
    value: "150+",
    label: "Membres Actifs"
  }, {
    icon: Award,
    value: "25+",
    label: "Prix Remportés"
  }, {
    icon: Target,
    value: "50+",
    label: "Projets Réalisés"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Club activities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Club Scientifique et{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technologique
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Stimuler la créativité et l'innovation chez les jeunes esprits à travers la science, 
              la technologie et la compétition intellectuelle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/join">
                <Button variant="hero" size="lg" className="group">
                  Rejoindre le Club
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/activities">
                <Button variant="outline" size="lg">
                  Découvrir nos Activités
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nos Activités</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez nos trois domaines d'excellence et trouvez votre passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => <Card key={index} className="group overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60`} />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center shadow-medium">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <Link to="/activities">
                    <Button variant="ghost" className="group/btn p-0 h-auto">
                      En savoir plus
                      <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ctaBackground} 
            alt="Chess and Robotics" 
            className="w-full h-full object-cover object-[70%] sm:object-[75%] md:object-right" 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Prêt à Rejoindre l'Aventure ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Devenez membre du Club Scientifique et Technologique et participez à des 
            projets innovants, des compétitions passionnantes et bien plus encore.
          </p>
          <Link to="/join">
            <Button size="lg" className="bg-card text-foreground hover:bg-card/90 shadow-strong">
              S'inscrire Maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;