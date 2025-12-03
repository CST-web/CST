import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Award,
  Bot,
  Trophy,
  Users,
  Calendar,
  Sparkles,
  Handshake,
} from "lucide-react";
import chessImage from "@/assets/chess-activity.jpg";
import tipeImage from "@/assets/tipe-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";
import ctaBackground from "@/assets/activities-cta-bg.jpg";
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
      partners: "l'association ATDTech",
      schedule: "coming soon",
      members: "Entre 30 et 40 élèves",
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
      partners: "coming soon",
      schedule: "coming soon",
      members: "coming soon",
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
      schedule: "coming soon",
      members: "coming soon",
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
                    {activity.title !== "Prix du meilleur TIPE" && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Handshake className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold">Partenaires</h3>
                        </div>
                        <p className="text-muted-foreground text-sm italic">
                          {activity.partners}
                        </p>
                      </div>
                    )}

                    {/* Schedule - Hidden for Prix du meilleur TIPE */}
                    {activity.title !== "Prix du meilleur TIPE" && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">Horaires:</span>
                        <span className="text-muted-foreground italic">
                          {activity.schedule}
                        </span>
                      </div>
                    )}

                    {/* Members - Hidden for Prix du meilleur TIPE */}
                    {activity.title !== "Prix du meilleur TIPE" && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-medium">Membres:</span>
                        <span className="text-muted-foreground italic">
                          {activity.members}
                        </span>
                      </div>
                    )}

                    {activity.title === "Prix du meilleur TIPE" && (
                      <p className="text-sm italic text-muted-foreground mt-4">
                        <strong>NB :</strong> Activité réservée uniquement aux
                        étudiants de deuxième année.
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
              <a href="/join">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-strong transition-all duration-300 hover:scale-105">
                  Nous Rejoindre
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Activities;
