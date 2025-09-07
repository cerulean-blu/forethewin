import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Target, Trophy } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Individual Lessons",
      description: "One-on-one personalized instruction focused on your specific needs and goals.",
      duration: "60 minutes",
      price: "$85",
      features: ["Swing analysis", "Personalized practice plan", "Video review", "Progress tracking"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Group Lessons",
      description: "Small group instruction (2-4 players) for a social and cost-effective learning experience.",
      duration: "90 minutes",
      price: "$45 per person",
      features: ["Max 4 students", "Social learning", "Competitive drills", "Shared progress"]
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Playing Lessons",
      description: "On-course instruction to apply your skills in real playing conditions.",
      duration: "3 hours",
      price: "$180",
      features: ["9-hole course play", "Strategy coaching", "Course management", "Mental game tips"]
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Lesson Packages",
      description: "Save money with our comprehensive lesson packages designed for committed improvement.",
      duration: "Multiple sessions",
      price: "From $300",
      features: ["3, 5, or 10 lesson packages", "Flexible scheduling", "Progress tracking", "Best value"]
    }
  ];

  return (
    <section className="py-20 bg-golf-fairway">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Golf Instruction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of golf instruction services 
            tailored to help golfers of all skill levels improve their game.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-golf transition-all duration-300 bg-card border-0">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {service.icon}
                  <div>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-muted-foreground">{service.duration}</span>
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;