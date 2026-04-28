import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-8 mt-20">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground font-medium">
            &copy; {currentYear} Midhun Dominic. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link href="https://github.com/midhundominic" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/midhundominic/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:midhundominic2002@gmail.com" className="hover:text-foreground transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
