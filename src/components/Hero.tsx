import { Button } from "@/components/ui/button";
import heroImage from "@/assets/golf-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-playfair">
          Master Your Golf
          <span className="block text-golf-accent">Swing Today</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Professional golf instruction tailored to your skill level. 
          Learn from an experienced PGA instructor and take your game to the next level.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Book Your First Lesson
          </Button>
          <Button variant="heroOutline" size="lg" className="text-lg px-8 py-4">
            View Lesson Packages
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-golf-accent">500+</div>
            <div className="text-primary-foreground/80">Students Taught</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-golf-accent">15+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-golf-accent">PGA</div>
            <div className="text-primary-foreground/80">Certified Professional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;