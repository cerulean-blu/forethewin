import { Badge } from "@/components/ui/badge";
import instructorImage from "@/assets/golf-instruction.jpg";

const About = () => {
  const certifications = [
    "PGA Certified Professional",
    "15+ Years Teaching Experience",
    "TPI Certified (Golf Fitness)",
    "TrackMan Certified",
    "Former College Golf Coach"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-playfair">
              Meet Your Golf Instructor
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of professional golf instruction experience, I'm passionate about 
              helping golfers of all skill levels achieve their goals. Whether you're a complete beginner 
              or looking to break par, I'll work with you to develop a personalized improvement plan.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My teaching philosophy focuses on building a solid foundation while keeping the game 
              enjoyable. I use modern technology including video analysis and launch monitors to 
              provide data-driven insights that accelerate your improvement.
            </p>
            
            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Certifications & Experience</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Teaching Philosophy */}
            <div className="bg-golf-fairway p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Teaching Philosophy</h3>
              <p className="text-muted-foreground">
                "Every golfer is unique, and so should be their instruction. I believe in teaching 
                the fundamentals while adapting to each student's natural swing tendencies and 
                physical capabilities. My goal is to make you a better golfer while keeping the 
                game fun and rewarding."
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-golf">
              <img 
                src={instructorImage} 
                alt="Professional golf instructor teaching a student proper swing technique"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-lg shadow-golf border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;