import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import cstLogo from "@/assets/logo.jpeg";
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={cstLogo}
                alt="CST Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-lg">
                Club Scientifique et Technologique
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Stimuler la créativité et l'innovation chez les jeunes esprits
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to=""
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="activities"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Activités
                </Link>
              </li>
              <li>
                <Link
                  to="events"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-semibold mb-4">Nos Activités</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Robotique</li>
              <li>Échecs & Rubik's Cube</li>
              <li>Prix du meilleur TIPE</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>club.scientifique.tech@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+212 619-099651</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lycée Ibn Timiya - Salle de conférence</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/club.scientifique.tech?igsh=MW1oa2Zpa3pwYzBqag=="
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/club.scientifique.tech/"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/CST-web"
                className="w-8 h-8 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Club Scientifique et Technologique.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
