"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full md:mx-auto"></div>
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-12">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="w-full max-w-4xl text-center mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a passionate software developer currently pursuing my MCA at Amal Jyothi College of Engineering. 
              My journey started with a strong foundation in computer applications from SB College, and since then, 
              I have been dedicated to building impactful digital solutions.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With experience at Calibr as an Associate Software Developer and freelance projects like Upavan Villa, 
              I specialize in creating seamless, scalable, and beautifully designed web architectures using React, Next.js, and Node.js. 
              When I&apos;m not coding, I focus on exploring new web technologies and solving real-world problems.
            </p>

            <Link
              href="https://drive.google.com/file/d/1A30EaYn9mzJIlW0Y0NYFNLj6r1RKhxZA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
