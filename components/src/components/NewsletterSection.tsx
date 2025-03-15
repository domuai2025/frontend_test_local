
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4 bg-[#0c0d18] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3799]/20 to-[#1eb0ff]/20"></div>
      
      {/* Central visualization */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full h-1/2 opacity-10 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/c578700c-ad5e-446a-88d6-793978e5667c.png" 
          alt="Circuit Pattern" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="max-w-lg mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-6 text-[#1eb0ff]">
          Stay Ahead of the AI Curve
        </h2>
        <p className="text-gray-400 mb-8">
          Subscribe to our newsletter for the latest DOMU AI updates, features and industry insights
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input 
            type="email" 
            placeholder="youremail@example.com" 
            className="bg-[#1a1b2b] border-gray-700" 
          />
          <Button className="bg-[#1eb0ff] hover:bg-[#1eb0ff]/90 text-black" variant="shimmer">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
