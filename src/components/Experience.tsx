import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experience = [
  {
    role: "Associate Software Engineer",
    company: "Takitro Digital Agency – Colombo, Sri Lanka",
    period: "Jan 2026 – Present",
    points: [
      "Built and maintained production full-stack web applications using Laravel and React.js with JWT authentication, role-based access control, and RESTful APIs serving multiple live client businesses.",
      "Contributed to ERP and POS modules covering billing workflows, inventory tracking, and transaction management.",
      "Sole developer of the company's official website (takitro.com) – design, GSAP animations, performance optimization, and live deployment.",
      "Delivered two production client websites (adlernova.com, drtkmetabolichealth.com) with shadcn/ui, responsive design, and Core Web Vitals optimization.",
      "Collaborated in Agile sprints using Git branching strategies, pull requests, and peer code reviews.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "ITx247 Solutions (Pvt) Ltd – Colombo, Sri Lanka",
    period: "Aug 2025 – Jan 2026",
    points: [
      "Built a scalable POS and Inventory Management System (Laravel, MySQL, MVC) covering stock tracking, supplier management, billing, reporting, and full JWT authentication with audit logging.",
      "Developed ITx247 TicketMate – an AI-powered helpdesk integrating OpenAI API for ticket categorization and chatbot support; built full ticket lifecycle with role-based dashboards (Laravel, React.js, MySQL).",
      "Built the company website (WordPress) and contributed to database schema design, Postman API testing, debugging, and Git version control workflows.",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-8"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{job.role}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="px-4 py-1.5 text-sm bg-primary/20 text-primary rounded-full border border-primary/30 whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 pl-2">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
