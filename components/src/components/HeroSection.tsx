
import React from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 text-center max-w-5xl mx-auto relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 tech-pattern opacity-20 z-0"></div>
      
      {/* Content with z-index to appear above the pattern */}
      <div className="relative z-10">
        {/* Logo - Increased size */}
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/3ccf5d9b-0900-4ed2-bafb-7bd100ebe280.png" 
            alt="DOMU AI Logo" 
            className="w-40 md:w-48 h-auto" 
          />
        </div>
        
        {/* Clean Main Heading with only text standing out */}
        <div className="relative mb-8">
          <h1 className="relative py-4 px-2">
            <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#1e3799] via-[#1eb0ff] to-[#8B5CF6] text-transparent bg-clip-text">
              Leading in Vertical AI Agent Services
            </span>
          </h1>
        </div>
        
        {/* Subtitle - Updated with new text */}
        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto mb-8">
          Our model of human and AI support make this transition real- Your AI Team will be programed as a whole to make your business succeed.
        </p>
        
        {/* CTA Button - Single prominent button */}
        <div className="flex justify-center">
          <Button className="w-48 h-14 text-lg bg-[#1eb0ff] hover:bg-[#1eb0ff]/90 text-black gap-2" variant="shimmer">
            <Zap size={20} />
            Get ready
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
