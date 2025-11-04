import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chessImage from "@/assets/chess-activity.jpg";
import innovationImage from "@/assets/innovation-activity.jpg";
import roboticsImage from "@/assets/robotics-activity.jpg";

const Gallery = () => {
  const albums = [
    {
      title: "Tournoi d'Échecs 2024",
      category: "Échecs",
      image: chessImage,
      date: "Mars 2024",
      photos: 45,
    },
    {
      title: "Hackathon Innovation",
      category: "Innovation",
      image: innovationImage,
      date: "Février 2024",
      photos: 62,
    },
    {
      title: "Compétition de Robotique",
      category: "Robotique",
      image: roboticsImage,
      date: "Janvier 2024",
      photos: 78,
    },
    {
      title: "Workshop Rubik's Cube",
      category: "Échecs",
      image: chessImage,
      date: "Décembre 2023",
      photos: 34,
    },
    {
      title: "Expo Projets Innovants",
      category: "Innovation",
      image: innovationImage,
      date: "Novembre 2023",
      photos: 56,
    },
    {
      title: "Formation Robotique Débutants",
      category: "Robotique",
      image: roboticsImage,
      date: "Octobre 2023",
      photos: 41,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Échecs":
        return "bg-primary";
      case "Innovation":
        return "bg-accent";
      case "Robotique":
        return "bg-primary-glow";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Notre Galerie</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revivez les moments forts de nos événements, compétitions et ateliers
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getCategoryColor(album.category)} text-white`}>
                    {album.category}
                  </Badge>
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {album.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>{album.date}</span>
                    <span>{album.photos} photos</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming Soon Message */}
        <Card className="mt-12 shadow-medium">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">Plus de contenu bientôt !</h3>
            <p className="text-muted-foreground">
              Nous ajoutons régulièrement de nouvelles photos et vidéos de nos activités. 
              Revenez prochainement pour découvrir plus de moments mémorables.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;
