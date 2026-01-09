import { Code2, Rocket, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Code2, value: '2+', label: 'Years Learning' },
  { icon: Rocket, value: '10+', label: 'Projects Built' },
  { icon: Users, value: '5+', label: 'Happy Clients' },
  { icon: Zap, value: '100%', label: 'Dedication' },
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
              Building clean, responsive, and user-friendly digital experiences.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Hi, I'm <span className="text-primary font-semibold">Naveed Bhatti</span>, a passionate web developer with a strong focus on creating clean, responsive, and user-friendly websites.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I work with modern web technologies and enjoy building professional websites, portfolios, and dynamic web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm always eager to learn new tools, improve my skills, and turn ideas into real digital products.
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
