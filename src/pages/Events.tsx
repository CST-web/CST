import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface Event {
  _id: string;
  activity:
    | "Échecs"
    | "Robotique"
    | "Prix du meilleur TIPE"
    | "Ateliers d'innovation";
  title: string;
  description: string;
  date: string;
  location: string;
  memberLimit: number;
  members: string[];
}

const BASE_URL = "https://club-server-25gd.onrender.com";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token, member } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/events`);
        if (!response.ok) {
          throw new Error("Failed to fetch events data");
        }
        const data = await response.json();
        setEvents(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const joinEvent = async (eventId: string) => {
    try {
      const response = await fetch(`${BASE_URL}/events/join/${eventId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Échec de l'inscription à l'événement",
          description: data.message,
          variant: "destructive",
        });
        return;
      }
      setEvents((prev) =>
        prev.map((event) =>
          event._id === eventId ? { ...event, ...data.event } : event
        )
      );
      toast({
        title: "Inscription réussie à l'événement",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Erreur réseau",
        description: "Impossible de contacter le serveur.",
        variant: "destructive",
      });
    }
  };

  const leaveEvent = async (eventId: string) => {
    try {
      const response = await fetch(`${BASE_URL}/events/leave/${eventId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Échec du désinscription de l'événement",
          description: data.message,
          variant: "destructive",
        });
        return;
      }
      setEvents((prev) =>
        prev.map((event) =>
          event._id === eventId ? { ...event, ...data.event } : event
        )
      );
      toast({
        title: "Désinscription réussie de l'événement",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Erreur réseau",
        description: "Impossible de contacter le serveur.",
        variant: "destructive",
      });
    }
  };

  const renderMembershipButton = (event: Event) => {
    const isMember = member ? event.members.includes(member._id) : false;
    const isFull = event.members.length >= event.memberLimit;

    const buttonText = isMember
      ? "Se désinscrire"
      : isFull
      ? "Complet"
      : "S'inscrire";

    const handleClick = () => {
      if (!member) {
        navigate("/join", { replace: true });
      }
      if (isMember) return leaveEvent(event._id);
      if (!isFull) return joinEvent(event._id);
    };

    return (
      <Button
        disabled={isFull && !isMember}
        className={`w-full ${
          isMember ? "bg-destructive hover:bg-red-400" : ""
        }`}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Échecs":
        return "bg-primary";
      case "Prix du meilleur TIPE":
        return "bg-accent";
      case "Robotique":
        return "bg-primary-glow";
      case "Ateliers d'innovation":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isUpcoming = (dateString: string) => {
    return dateString ? new Date(dateString) >= new Date() : true;
  };

  const upcomingEvents = events.filter((event) => isUpcoming(event.date));
  const pastEvents = events.filter((event) => !isUpcoming(event.date));

  if (loading) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Nos Événements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez nos prochains événements et inscrivez-vous pour
              participer
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Événements à Venir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-8 bg-muted rounded animate-pulse flex-1 mr-4" />
                      <div className="h-6 w-20 bg-muted rounded animate-pulse" />
                    </div>
                    <div className="h-16 bg-muted rounded animate-pulse mb-6" />
                    <div className="space-y-3 mb-6">
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                      <div className="h-4 bg-muted rounded animate-pulse" />
                    </div>
                    <div className="h-10 bg-muted rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <Card className="shadow-medium">
            <div className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-red-500">Erreur</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Impossible de charger les événements. Veuillez réessayer plus
                tard.
              </p>
              <p className="text-sm text-muted-foreground mt-2">{error}</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Nos Événements</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos prochains événements et inscrivez-vous pour participer
          </p>
        </div>

        {/* No Events Message */}
        {events.length === 0 ? (
          <Card className="shadow-medium">
            <div className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">
                Aucun événement disponible
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous préparons une liste complète d'événements passionnants.
                Revenez prochainement pour découvrir nos prochaines activités et
                compétitions.
              </p>
            </div>
          </Card>
        ) : (
          <>
            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Événements à Venir</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card
                      key={event._id}
                      className="hover:shadow-large transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold flex-1">
                            {event.title}
                          </h3>
                          <Badge className={getCategoryColor(event.activity)}>
                            {event.activity}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {event.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>
                              {event.date
                                ? formatDate(event.date)
                                : "Événement en cours"}
                            </span>
                          </div>
                          {event.date && (
                            <div className="flex items-center gap-3 text-sm">
                              <Clock className="w-4 h-4 text-primary" />
                              <span>{formatTime(event.date)}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="w-4 h-4 text-primary" />
                            <span>
                              {event.members.length}/{event.memberLimit}{" "}
                              participants
                            </span>
                          </div>
                        </div>

                        {/* Join/Leave Event Button */}
                        {renderMembershipButton(event)}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-8">Événements Passés</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <Card
                      key={event._id}
                      className="hover:shadow-medium transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <Badge
                          className={`${getCategoryColor(event.activity)} mb-3`}
                        >
                          {event.activity}
                        </Badge>
                        <h3 className="text-lg font-bold mb-2">
                          {event.title}
                        </h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3" />
                            <span>{event.members.length} participants</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default Events;
