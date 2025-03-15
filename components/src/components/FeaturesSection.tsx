
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MessageSquare, Image } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 px-4 bg-[#0c0d18] relative overflow-hidden">
      {/* New enhanced backdrop with glowing effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3799]/5 via-[#1eb0ff]/10 to-[#30a8ff]/5 mix-blend-overlay"></div>
        <div className="absolute inset-0 tech-pattern opacity-10"></div>
        
        {/* Animated glowing orbs */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-[#1eb0ff]/10 blur-3xl animate-pulse-light"></div>
        <div className="absolute -right-20 top-1/3 w-60 h-60 rounded-full bg-[#8B5CF6]/10 blur-3xl animate-pulse-light" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Shield className="h-10 w-10 text-[#1eb0ff]" />}
            title="Enterprise Security" 
            description="Bank-level encryption and security protocols to keep your business data safe and private." 
            tag="Secure"
          />
          <FeatureCard 
            icon={<MessageSquare className="h-10 w-10 text-[#1eb0ff]" />}
            title="Advanced Language Models" 
            description="Leverage cutting-edge language models for natural conversations and complex tasks." 
            tag="Intelligent"
          />
          <FeatureCard 
            icon={<Image className="h-10 w-10 text-[#1eb0ff]" />}
            title="Visual Intelligence" 
            description="Process and analyze visual data with remarkable accuracy and context awareness." 
            tag="Creative"
          />
        </div>
      </div>
    </section>
  );
};

// Component for feature cards
const FeatureCard = ({ icon, title, description, tag }) => {
  return (
    <Card className="bg-[#15162b] border border-gray-800 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter>
        <Badge variant="outline" className="text-[#1eb0ff] border-[#1eb0ff]/30 bg-[#1eb0ff]/10">
          {tag}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default FeaturesSection;
