
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Diamond, Crown, Sprout, TrendingUp } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 relative overflow-hidden">
      {/* Subtle tech pattern background instead of bright gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050508] opacity-90"></div>
        <div className="absolute inset-0 tech-pattern opacity-5"></div>
        
        {/* Subtle accent glows instead of big orbs */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 rounded-full bg-[#1eb0ff]/5 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 rounded-full bg-[#8B5CF6]/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge variant="darkAccent" className="mb-4 px-3 py-1 backdrop-blur-sm">
            Flexible Pricing
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Choose Your AI Power Level
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 text-lg">
            No additional API costs - use your own OpenAI API keys for predictable budgeting and complete cost control.
            <span className="block mt-2">Each plan includes expert consultation for seamless integration.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="relative">
            <Card className="h-full backdrop-blur-sm bg-[#060912]/80 border-[#1eb0ff]/10 rounded-xl overflow-hidden pricing-card animated-border animated-border-blue">
              <CardHeader className="pb-2 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-black/50 border border-[#1eb0ff]/20">
                    <Sprout className="h-6 w-6 text-[#1eb0ff]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Starter</CardTitle>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-300 mb-8">Perfect for small businesses starting with AI</p>
                <ul className="space-y-4 mb-8">
                  {["1 AI Agent of your choice", "Personalized Integration Consultation", "Use Your Own API Keys", "Email Support"].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#1eb0ff]/10 p-1">
                        <Check className="h-4 w-4 text-[#1eb0ff]" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button variant="dark" className="w-full py-6 h-auto text-md font-medium group">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Professional Plan */}
          <div className="relative">
            <Badge variant="darkPurple" className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1">
              <Crown className="w-4 h-4 inline-block mr-1" /> MOST POPULAR
            </Badge>
            <Card className="h-full backdrop-blur-sm bg-[#0a0912]/90 border-[#8B5CF6]/10 rounded-xl overflow-hidden pricing-card-popular animated-border animated-border-purple">
              <CardHeader className="pb-2 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-black/50 border border-[#8B5CF6]/20">
                    <TrendingUp className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Professional</CardTitle>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">$499</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-300 mb-8">For growing businesses needing multiple AI capabilities</p>
                <ul className="space-y-4 mb-8">
                  {["Choose up to 3 AI Agents", "Comprehensive Integration Support", "Priority Consultation Access", "Teams Support"].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#8B5CF6]/10 p-1">
                        <Check className="h-4 w-4 text-[#8B5CF6]" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button variant="darkPurple" className="w-full py-6 h-auto text-md font-medium group">
                  <span className="relative z-10 flex items-center gap-2">
                    Choose Plan
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          {/* Platinum Plan */}
          <div className="relative">
            <Badge variant="bestValue" className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1">
              BEST VALUE
            </Badge>
            <Card className="h-full backdrop-blur-sm bg-[#060912]/80 border-[#1eb0ff]/10 rounded-xl overflow-hidden pricing-card animated-border animated-border-blue">
              <CardHeader className="pb-2 pt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-black/50 border border-[#1eb0ff]/20">
                    <Diamond className="h-6 w-6 text-[#1eb0ff]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Platinum</CardTitle>
                </div>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-white">$499</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <CardDescription className="text-gray-400 font-medium">
                  Regular: $795/month
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-300 mb-8">Early Adoption Offer</p>
                <ul className="space-y-4 mb-8">
                  {["All AI Agents Included", "Extensive Onboarding Support", "Continuous Integration Support", "24/7 Premium Support"].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-[#1eb0ff]/10 p-1">
                        <Check className="h-4 w-4 text-[#1eb0ff]" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button variant="darkBlue" className="w-full py-6 h-auto text-md font-medium group">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Early Access
                    <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Enterprise callout - Updated to match new dark theme */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-[#1eb0ff]/10 bg-[#060912]/80 backdrop-blur-sm overflow-hidden animated-border animated-border-blue">
            <div className="absolute inset-0 tech-pattern opacity-5"></div>
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-white">Need a Custom Solution?</h3>
                <p className="text-gray-300">Contact us for enterprise-grade AI implementation tailored to your specific business needs.</p>
              </div>
              <Button variant="dark" className="px-6 py-6 h-auto text-base font-medium group">
                Contact Sales <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
