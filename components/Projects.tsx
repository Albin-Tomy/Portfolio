"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Medicloud",
      description: "A comprehensive platform connecting patients to healthcare providers. Features online consultation, medicine delivery, role-based dashboards, OTP authentication, and an AI chatbot service utilizing the OpenAI API.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      techStack: ["React.js", "Node.js", "MongoDB", "Express"],
      liveLink: "https://mediclouds.onrender.com/",
      githubLink: "https://github.com/midhundominic/eCare/tree/development",
    },
    {
      title: "Upavan Villa",
      description: "A full-stack booking platform for a villa with seamless frontend-backend integration. Features real-time room availability, secure online booking, email notifications, and a comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      techStack: ["Next.js", "Tailwind CSS", "Supabase"],
      liveLink: "https://upavanvilla.com/",
      githubLink: "https://github.com/midhundominic/upavan_villa",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto"></div>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl md:mx-auto">
            Showcasing some of my best work linking robust backends with beautiful user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden glass border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10 opacity-60" />
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-10 bg-background/80 backdrop-blur-md rounded-t-3xl border-t border-white/5">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
