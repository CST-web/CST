import { Card, CardContent } from "@/components/ui/card";
import { Brain, Award, Bot, Trophy, Users, Calendar } from "lucide-react";
import chessImage from "@/assets/chess-activity.jpg";
import tipeImage from "@/assets/tipe-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";
const Activities = () => {
  const activities = [{
    title: "Robotique",
    image: roboticsImage,
    icon: Bot,
    color: "from-primary-glow to-cyan-400",
    description: "Construisez, programmez et pilotez des robots pour participer à des compétitions nationales et internationales.",
    features: ["Programmation Arduino et Raspberry Pi", "Construction de robots pour compétitions", "Ateliers d'électronique et mécanique", "Préparation aux compétitions FIRST et VEX"],
    schedule: "Lundis et samedis, 15h-18h"
  }, {
    title: "Échecs & Rubik's Cube",
    image: chessImage,
    icon: Brain,
    color: "from-primary to-primary-glow",
    description: "Développez vos capacités de réflexion stratégique et de résolution de problèmes à travers les échecs et le Rubik's cube.",
    features: ["Tournois d'échecs mensuels", "Sessions d'entraînement avec des maîtres", "Compétitions de Rubik's cube speed-solving", "Ateliers de stratégie et tactique"],
    schedule: "Tous les mardis et jeudis, 17h-19h"
  }, {
    title: "Prix du meilleur TIPE",
    image: tipeImage,
    icon: Award,
    color: "from-accent to-orange-400",
    description: "Participez à la compétition du meilleur TIPE et présentez vos travaux de recherche scientifique devant un jury d'experts.",
    features: ["Accompagnement dans la réalisation du TIPE", "Sessions de préparation à la présentation orale", "Accès aux équipements de recherche", "Récompenses et reconnaissances académiques"],
    schedule: "Mercredis et vendredis, 16h-20h"
  }];
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nos Activités</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos trois domaines d'excellence et choisissez celui qui vous passionne le plus, 
            ou participez à tous !
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-16">
          {activities.map((activity, index) => <Card key={index} className="overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-40`} />
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-medium flex-shrink-0`}>
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{activity.title}</h2>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Ce que nous offrons</h3>
                      </div>
                      <ul className="space-y-2">
                        {activity.features.map((feature, idx) => {})}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">Horaires:</span>
                      
                    </div>

                    {/* Members */}
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">
                        Plus de {30 + index * 20} membres actifs
                      </span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>)}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero shadow-strong">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Prêt à Commencer ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Rejoignez-nous et découvrez toutes nos activités passionnantes
              </p>
              <a href="/join">
                <button className="px-8 py-3 bg-card text-foreground rounded-lg font-semibold hover:shadow-strong transition-all duration-300 hover:scale-105">
                  Nous Rejoindre
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Activities;