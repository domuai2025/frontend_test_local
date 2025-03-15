
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  Code,
  Database,
  Cloud,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  FileCode,
  Zap,
  Brain,
  Share2,
  Puzzle,
  X,
  Music,
  GithubIcon,
  ServerIcon,
  Slack,
  LayoutGrid,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const IntegrationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#080a15]" ref={ref}>
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#1e3799] opacity-5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#1eb0ff] opacity-5 blur-[100px] rounded-full"></div>
      
      {/* Connection lines overlay */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-[#1e3799] to-[#1eb0ff] text-transparent bg-clip-text">
            Seamless Integration
          </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-20">
          Connect DOMU AI with your favorite platforms to streamline your workflow and enhance productivity
        </p>
        
        {/* AI Platforms */}
        <h3 className="text-xl md:text-2xl font-medium text-center mb-10 text-white">
          <span className="inline-flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#1eb0ff]" />
            AI Platforms
          </span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 gap-y-10 mb-20">
          {aiPlatforms.map((item, index) => (
            <PlatformCard
              key={index}
              name={item.name}
              subtitle={item.subtitle}
              icon={item.icon}
              letter={item.letter}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gradient-to-b from-transparent via-[#1eb0ff]/30 to-transparent"></div>
        </div>
        
        {/* Social Media */}
        <h3 className="text-xl md:text-2xl font-medium text-center my-10 text-white">
          <span className="inline-flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#1eb0ff]" />
            Social Media Platforms
          </span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {socialPlatforms.map((item, index) => (
            <SocialMediaCard
              key={index}
              name={item.name}
              icon={item.icon}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-16 w-px bg-gradient-to-b from-transparent via-[#1eb0ff]/30 to-transparent"></div>
        </div>
        
        {/* APIs & Development Tools */}
        <h3 className="text-xl md:text-2xl font-medium text-center my-10 text-white">
          <span className="inline-flex items-center gap-2">
            <Code className="w-5 h-5 text-[#1eb0ff]" />
            APIs & Development Tools
          </span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {apiTools.map((item, index) => (
            <ApiToolCard
              key={index}
              name={item.name}
              icon={item.icon}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button variant="darkBlue" size="lg" className="group relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explore all integrations
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#1e3799]/20 to-[#1eb0ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Platform data
const aiPlatforms = [
  { 
    name: "OpenAI", 
    subtitle: "ChatGPT", 
    icon: <Brain />,
    letter: "O"
  },
  { 
    name: "Microsoft", 
    subtitle: "Office 365", 
    icon: <Database />,
    letter: "M"
  },
  { 
    name: "Google", 
    subtitle: "Workspace", 
    icon: <Cloud />,
    letter: "G"
  },
  { 
    name: "Salesforce", 
    subtitle: "CRM", 
    icon: <MessageCircle />,
    letter: "S"
  },
  { 
    name: "Notion", 
    subtitle: "Workspace", 
    icon: <FileCode />,
    letter: "N"
  },
  { 
    name: "Make", 
    subtitle: "Automation", 
    icon: <Puzzle />,
    letter: "M"
  },
  { 
    name: "Anthropic", 
    subtitle: "Claude", 
    icon: <Sparkles />,
    letter: "A"
  },
  { 
    name: "Zapier", 
    subtitle: "Workflows", 
    icon: <Zap />,
    letter: "Z"
  },
];

// Social Media data
const socialPlatforms = [
  { name: "Facebook", icon: <Facebook /> },
  { name: "Instagram", icon: <Instagram /> },
  { name: "Twitter", icon: <X /> },
  { name: "LinkedIn", icon: <Linkedin /> },
  { name: "YouTube", icon: <Youtube /> },
  { name: "TikTok", icon: <Music /> },
];

// API Tools data
const apiTools = [
  { name: "GitHub", icon: <GithubIcon /> },
  { name: "Vercel", icon: <ServerIcon /> },
  { name: "Slack", icon: <Slack /> },
  { name: "Stripe", icon: <FileCode /> },
  { name: "Airtable", icon: <LayoutGrid /> },
  { name: "Trello", icon: <CheckCircle /> },
];

// Component for AI Platform cards
const PlatformCard = ({ name, icon, subtitle, letter, delay, inView }) => {
  return (
    <div 
      className={cn(
        "group flex flex-col items-center justify-center transition-all duration-500 hover:translate-y-[-5px]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1526] border border-[#1eb0ff]/10 flex items-center justify-center mb-4 group-hover:border-[#1eb0ff]/40 group-hover:shadow-[0_0_25px_rgba(30,176,255,0.15)] transition-all duration-300">
        <span className="text-3xl md:text-4xl font-bold text-[#1eb0ff]">{letter}</span>
      </div>
      
      <h4 className="font-bold text-lg text-white group-hover:text-[#1eb0ff] transition-colors duration-300">{name}</h4>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

// Component for social media cards
const SocialMediaCard = ({ name, icon, delay, inView }) => {
  return (
    <div 
      className={cn(
        "group flex flex-col items-center p-5 rounded-lg border border-[#1a1b2b] hover:border-[#1eb0ff]/40 bg-[#0c0d18]/80 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_0_25px_rgba(30,176,255,0.15)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transitionDelay: `${delay}s`,
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1eb0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      <div className="w-12 h-12 rounded-full bg-[#151631] border border-[#1eb0ff]/20 flex items-center justify-center mb-4 text-[#1eb0ff] group-hover:text-white group-hover:border-[#1eb0ff]/50 group-hover:shadow-[0_0_15px_rgba(30,176,255,0.3)] transition-all duration-300">
        {icon}
      </div>
      
      <p className="font-semibold text-white group-hover:text-[#1eb0ff] transition-colors duration-300">{name}</p>
    </div>
  );
};

// Component for API tools cards
const ApiToolCard = ({ name, icon, delay, inView }) => {
  return (
    <div 
      className={cn(
        "group flex flex-col items-center p-5 rounded-lg border border-[#1a1b2b] hover:border-[#1eb0ff]/40 bg-[#0c0d18]/80 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-5px] hover:shadow-[0_0_25px_rgba(30,176,255,0.15)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ 
        transitionDelay: `${delay}s`,
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1eb0ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      
      <div className="w-12 h-12 rounded-full bg-[#151631] border border-[#1eb0ff]/20 flex items-center justify-center mb-4 text-[#1eb0ff] group-hover:text-white group-hover:border-[#1eb0ff]/50 group-hover:shadow-[0_0_15px_rgba(30,176,255,0.3)] transition-all duration-300">
        {icon}
      </div>
      
      <p className="font-semibold text-white group-hover:text-[#1eb0ff] transition-colors duration-300">{name}</p>
    </div>
  );
};

export default IntegrationSection;
