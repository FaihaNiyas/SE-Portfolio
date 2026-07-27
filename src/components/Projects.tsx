import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Solo Shirt – ERP & CRM Management System",
    description: "Sole developer of a production-grade API-first modular monolith ERP covering orders, production, inventory, delivery, finance, and CRM with domain-driven modules and zero cross-module database joins. Includes append-only audit tables, DB triggers, CSP/HSTS headers, a CI/CD pipeline (PHPStan level 6, Pest/pcov with 100% coverage on core modules), zero-downtime deployments, and Sentry observability.",
    tech: ["Laravel 11", "PHP 8.3", "MySQL", "REST API"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "#",
    live: "https://erp.soloshirts.in",
  },
  {
    title: "Takitro Digital Agency – Company Website",
    description: "Sole developer of Takitro's official website, including GSAP animations, performance optimization, and live deployment.",
    tech: ["PHP", "JavaScript", "GSAP", "shadcn/ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
    github: "#",
    live: "https://takitro.com",
  },
  {
    title: "Adler Nova – Client Website",
    description: "Production client website with shadcn/ui components, responsive design, and Core Web Vitals optimization.",
    tech: ["PHP", "JavaScript", "GSAP", "shadcn/ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    github: "#",
    live: "https://adlernova.com",
  },
  {
    title: "Dr. TK Metabolic Health – Client Website",
    description: "Production client website with shadcn/ui components, responsive design, and Core Web Vitals optimization.",
    tech: ["PHP", "JavaScript", "GSAP", "shadcn/ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    github: "#",
    live: "https://drtkmetabolichealth.com",
  },
  {
    title: "ITx247 TicketMate – AI Helpdesk System",
    description: "AI-powered helpdesk integrating the OpenAI API for ticket categorization and chatbot support, with a full ticket lifecycle and role-based dashboards.",
    tech: ["Laravel", "React.js", "MySQL", "OpenAI API"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    github: "#",
    live: "#",
  },
  {
    title: "POS & Inventory Management System",
    description: "Scalable POS and inventory system covering stock tracking, supplier management, billing, reporting, and full JWT authentication with audit logging.",
    tech: ["Laravel", "MySQL", "MVC"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    github: "#",
    live: "#",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.live !== "#" && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
