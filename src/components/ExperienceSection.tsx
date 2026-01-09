import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    type: 'work',
    title: 'Senior Web Developer',
    organization: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading front-end development for enterprise clients, building scalable React applications and mentoring junior developers.',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Creative Agency',
    period: '2020 - 2022',
    description: 'Developed custom WordPress themes and plugins, built e-commerce solutions, and collaborated with design teams.',
  },
  {
    type: 'work',
    title: 'Junior Web Developer',
    organization: 'StartUp Hub',
    period: '2019 - 2020',
    description: 'Started my career building responsive websites, learning best practices, and working with modern web technologies.',
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science',
    organization: 'University of Technology',
    period: '2015 - 2019',
    description: 'Focused on software engineering, web development, and computer science fundamentals.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              My Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background that shaped my career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experience.map((item, index) => (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary glow md:-translate-x-1/2 -translate-x-1/2 mt-6" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group card-glow">
                      {/* Icon & Type */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          {item.type === 'work' ? (
                            <Briefcase className="text-primary" size={20} />
                          ) : (
                            <GraduationCap className="text-primary" size={20} />
                          )}
                        </div>
                        <span className="text-primary text-sm font-medium">
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-3">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
