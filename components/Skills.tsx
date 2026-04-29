"use client";

import { motion, Variants } from "framer-motion";
import {
  Atom,
  Layers,
  Code2,
  Wind,
  Server,
  Network,
  Database,
  HardDrive,
  Container,
  Cloud,
  GitBranch
} from "lucide-react";

export default function Skills() {
  const skills = [
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "JavaScript", icon: Code2, category: "Language" },

  { name: "React", icon: Atom, category: "Frontend" },
  // { name: "Next.js", icon: Layers, category: "Frontend" },
  // { name: "Tailwind CSS", icon: Wind, category: "Frontend" },

  { name: "NestJS", icon: Server, category: "Backend" },
  // { name: "Node.js", icon: Server, category: "Backend" },
  // { name: "Express", icon: Network, category: "Backend" },
  { name: "Django", icon: Server, category: "Backend" },

  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "PostgreSQL", icon: HardDrive, category: "Database" },
  { name: "ClickHouse", icon: Database, category: "Database" },
  { name: "MySQL", icon: Database, category: "Database" },

  { name: "AWS (S3, SQS)", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "Git", icon: GitBranch, category: "Tools" },
];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto"></div>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl md:mx-auto">
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="p-6 rounded-2xl glass flex flex-col items-center justify-center gap-4 text-center group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 border border-border hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <skill.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
