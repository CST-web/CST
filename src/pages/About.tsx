import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Target, Eye, Heart, Users, Linkedin,Instagram } from "lucide-react";
import presidentImage from "@/assets/president-new.png";
const About = () => {
  const values = [{
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet et compétition."
  }, {
    icon: Heart,
    title: "Passion",
    description: "La passion pour la science et la technologie nous anime."
  }, {
    icon: Users,
    title: "Collaboration",
    description: "L'esprit d'équipe et le partage de connaissances sont essentiels."
  }, {
    icon: Eye,
    title: "Innovation",
    description: "Nous encourageons la créativité et la pensée innovante."
  }];
  return <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">À Propos de Nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le Club Scientifique et Technologique est une communauté dynamique dédiée 
            à l'épanouissement des talents scientifiques et techniques des jeunes.
          </p>
        </div>

        {/* Profile Section */}
        <Card className="mb-16 shadow-strong overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 ring-4 ring-primary/20">
                  <AvatarImage src={presidentImage} alt="Président du Club" />
                  <AvatarFallback className="text-2xl">IF</AvatarFallback>
                </Avatar>
                <div className="flex gap-3">
                  <a href="https://www.linkedin.com/in/ihabe-farahat-sherif/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Ihabe Farahat Sherif – Président du Club Scientifique et Technologique.</h2>
                <p className="text-primary font-semibold mb-4">Étudiant en filière ECT au CPGE Ibn Taymiya</p>
                <p className="text-muted-foreground leading-relaxed">Ihabe Farahat Sherif allie compétences techniques, esprit d'innovation et sens du leadership. Certifié par des institutions internationales telles que IBM, LinkedIn, Project Management Institute et Cisco ..., il s'engage à promouvoir l'excellence, la collaboration et la gestion efficace de projets au sein du club. En tant que président, il œuvre à créer un environnement où chaque étudiant peut proposer, expérimenter et agir, tout en développant ses compétences personnelles et professionnelles. Son objectif : faire du club un espace d'apprentissage dynamique, où rigueur académique et créativité se rencontrent pour inspirer la prochaine génération de leaders.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium hover:shadow-strong transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Développer les compétences scientifiques et technologiques des jeunes à travers 
                des activités pratiques, des compétitions stimulantes et des projets innovants. 
                Nous créons un environnement propice à l'apprentissage, à la créativité et à 
                l'excellence académique.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium hover:shadow-strong transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le club scientifique de référence en formant la prochaine génération 
                d'innovateurs, de penseurs critiques et de leaders technologiques. Nous aspirons 
                à créer un impact durable sur nos membres et la communauté scientifique.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* History */}
        <Card className="shadow-medium">
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Le Club Scientifique et Technologique du CPGE Ibn Timiya est né d'une idée simple :
                créer un espace où les étudiants apprennent autrement.
              </p>
              <p className="leading-relaxed">
                Fondé et animé par des étudiants passionnés, le club est un lieu d'échange, de créativité et de collaboration, où chaque membre peut partager ses compétences, développer ses idées et participer à des projets concrets.
              </p>
              <p className="leading-relaxed">
                Face à la charge d'études exigeante des classes préparatoires, nous avons voulu offrir un souffle différent, un espace qui valorise l'innovation, le plaisir d'apprendre et l'esprit d'équipe.
              </p>
              <p className="leading-relaxed">
                Nos activités sont conçues pour stimuler la curiosité, la logique et la créativité.
                Ici, chacun peut agir, proposer et créer, sans hiérarchie, dans une dynamique collective au service de la communauté étudiante du CPGE Ibn Timiya.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default About;