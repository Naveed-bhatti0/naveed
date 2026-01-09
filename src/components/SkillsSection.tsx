const skills = [
  { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500' },
  { name: 'CSS', level: 90, color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-500' },
  { name: 'PHP', level: 75, color: 'from-indigo-500 to-purple-500' },
  { name: 'WordPress', level: 80, color: 'from-blue-600 to-blue-700' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Technologies I <span className="gradient-text">Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm proficient in a variety of technologies and always eager to learn more.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className="text-primary font-mono font-medium">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Other Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MySQL', 'REST APIs', 'Figma', 'VS Code'].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm font-medium border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
