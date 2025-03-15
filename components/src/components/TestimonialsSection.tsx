
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 relative">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="tech-pattern w-full h-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trusted by Innovative Companies
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          See how DOMU AI has transformed operations across industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard name="TechCorp" />
          <TestimonialCard name="GlobalFinance" />
          <TestimonialCard name="MediHealth" />
          <TestimonialCard name="RetailGiant" />
        </div>
      </div>
    </section>
  );
};

// Component for testimonial cards
const TestimonialCard = ({ name }) => {
  return (
    <Card className="bg-[#15162b] border border-gray-800">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1e3799] to-[#5827aa] flex items-center justify-center">
            <span className="text-sm font-medium">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 text-[#30a8ff]" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400">
          "DOMU AI has transformed how we handle data analysis and customer interactions. The results speak for themselves."
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
