
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AIAgentProps {
  name: string;
  description: string;
  icon: LucideIcon;
  tag: string;
  color: string;
  initials: string;
  avatarImage?: string;
  customAvatarStyle?: React.CSSProperties;
}

const AIAgent = ({ 
  name, 
  description, 
  icon: Icon, 
  tag, 
  color, 
  initials,
  avatarImage,
  customAvatarStyle
}: AIAgentProps) => {
  return (
    <Card className="bg-[#15162b] border border-gray-800 overflow-hidden h-full transition-all duration-300 hover:border-[#1eb0ff]/30 hover:shadow-[0_0_15px_rgba(30,176,255,0.2)]">
      <CardHeader className="pb-2 flex flex-row items-center gap-5">
        <div className="relative group">
          {/* Enhanced radiant background effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-70 blur-lg group-hover:opacity-100 transition duration-500"></div>
          <div className={`absolute -inset-2 rounded-full blur-md opacity-70 ${color} group-hover:opacity-90 transition duration-500`}></div>
          
          <Avatar className="h-24 w-24 border-2 border-[#1eb0ff]/20 bg-black relative z-10 transition-transform duration-300 group-hover:scale-105">
            {avatarImage ? (
              <AvatarImage 
                src={avatarImage} 
                alt={name} 
                className="object-cover" 
                style={customAvatarStyle || { 
                  transform: "scale(1.35)",
                  objectPosition: "center 20%",
                  height: "115%" 
                }}
              />
            ) : (
              <AvatarFallback className="bg-black text-white text-xl font-bold">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl text-white flex items-center gap-2">
            {name}
          </CardTitle>
          <div className="flex">
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
      </CardContent>
      <CardFooter>
        <Badge variant="outline" className={`${color} border-[#1eb0ff]/30 bg-[#1eb0ff]/10`}>
          {tag}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default AIAgent;
