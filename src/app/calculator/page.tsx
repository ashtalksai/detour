"use client";

import { useState } from "react";
import { TimelineBuilder } from "@/components/calculator/timeline-builder";
import { WealthChart } from "@/components/calculator/wealth-chart";
import { ScenarioCards } from "@/components/calculator/scenario-cards";
import { InputPanel } from "@/components/calculator/input-panel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calculator, Download, Share2 } from "lucide-react";

export interface TimelineEvent {
  id: string;
  type: "work" | "break" | "pivot" | "coast";
  label: string;
  startAge: number;
  endAge: number;
  income?: number;
  expenses?: number;
}

export interface FinancialInputs {
  currentAge: number;
  currentSavings: number;
  annualIncome: number;
  annualExpenses: number;
  retirementAge: number;
  expectedReturn: number;
  inflationRate: number;
}

const defaultInputs: FinancialInputs = {
  currentAge: 30,
  currentSavings: 75000,
  annualIncome: 95000,
  annualExpenses: 55000,
  retirementAge: 60,
  expectedReturn: 7,
  inflationRate: 3,
};

const defaultTimeline: TimelineEvent[] = [
  { id: "1", type: "work", label: "Current Career", startAge: 30, endAge: 34, income: 95000, expenses: 55000 },
  { id: "2", type: "break", label: "Sabbatical", startAge: 34, endAge: 35, income: 0, expenses: 45000 },
  { id: "3", type: "work", label: "Return to Work", startAge: 35, endAge: 45, income: 120000, expenses: 65000 },
  { id: "4", type: "coast", label: "Coast FIRE", startAge: 45, endAge: 60, income: 60000, expenses: 50000 },
];

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<FinancialInputs>(defaultInputs);
  const [timeline, setTimeline] = useState<TimelineEvent[]>(defaultTimeline);
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FDFA] to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <Calculator className="h-8 w-8 text-[#0F766E]" />
              Micro-Retirement Calculator
            </h1>
            <p className="text-muted-foreground mt-1">
              Build your timeline, see your future
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button size="sm" className="bg-[#F97316] hover:bg-[#EA580C]">
              Save Plan
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Input Panel */}
          <div className="lg:col-span-1">
            <InputPanel inputs={inputs} onChange={setInputs} />
          </div>

          {/* Right: Visualizations */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="timeline">Timeline Builder</TabsTrigger>
                <TabsTrigger value="projection">Wealth Projection</TabsTrigger>
              </TabsList>
              
              <TabsContent value="timeline" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Your Career Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TimelineBuilder 
                      events={timeline} 
                      onChange={setTimeline}
                      currentAge={inputs.currentAge}
                      retirementAge={inputs.retirementAge}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="projection" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Net Worth Projection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <WealthChart 
                      inputs={inputs}
                      timeline={timeline}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Scenario Comparison */}
            <ScenarioCards 
              inputs={inputs}
              timeline={timeline}
              activeScenario={activeScenario}
              onSelect={setActiveScenario}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
