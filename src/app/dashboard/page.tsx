"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  Plus,
  ChevronRight,
  Sparkles,
  Palmtree
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Sample data
const wealthData = [
  { month: "Jan", value: 125000 },
  { month: "Feb", value: 128000 },
  { month: "Mar", value: 132000 },
  { month: "Apr", value: 129000 },
  { month: "May", value: 137000 },
  { month: "Jun", value: 145000 },
];

const milestones = [
  { id: 1, title: "Emergency fund complete", target: 25000, current: 25000, completed: true },
  { id: 2, title: "Sabbatical fund", target: 45000, current: 32000, completed: false },
  { id: 3, title: "Coast FIRE number", target: 500000, current: 145000, completed: false },
];

const recentActivity = [
  { id: 1, type: "deposit", description: "401k contribution", amount: 1500, date: "Today" },
  { id: 2, type: "growth", description: "Portfolio appreciation", amount: 2340, date: "This week" },
  { id: 3, type: "expense", description: "Travel booking (sabbatical prep)", amount: -1200, date: "Mar 15" },
  { id: 4, type: "deposit", description: "Bonus savings", amount: 5000, date: "Mar 1" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FDFA] to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex</h1>
            <p className="text-muted-foreground mt-1">
              Your sabbatical fund is on track. 71% complete.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button className="bg-[#F97316] hover:bg-[#EA580C]">
              <Plus className="h-4 w-4 mr-2" />
              New Goal
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-[#0F766E]/10 flex items-center justify-center">
                    <Wallet className="h-5 w-5 text-[#0F766E]" />
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    12%
                  </Badge>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">$145,230</div>
                  <div className="text-sm text-muted-foreground">Net Worth</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center">
                    <Palmtree className="h-5 w-5 text-[#F97316]" />
                  </div>
                  <Badge className="bg-orange-100 text-orange-700">71%</Badge>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">$32,000</div>
                  <div className="text-sm text-muted-foreground">Sabbatical Fund</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <Badge variant="secondary">On track</Badge>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">18 months</div>
                  <div className="text-sm text-muted-foreground">Until Sabbatical</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-[#0F766E]/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-[#0F766E]" />
                  </div>
                  <Badge className="bg-green-100 text-green-700">94%</Badge>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-bold text-foreground">On Track</div>
                  <div className="text-sm text-muted-foreground">Success Probability</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Wealth Chart */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Net Worth Trend</CardTitle>
                <Tabs defaultValue="6m" className="w-auto">
                  <TabsList className="h-8">
                    <TabsTrigger value="1m" className="text-xs px-2">1M</TabsTrigger>
                    <TabsTrigger value="6m" className="text-xs px-2">6M</TabsTrigger>
                    <TabsTrigger value="1y" className="text-xs px-2">1Y</TabsTrigger>
                    <TabsTrigger value="all" className="text-xs px-2">All</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={wealthData}>
                      <defs>
                        <linearGradient id="dashboardGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0F766E" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#0F766E" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                      <YAxis 
                        tickFormatter={(v) => `$${(v/1000)}K`} 
                        stroke="#64748B" 
                        fontSize={12}
                      />
                      <Tooltip 
                        formatter={(value) => [`$${Number(value).toLocaleString()}`, "Net Worth"]}
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid #E2E8F0",
                          borderRadius: "8px"
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#0F766E"
                        strokeWidth={2}
                        fill="url(#dashboardGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Milestones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {milestone.completed ? (
                          <div className="h-5 w-5 rounded-full bg-[#0F766E] flex items-center justify-center">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-[#0F766E]" />
                        )}
                        <span className={`font-medium ${milestone.completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
                          {milestone.title}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ${milestone.current.toLocaleString()} / ${milestone.target.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all"
                        style={{ 
                          width: `${Math.min((milestone.current / milestone.target) * 100, 100)}%`,
                          backgroundColor: milestone.completed ? "#0F766E" : "#F97316"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card className="bg-gradient-to-br from-[#0F766E] to-[#0D5C56] text-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">AI Insight</span>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  At your current savings rate, you could extend your sabbatical by 2 months 
                  if you reduce dining expenses by 15%.
                </p>
                <Button variant="secondary" size="sm" className="w-full text-[#0F766E]">
                  Show me how
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        activity.type === "deposit" ? "bg-green-100" :
                        activity.type === "growth" ? "bg-[#0F766E]/10" :
                        "bg-red-100"
                      }`}>
                        {activity.type === "deposit" ? (
                          <ArrowUpRight className="h-4 w-4 text-green-600" />
                        ) : activity.type === "growth" ? (
                          <TrendingUp className="h-4 w-4 text-[#0F766E]" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground truncate">
                          {activity.description}
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.date}</div>
                      </div>
                      <div className={`text-sm font-medium ${
                        activity.amount >= 0 ? "text-green-600" : "text-red-600"
                      }`}>
                        {activity.amount >= 0 ? "+" : ""}${Math.abs(activity.amount).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Adjust timeline
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Run new simulation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Add milestone
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
