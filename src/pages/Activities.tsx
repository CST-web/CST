import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Brain,
  Award,
  Bot,
  Trophy,
  Calendar,
  Sparkles,
  Handshake,
  Lightbulb,
} from "lucide-react";
import chessImage from "@/assets/chess-activity.jpg";
import tipeImage from "@/assets/tipe-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";
import ctaBackground from "@/assets/activities-cta-bg.jpg";
import innovationImage from "@/assets/innovation-activity.jpg";

const Activities = () => {
  const { token } = useAuth();
  const activities = [
    {
      title: "Robotique",
      image: roboticsImage,
      icon: Bot,
      color: "from-primary-glow to-cyan-400",
      description:
        "Construisez, programmez et pilotez des robots pour participer à des compétitions nationales et internationales.",
      features: [
        "Ateliers de formations",
        "Ateliers de suivre",
        "Des compétition locale, nationale ou même internationale",
      ],
      precious: "",
      partners: "ATDTech (Ouikassi)",
      duration: "De Décembre à Mars",
    },
    {
      title: "Échecs & Rubik's Cube",
      image: chessImage,
      icon: Brain,
      color: "from-primary to-primary-glow",
      description:
        "Développez vos capacités de réflexion stratégique et de résolution de problèmes à travers les échecs et le Rubik's cube.",
      features: [
        "Ateliers de formations",
        "Ateliers de suivre",
        "Ateliers pour jouer",
        "Des compétition locale, nationale ou même internationale",
      ],
      precious: "",
      partners: "La ligue régional Marrakech Safi des échecs",
      duration: "De Décembre à Avril",
    },
    {
      title: "Prix du meilleur TIPE",
      image: tipeImage,
      icon: Award,
      color: "from-accent to-orange-400",
      description:
        "Participez à la compétition du meilleur TIPE et présentez vos travaux de recherche scientifique devant un jury d'experts.",
      features: ["Lancement du thème", "Encadrement & Motivation"],
      precious: "",
      partners: "coming soon",
      duration: "coming soon",
    },
    {
      title: "Ateliers d'innovation",
      image: innovationImage,
      icon: Lightbulb,
      color: "from-purple-500 to-pink-400",
      description:
        "Stimulez votre créativité et développez des projets innovants en équipe, en explorant de nouvelles technologies et en transformant vos idées en prototypes concrets.",
      features: [
        "Ateliers structurés en créativité, design thinking et résolution de problèmes",
        "Mini-projets réalisés en groupes",
        "Accompagnement par des experts",
        "Présentations finales des projets",
      ],
      precious: "",
      partners: "Experts et enseignants du LIT",
      duration: "De Décembre à Avril",
    },
  ];
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nos Activités</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos trois domaines d'excellence et choisissez celui qui
            vous passionne le plus, ou participez à tous !
          </p>
        </div>

        {/* Activities */}
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div
                  className={`relative h-64 lg:h-auto ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-40`}
                  />
                </div>

                {/* Content */}
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center shadow-medium flex-shrink-0`}
                    >
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">
                        {activity.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
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
                        {activity.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Precious */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">
                          Certificats et prix précieux
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm italic">
                        {activity.precious}
                      </p>
                    </div>

                    {/* Partners - Hidden for Prix du meilleur TIPE */}

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Handshake className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">Partenaires</h3>
                      </div>
                      <p className="text-muted-foreground text-sm italic">
                        {activity.partners}
                      </p>
                    </div>

                    {/* Duration - Hidden for Prix du meilleur TIPE */}

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-medium">Durée:</span>
                      <span className="text-muted-foreground italic">
                        {activity.duration}
                      </span>
                    </div>

                    {activity.title === "Prix du meilleur TIPE" && (
                      <p className="text-sm italic text-muted-foreground mt-4">
                        <strong>NB :</strong> Activité réservée uniquement aux
                        étudiants scientifique de deuxième année.
                      </p>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {!token && (
          <div className="mt-16 relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={ctaBackground}
                alt="Chess and Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/60" />
            </div>
            <div className="relative text-center p-12 bg-[#282222]/[0.39]">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Prêt à Commencer ?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Rejoignez-nous et découvrez toutes nos activités passionnantes
              </p>
              <Link to="/join">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-strong transition-all duration-300 hover:scale-105">
                  Nous Rejoindre
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Activities;
