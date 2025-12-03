import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Menu, X, User, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import cstLogo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { token, logout } = useAuth();

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À propos" },
    { path: "/activities", label: "Activités" },
    { path: "/gallery", label: "Galerie" },
    { path: "/events", label: "Événements" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="" className="flex items-center space-x-3 group">
            <img
              src={cstLogo}
              alt="CST Logo"
              className="w-14 h-14 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="font-bold text-lg hidden md:block transition-colors group-hover:text-primary">
              Club Scientifique et Technologique
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {token ? (
              <Button
                variant="ghost"
                size="sm"
                className="ml-4"
                onClick={logout}
              >
                <LogOutIcon className="w-4 h-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="join">
                <Button variant="hero" size="sm" className="ml-4">
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {token ? (
              <Button variant="ghost" className="w-full mt-2" onClick={logout}>
                <LogOutIcon className="w-4 h-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="join" onClick={() => setIsOpen(false)}>
                <Button variant="hero" className="w-full mt-2">
                  <User className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
