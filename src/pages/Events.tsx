import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
const Events = () => {
  const upcomingEvents = [{
    title: "Tournoi d'Échecs Inter-Clubs",
    date: "15 Avril 2024",
    time: "14h00 - 18h00",
    location: "Salle A - Campus Principal",
    category: "Échecs",
    participants: "30/40",
    description: "Grande compétition d'échecs ouverte à tous les niveaux. Prix pour les trois premiers.",
    status: "Inscriptions ouvertes"
  }, {
    title: "Hackathon Innovation 48h",
    date: "20-22 Avril 2024",
    time: "Vendredi 18h - Dimanche 18h",
    location: "Espace Innovation",
    category: "Prix du meilleur TIPE",
    participants: "45/50",
    description: "Développez un projet innovant en 48 heures. Mentorat, pizza et prix garantis !",
    status: "Places limitées"
  }, {
    title: "Compétition Robotique Régionale",
    date: "5 Mai 2024",
    time: "09h00 - 17h00",
    location: "Centre des Congrès",
    category: "Robotique",
    participants: "12/15 équipes",
    description: "Qualifier pour la compétition nationale. Défi: Robot autonome de navigation.",
    status: "Inscriptions ouvertes"
  }, {
    title: "Atelier Résolution Rubik's Cube",
    date: "25 Avril 2024",
    time: "16h00 - 18h00",
    location: "Salle B - Campus Principal",
    category: "Échecs",
    participants: "18/25",
    description: "Apprenez les techniques de speed-solving avec nos champions du club.",
    status: "Inscriptions ouvertes"
  }];
  const pastEvents = [{
    title: "Workshop Arduino pour Débutants",
    date: "10 Mars 2024",
    category: "Robotique",
    participants: "22 participants"
  }, {
    title: "Expo Projets Innovation",
    date: "5 Mars 2024",
    category: "Prix du meilleur TIPE",
    participants: "15 projets présentés"
  }, {
    title: "Tournoi Blitz d'Échecs",
    date: "28 Février 2024",
    category: "Échecs",
    participants: "35 participants"
  }];
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Échecs":
        return "bg-primary";
      case "Prix du meilleur TIPE":
        return "bg-accent";
      case "Robotique":
        return "bg-primary-glow";
      default:
        return "bg-primary";
    }
  };
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nos Événements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos prochains événements et inscrivez-vous pour participer
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Événements à Venir</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => <Card key={index} className="hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                
              </Card>)}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Événements Passés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => {})}
          </div>
        </div>
      </div>
    </div>;
};
export default Events;