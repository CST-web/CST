import { Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import socialBg from "@/assets/social-media-bg.jpg";
const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    link: "https://www.instagram.com/club.scientifique.tech",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/company/club.scientifique.tech/",
  },
];

export default function FollowUs() {
  return (
    <Card className="relative overflow-hidden shadow-medium">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${socialBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60" />
      <CardContent className="relative pt-6 flex flex-col items-center text-center">
        <h3 className="font-semibold text-white mb-4">Suivez-nous</h3>
        <div className="flex gap-3 justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
