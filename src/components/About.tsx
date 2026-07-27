import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Linkedin, Github, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/salamath-faiha-987767305/", label: "LinkedIn", color: "text-[#0077B5]" },
    { icon: Github, href: "https://github.com/FaihaNiyas", label: "GitHub", color: "text-foreground" },
    { icon: Mail, href: "mailto:salamathfaiha69@gmail.com", label: "Email", color: "text-primary" },
    { icon: Globe, href: "https://takitro.com", label: "Website", color: "text-primary" },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
              <motion.img
                src={profileImage}
                alt="Salamath Faiha"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover border-2 border-primary/30 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Full-Stack Software Engineer with production experience building ERP/POS platforms,
                AI-integrated systems, and client-facing web applications using Laravel, PHP, JavaScript,
                Firebase, and Supabase. Delivered multiple real-world projects from concept to live
                deployment.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently working full-time as an Associate Software Engineer at Takitro Digital Agency
                while completing a BSc in Industrial Information Technology at Uva Wellassa University.
                Integrates OpenAI, Claude, and Codex APIs into production workflows and collaborates in
                Agile sprints across live client projects.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-effect rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <social.icon className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
