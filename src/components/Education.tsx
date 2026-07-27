import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc. (Hons) in Industrial Information Technology",
    institution: "Uva Wellassa University of Sri Lanka",
    period: "2021 – Present",
    status: "Expected 2026",
    icon: GraduationCap,
  },
  {
    degree: "Professional Certificate in Artificial Intelligence",
    institution: "Informatics Institute of Technology (IIT), Colombo",
    period: "2024",
    status: "Completed",
    icon: Award,
  },
];

const certifications = [
  { name: "Python Basic", issuer: "HackerRank", date: "Mar 2026" },
  { name: "Postman API Fundamentals Student Expert", issuer: "Postman", date: "Feb 2025" },
  { name: "Software Testing Foundations", issuer: "LinkedIn Learning", date: "Oct 2024" },
];

const languages = [
  { name: "Tamil", level: "Native" },
  { name: "Arabic", level: "Advanced" },
  { name: "Sinhala", level: "Advanced" },
  { name: "English", level: "Proficient" },
];

const aiCourses = [
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic" },
  { name: "Claude 101", issuer: "Anthropic" },
  { name: "Claude Code 101", issuer: "Anthropic" },
  { name: "Claude Platform 101", issuer: "Anthropic" },
  { name: "Building with Claude API", issuer: "Anthropic" },
  { name: "Introduction to MCP", issuer: "Anthropic" },
  { name: "MCP Advanced Topics", issuer: "Anthropic" },
  { name: "Claude Code in Action", issuer: "Anthropic" },
  { name: "Claude Cowork", issuer: "Anthropic" },
  { name: "Agent Skills & Subagents", issuer: "Anthropic" },
  { name: "Claude on Google Cloud", issuer: "Anthropic" },
  { name: "Claude with Amazon Bedrock", issuer: "Anthropic" },
  { name: "AI Fluency for Builders", issuer: "Anthropic", inProgress: true },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-[31px] top-16 w-0.5 h-full bg-primary/30 -z-10" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary"
                >
                  <edu.icon className="h-8 w-8 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <span className="px-4 py-1.5 text-sm bg-primary/20 text-primary rounded-full border border-primary/30">
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-2">
                    {edu.institution}
                  </p>
                  
                  <p className="text-primary font-semibold">
                    {edu.period}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Languages */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex justify-between gap-4 text-muted-foreground">
                  <span>
                    <span className="text-foreground font-medium">{cert.name}</span> — {cert.issuer}
                  </span>
                  <span className="text-primary whitespace-nowrap">{cert.date}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-effect rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Languages</h3>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between gap-4 text-muted-foreground">
                  <span className="text-foreground font-medium">{lang.name}</span>
                  <span className="text-primary">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Certifications & AI Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto glass-effect rounded-2xl p-6 mt-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">Certifications & AI Learning</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {aiCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-start justify-between gap-2 px-3 py-2.5 bg-secondary rounded-lg border border-primary/20 hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default"
              >
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-foreground leading-snug">
                    {course.name}
                  </span>
                  <span className="block text-xs text-muted-foreground mt-0.5">
                    {course.issuer}
                  </span>
                </span>

                {course.inProgress && (
                  <span className="flex-shrink-0 px-2 py-0.5 text-[11px] bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full border border-amber-500/30 whitespace-nowrap">
                    In Progress
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
