import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Palette, Database, Cloud, Sparkles, ListChecks } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Laravel", "PHP", "REST API Development", "JWT Authentication", "MVC Architecture", "OOP", "Spring Boot (Basic)", "Java (Basic)", "RBAC"],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "React.js", "GSAP", "shadcn/ui", "Tailwind CSS"],
  },
  {
    title: "Databases & Services",
    icon: Database,
    skills: ["MySQL", "PostgreSQL (Basic)", "MongoDB (Basic)", "Firebase", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS (Basic)", "CI/CD Pipelines", "GitHub Actions (Basic)", "Docker (Basic)", "Git", "GitHub", "VS Code"],
  },
  {
    title: "AI & Developer Tools",
    icon: Sparkles,
    skills: ["OpenAI API", "Claude API", "Codex", "Kimi K2", "Postman", "Jira", "Envato"],
  },
  {
    title: "Practices",
    icon: ListChecks,
    skills: ["Agile/Scrum", "Clean Code", "TDD (Unit/Integration/E2E)", "System Design Basics", "API Design", "Performance Optimization", "PHPStan Static Analysis"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
