import { Code2, Rocket, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Code2, value: '5+', label: 'Years Experience' },
  { icon: Rocket, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '30+', label: 'Happy Clients' },
  { icon: Zap, value: '100%', label: 'Client Satisfaction' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Passionate About <span className="gradient-text">Web Development</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a creative developer who loves turning complex problems into simple, 
              beautiful, and intuitive designs.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate web developer with over 5 years of experience creating 
                modern, responsive, and user-friendly websites. My journey started with 
                simple HTML pages, and now I build complex web applications using the 
                latest technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in front-end development with React, but I'm also comfortable 
                working with back-end technologies like PHP and WordPress. I believe in 
                writing clean, maintainable code and creating seamless user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical writing and mentoring.
              </p>

              {/* Highlight box */}
              <div className="p-6 rounded-xl bg-secondary/50 border border-border/50 gradient-border">
                <p className="text-foreground font-medium">
                  "I believe that great design is not just about how things look, 
                  but how they work."
                </p>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group card-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
