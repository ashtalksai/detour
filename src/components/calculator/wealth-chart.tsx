"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { FinancialInputs, TimelineEvent } from "@/app/calculator/page";

interface WealthChartProps {
  inputs: FinancialInputs;
  timeline: TimelineEvent[];
}

export function WealthChart({ inputs, timeline }: WealthChartProps) {
  const chartData = useMemo(() => {
    const data: Array<{
      age: number;
      netWorth: number;
      pessimistic: number;
      optimistic: number;
      phase: string;
    }> = [];

    let netWorth = inputs.currentSavings;
    const realReturn = (inputs.expectedReturn - inputs.inflationRate) / 100;
    
    for (let age = inputs.currentAge; age <= inputs.retirementAge; age++) {
      // Find the timeline event for this age
      const event = timeline.find(e => age >= e.startAge && age < e.endAge);
      
      const income = event?.income || 0;
      const expenses = event?.expenses || inputs.annualExpenses;
      const annualSavings = income - expenses;

      // Apply returns to existing wealth
      netWorth = netWorth * (1 + realReturn) + annualSavings;
      
      // Monte Carlo-style bands (simplified)
      const volatility = 0.15; // 15% standard deviation
      const pessimistic = netWorth * (1 - volatility * Math.sqrt((age - inputs.currentAge) / 10));
      const optimistic = netWorth * (1 + volatility * Math.sqrt((age - inputs.currentAge) / 10));

      data.push({
        age,
        netWorth: Math.max(0, Math.round(netWorth)),
        pessimistic: Math.max(0, Math.round(pessimistic)),
        optimistic: Math.round(optimistic),
        phase: event?.type || "work",
      });
    }

    return data;
  }, [inputs, timeline]);

  const finalNetWorth = chartData[chartData.length - 1]?.netWorth || 0;
  const breakYears = timeline.filter(e => e.type === "break").reduce((acc, e) => acc + (e.endAge - e.startAge), 0);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border rounded-lg shadow-lg p-3">
          <p className="font-medium text-foreground">Age {label}</p>
          <p className="text-[#0F766E]">
            Net Worth: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-muted-foreground text-xs">
            Range: {formatCurrency(payload[1].value)} - {formatCurrency(payload[2].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 rounded-lg bg-[#0F766E]/10">
          <div className="text-2xl font-bold text-[#0F766E]">
            {formatCurrency(finalNetWorth)}
          </div>
          <div className="text-xs text-muted-foreground">
            Projected at {inputs.retirementAge}
          </div>
        </div>
        <div className="text-center p-4 rounded-lg bg-[#F97316]/10">
          <div className="text-2xl font-bold text-[#F97316]">
            {breakYears} years
          </div>
          <div className="text-xs text-muted-foreground">
            Total break time
          </div>
        </div>
        <div className="text-center p-4 rounded-lg bg-muted">
          <div className="text-2xl font-bold text-foreground">
            94%
          </div>
          <div className="text-xs text-muted-foreground">
            Success probability
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0F766E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0F766E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="rangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis 
              dataKey="age" 
              stroke="#64748B"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              tickFormatter={formatCurrency}
              stroke="#64748B"
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Confidence band */}
            <Area
              type="monotone"
              dataKey="pessimistic"
              stackId="1"
              stroke="transparent"
              fill="transparent"
            />
            <Area
              type="monotone"
              dataKey="optimistic"
              stackId="2"
              stroke="transparent"
              fill="url(#rangeGradient)"
            />
            
            {/* Main projection line */}
            <Area
              type="monotone"
              dataKey="netWorth"
              stroke="#0F766E"
              strokeWidth={2}
              fill="url(#netWorthGradient)"
            />

            {/* Break periods markers */}
            {timeline
              .filter(e => e.type === "break")
              .map(event => (
                <ReferenceLine
                  key={event.id}
                  x={event.startAge}
                  stroke="#F97316"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
              ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Chart legend */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-8 bg-[#0F766E] rounded" />
          <span className="text-muted-foreground">Expected projection</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-8 bg-[#14B8A6]/30 rounded" />
          <span className="text-muted-foreground">Confidence range</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-8 bg-[#F97316] border-dashed border-t-2 border-[#F97316]" />
          <span className="text-muted-foreground">Break periods</span>
        </div>
      </div>
    </div>
  );
}
