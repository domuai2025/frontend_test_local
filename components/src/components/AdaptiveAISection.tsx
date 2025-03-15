
import React from "react";
import { GitBranch, Sprout, TrendingUp } from "lucide-react";

const AdaptiveAISection = () => {
  return (
    <section className="py-16 px-4 bg-[#0c0d18] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3799]/5 via-[#1eb0ff]/10 to-[#30a8ff]/5 mix-blend-overlay"></div>
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        
        {/* Animated glowing orbs */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-[#1eb0ff]/10 blur-3xl animate-pulse-light"></div>
        <div className="absolute -right-20 top-1/3 w-60 h-60 rounded-full bg-[#8B5CF6]/10 blur-3xl animate-pulse-light" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1eb0ff] mb-4">
            AI That Adapts & Grows with Your Business
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-300">
            Our vertical roster of AI agents is designed to move seamlessly across multiple industries, adapting to your needs. With our proprietary AI Agent Generator, new specialized agents are born daily, ensuring constant innovation and expansion. DOMU AI isn't just built for today—it's built to scale with you.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#1eb0ff]/10 border border-[#1eb0ff]/30 flex items-center justify-center mb-4">
                <GitBranch className="h-8 w-8 text-[#1eb0ff]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Specialized Agents</h3>
              <p className="text-gray-400">Tailored AI agents for your specific industry needs and challenges</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center mb-4">
                <Sprout className="h-8 w-8 text-[#8B5CF6]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Innovation</h3>
              <p className="text-gray-400">New AI capabilities continuously developed to solve emerging challenges</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scales With You</h3>
              <p className="text-gray-400">AI infrastructure that grows alongside your business without limitations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveAISection;
