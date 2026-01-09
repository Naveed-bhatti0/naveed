import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-in-up opacity-0">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium mb-6 border border-border/50">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 delay-100">
            <span className="text-foreground">Naveed </span>
            <span className="gradient-text">Bhatti</span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 delay-200">
            <span className="text-primary font-semibold">Web Developer</span> | Frontend & WordPress
          </p>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 delay-300">
            Turning ideas into clean and user-friendly web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 animate-bounce" size={20} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
