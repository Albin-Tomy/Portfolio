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
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer | Backend-Focused Engineer
            </h3>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am a Full Stack Developer with a strong focus on backend engineering and scalable system design.
              Currently working as a Junior Software Engineer at OctaScaler Innovations, I specialize in building
              high-performance APIs using TypeScript and NestJS, along with handling large-scale data processing.
            </p>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I have hands-on experience designing real-world systems including POS platforms, hotel management systems,
              and food ordering workflows. I have worked with AWS services like S3 and SQS, optimized bulk data operations,
              and built robust REST APIs with complex business logic. Alongside backend development, I build modern frontend
              applications using React and Next.js.
            </p>

            <Link
              href="https://drive.google.com/file/d/1J7ZOZVKtHmDMTqvDf73EDU9PilXTe5U6/view?usp=sharing"
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
