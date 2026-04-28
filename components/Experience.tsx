"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Associate Software Developer",
      organization: "Calibr",
      url: "https://calibr.ai/",
      date: "June 2025 - February 2026",
      description: [
        "Contributing to frontend development using Next.js, Tailwind CSS, and TypeScript for responsive components.",
        "Collaborating with cross-functional teams including designers and backend developers.",
        "Implemented state management with React Hooks and optimized performance.",
        "Actively involved in debugging, code reviews, and version control using Github/Bitbucket."
      ]
    },
    {
      type: "education",
      title: "Master of Computer Application (MCA)",
      organization: "Amal Jyothi College of Engineering",
      url: "https://www.ajce.in/",
      date: "Sept 2023 - April 2025",
      description: ["CGPA: 9.0", "Autonomous institution located in Kottayam, Kerala."]
    },
    {
      type: "education",
      title: "Bachelor of Computer Application (BCA)",
      organization: "SB College of Management Studies",
      url: "https://sbcollege.edu.in/management/",
      date: "June 2020 - August 2023",
      description: ["CGPA: 7.9", "Bengaluru, Karnataka."]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
           className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
             >
               {/* Timeline Dot */}
               <div className="absolute -left-[2.1rem] md:-left-[2.4rem] top-1 w-16 h-16 bg-background rounded-full flex items-center justify-center border-4 border-muted p-1 z-10">
                 <div className="w-full h-full bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    {exp.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                 </div>
               </div>

               <div className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow border border-border">
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <a 
                        href={exp.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-lg text-primary font-medium hover:underline decoration-primary/50 underline-offset-4 transition-all"
                      >
                        {exp.organization}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.date}
                    </div>
                 </div>

                 <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                    {exp.description.map((item, i) => (
                       <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                 </ul>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
