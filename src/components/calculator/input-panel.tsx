"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Calendar, TrendingUp, Percent } from "lucide-react";
import type { FinancialInputs } from "@/app/calculator/page";

interface InputPanelProps {
  inputs: FinancialInputs;
  onChange: (inputs: FinancialInputs) => void;
}

export function InputPanel({ inputs, onChange }: InputPanelProps) {
  const updateInput = (key: keyof FinancialInputs, value: number) => {
    onChange({ ...inputs, [key]: value });
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-[#0F766E]" />
          Your Financial Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Age */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Current Age
            </Label>
            <span className="text-sm font-medium text-[#0F766E]">{inputs.currentAge}</span>
          </div>
          <Slider
            value={[inputs.currentAge]}
            onValueChange={([v]) => updateInput("currentAge", v)}
            min={20}
            max={55}
            step={1}
            className="[&_[role=slider]]:bg-[#0F766E]"
          />
        </div>

        {/* Current Savings */}
        <div className="space-y-2">
          <Label className="text-sm flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            Current Savings
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              value={inputs.currentSavings}
              onChange={(e) => updateInput("currentSavings", Number(e.target.value))}
              className="pl-7"
            />
          </div>
        </div>

        {/* Annual Income */}
        <div className="space-y-2">
          <Label className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            Annual Income
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              value={inputs.annualIncome}
              onChange={(e) => updateInput("annualIncome", Number(e.target.value))}
              className="pl-7"
            />
          </div>
        </div>

        {/* Annual Expenses */}
        <div className="space-y-2">
          <Label className="text-sm flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            Annual Expenses
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              value={inputs.annualExpenses}
              onChange={(e) => updateInput("annualExpenses", Number(e.target.value))}
              className="pl-7"
            />
          </div>
        </div>

        {/* Target Retirement Age */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              Target Retirement Age
            </Label>
            <span className="text-sm font-medium text-[#0F766E]">{inputs.retirementAge}</span>
          </div>
          <Slider
            value={[inputs.retirementAge]}
            onValueChange={([v]) => updateInput("retirementAge", v)}
            min={45}
            max={70}
            step={1}
            className="[&_[role=slider]]:bg-[#0F766E]"
          />
        </div>

        {/* Expected Return */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label className="text-sm flex items-center gap-2">
              <Percent className="h-4 w-4 text-muted-foreground" />
              Expected Return
            </Label>
            <span className="text-sm font-medium text-[#0F766E]">{inputs.expectedReturn}%</span>
          </div>
          <Slider
            value={[inputs.expectedReturn]}
            onValueChange={([v]) => updateInput("expectedReturn", v)}
            min={3}
            max={12}
            step={0.5}
            className="[&_[role=slider]]:bg-[#0F766E]"
          />
        </div>

        {/* Inflation Rate */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label className="text-sm flex items-center gap-2">
              <Percent className="h-4 w-4 text-muted-foreground" />
              Inflation Rate
            </Label>
            <span className="text-sm font-medium text-[#F97316]">{inputs.inflationRate}%</span>
          </div>
          <Slider
            value={[inputs.inflationRate]}
            onValueChange={([v]) => updateInput("inflationRate", v)}
            min={1}
            max={6}
            step={0.5}
            className="[&_[role=slider]]:bg-[#F97316]"
          />
        </div>

        {/* Summary Stats */}
        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Annual Savings</span>
            <span className="font-medium text-[#0F766E]">
              ${(inputs.annualIncome - inputs.annualExpenses).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Savings Rate</span>
            <span className="font-medium text-[#0F766E]">
              {Math.round(((inputs.annualIncome - inputs.annualExpenses) / inputs.annualIncome) * 100)}%
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Real Return</span>
            <span className="font-medium">
              {(inputs.expectedReturn - inputs.inflationRate).toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
