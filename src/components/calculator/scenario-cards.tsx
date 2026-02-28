"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, TrendingUp, Palmtree, Zap } from "lucide-react";
import type { FinancialInputs, TimelineEvent } from "@/app/calculator/page";

interface ScenarioCardsProps {
  inputs: FinancialInputs;
  timeline: TimelineEvent[];
  activeScenario: number;
  onSelect: (index: number) => void;
}

const scenarios = [
  {
    id: 0,
    title: "Your Current Plan",
    description: "Based on your timeline above",
    icon: TrendingUp,
    color: "#0F766E",
    badge: "Active",
    stats: {
      retirement: "$2.1M",
      breaks: "1 year",
      success: "94%",
    },
  },
  {
    id: 1,
    title: "No Breaks",
    description: "Work straight through to retirement",
    icon: Zap,
    color: "#64748B",
    badge: "Compare",
    stats: {
      retirement: "$2.8M",
      breaks: "0 years",
      success: "97%",
    },
  },
  {
    id: 2,
    title: "Extended Sabbatical",
    description: "Take 2 years off in your 30s",
    icon: Palmtree,
    color: "#F97316",
    badge: "Bold",
    stats: {
      retirement: "$1.8M",
      breaks: "2 years",
      success: "89%",
    },
  },
];

export function ScenarioCards({ inputs, timeline, activeScenario, onSelect }: ScenarioCardsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Compare Scenarios</h3>
      
      <div className="grid md:grid-cols-3 gap-4">
        {scenarios.map((scenario, index) => {
          const isActive = activeScenario === index;
          const Icon = scenario.icon;
          
          return (
            <motion.div
              key={scenario.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className={`cursor-pointer transition-all ${
                  isActive 
                    ? "ring-2 ring-offset-2 ring-[#0F766E]" 
                    : "hover:shadow-md"
                }`}
                onClick={() => onSelect(index)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div 
                      className="h-10 w-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: scenario.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge 
                      variant={isActive ? "default" : "secondary"}
                      className={isActive ? "bg-[#0F766E]" : ""}
                    >
                      {isActive ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Active
                        </>
                      ) : (
                        scenario.badge
                      )}
                    </Badge>
                  </div>
                  <CardTitle className="text-base mt-3">{scenario.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{scenario.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold" style={{ color: scenario.color }}>
                        {scenario.stats.retirement}
                      </div>
                      <div className="text-xs text-muted-foreground">at {inputs.retirementAge}</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">
                        {scenario.stats.breaks}
                      </div>
                      <div className="text-xs text-muted-foreground">breaks</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">
                        {scenario.stats.success}
                      </div>
                      <div className="text-xs text-muted-foreground">success</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Insight box */}
      <Card className="bg-gradient-to-r from-[#F0FDFA] to-[#FFF7ED] border-[#0F766E]/20">
        <CardContent className="py-4">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-[#0F766E]/10 flex items-center justify-center flex-shrink-0">
              <Zap className="h-4 w-4 text-[#0F766E]" />
            </div>
            <div>
              <div className="font-medium text-foreground text-sm">AI Insight</div>
              <p className="text-sm text-muted-foreground mt-1">
                Taking a 1-year sabbatical at age 34 costs ~$250K less than waiting until 44, 
                due to compound growth on earlier savings. Your optimal break window is ages 33-36.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
