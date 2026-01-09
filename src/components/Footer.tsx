import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            Portfolio
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} John Developer. Made with
            <Heart className="text-primary" size={14} fill="currentColor" />
            and React
          </p>

          {/* Back to top */}
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
