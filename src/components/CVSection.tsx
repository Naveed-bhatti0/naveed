import { Button } from '@/components/ui/button';
import { Download, Printer, GraduationCap, Briefcase, Code, Folder } from 'lucide-react';

const cvData = {
  name: 'Naveed Bhatti',
  role: 'Web Developer | Frontend & WordPress',
  email: 'naveedbhatti@email.com',
  summary: 'Passionate web developer focused on creating responsive, modern, and user-friendly websites. Experienced in frontend development, WordPress customization, and building professional digital solutions.',
  education: [
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'First-year University Student',
      period: 'Present',
    },
  ],
  skills: {
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'jQuery'],
    backend: ['PHP', 'MySQL'],
    cms: ['WordPress', 'Elementor', 'Custom Themes', 'Basic Plugins'],
    learning: ['React JS'],
  },
  experience: [
    {
      title: 'Frontend & WordPress Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Developing responsive websites, customizing WordPress themes, and building clean user interfaces.',
    },
    {
      title: 'Theme Customization',
      company: 'WordPress Projects',
      period: '2023 - Present',
      description: 'Customizing WordPress themes for clients, creating responsive layouts, and optimizing websites.',
    },
  ],
  projects: [
    { name: 'Portfolio Website', tech: 'HTML, CSS, JavaScript' },
    { name: 'Real Estate Website', tech: 'WordPress, Elementor, PHP' },
    { name: 'E-Commerce Theme', tech: 'WordPress, WooCommerce' },
  ],
};

const CVSection = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              My Resume
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
              Curriculum <span className="gradient-text">Vitae</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my skills, experience, and qualifications.
            </p>
          </div>

          {/* CV Card */}
          <div className="bg-card border border-border/50 rounded-2xl overflow-hidden card-glow print:shadow-none print:border-none">
            {/* CV Header */}
            <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-transparent p-8 border-b border-border/50 print:bg-transparent">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{cvData.name}</h3>
                  <p className="text-primary font-medium text-lg">{cvData.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{cvData.email}</p>
                </div>
                <div className="flex gap-3 print:hidden">
                  <Button variant="heroOutline" size="sm" onClick={handlePrint}>
                    <Printer size={16} />
                    Print CV
                  </Button>
                  <Button variant="hero" size="sm" onClick={handlePrint}>
                    <Download size={16} />
                    Download
                  </Button>
                </div>
              </div>
            </div>

            {/* CV Content */}
            <div className="p-8 space-y-8">
              {/* Summary */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {cvData.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Education</h4>
                </div>
                <div className="ml-13 space-y-3">
                  {cvData.education.map((edu, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                      <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                      <p className="text-muted-foreground text-sm">{edu.institution}</p>
                      <span className="text-primary text-xs font-medium">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="text-primary" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Skills</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <h5 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Frontend</h5>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.frontend.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <h5 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Backend</h5>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.backend.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <h5 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">CMS & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.cms.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                    <h5 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wide">Learning</h5>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.learning.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Experience</h4>
                </div>
                <div className="space-y-4">
                  {cvData.experience.map((exp, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/30">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h5 className="font-semibold text-foreground">{exp.title}</h5>
                        <span className="text-primary text-xs font-medium">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm font-medium mb-1">{exp.company}</p>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Folder className="text-primary" size={20} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Projects</h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {cvData.projects.map((project, index) => (
                    <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border/30 text-center">
                      <h5 className="font-semibold text-foreground mb-1">{project.name}</h5>
                      <p className="text-muted-foreground text-xs">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
