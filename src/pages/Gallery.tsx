import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

interface GalleryItem {
  _id: string;
  activity: "Échecs" | "Robotique" | "Prix du meilleur TIPE";
  title: string;
  date: string;
  images: string[];
  thumbnail: string;
}

const BASE_URL = "https://club-server-25gd.onrender.com";

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [albums, setAlbums] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/gallery`);
        if (!response.ok) {
          throw new Error('Failed to fetch gallery data');
        }
        const data = await response.json();
        setAlbums(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-lg text-muted-foreground">Chargement de la galerie...</p>
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
                Impossible de charger la galerie. Veuillez réessayer plus tard.
              </p>
              <p className="text-sm text-muted-foreground mt-2">{error}</p>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Notre Galerie</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revivez les moments forts de nos événements, compétitions et ateliers
          </p>
        </div>

        {/* Gallery Albums Grid */}
        {albums.length === 0 ? (
          <Card className="shadow-medium">
            <div className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Aucune photo disponible</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nous ajoutons régulièrement de nouvelles photos de nos activités. 
                Revenez prochainement pour découvrir plus de moments mémorables.
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album, index) => (
              <Card 
                key={album._id} 
                className="overflow-hidden cursor-pointer hover:shadow-large transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedAlbum(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={`${BASE_URL}/uploads/${album.thumbnail}`} 
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(album.activity)}>
                      {album.activity}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{formatDate(album.date)}</span>
                    <span>{album.images.length} photo{album.images.length > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={selectedAlbum !== null} onOpenChange={() => setSelectedAlbum(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedAlbum !== null && albums[selectedAlbum].title}
            </DialogTitle>
            <p className="text-muted-foreground">
              {selectedAlbum !== null && `${formatDate(albums[selectedAlbum].date)} • ${albums[selectedAlbum].images.length} photos`}
            </p>
          </DialogHeader>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {selectedAlbum !== null && albums[selectedAlbum].images.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                <img 
                  src={`${BASE_URL}/uploads/${img}`} 
                  alt={`${albums[selectedAlbum].title} - Photo ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Gallery;