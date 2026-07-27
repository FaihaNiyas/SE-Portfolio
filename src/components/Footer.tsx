import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/salamath-faiha-987767305/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/FaihaNiyas", label: "GitHub" },
    { icon: Mail, href: "mailto:salamathfaiha69@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass-effect rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <social.icon className="h-5 w-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-center flex items-center gap-2"
          >
            © {new Date().getFullYear()} M.N. Salamath Faiha. Built with{" "}
            <Heart className="h-4 w-4 text-primary animate-glow-pulse" /> and passion
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
