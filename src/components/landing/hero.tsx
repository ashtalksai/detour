"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Calendar, Shield } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FDFA] to-background py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#0F766E]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#F97316]/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#0F766E]/10 px-4 py-1.5 text-sm font-medium text-[#0F766E] mb-6">
              <TrendingUp className="mr-2 h-4 w-4" />
              AI-Powered Career Planning
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Model the career{" "}
            <span className="text-[#0F766E]">nobody's parents</span> had
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
          >
            Plan sabbaticals, gap years, and career pivots with confidence. Our AI simulates thousands of financial scenarios so you know exactly when you can take a break—and for how long.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 h-12 text-base"
            >
              <Link href="/calculator">
                Start Planning Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 text-base border-[#0F766E]/20 hover:bg-[#0F766E]/5"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#0F766E]" />
              <span>Plan up to 40 years ahead</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#0F766E]" />
              <span>Monte Carlo simulations</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#0F766E]" />
              <span>Bank-grade security</span>
            </div>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 mx-auto max-w-5xl"
        >
          <div className="relative rounded-xl border bg-card shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F766E]/5 to-[#F97316]/5" />
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-4 text-sm text-muted-foreground">Detour Timeline Planner</span>
              </div>
              
              {/* Simulated app interface */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 h-64 rounded-lg bg-gradient-to-br from-[#0F766E]/10 to-[#14B8A6]/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#0F766E] mb-2">$2.4M</div>
                    <div className="text-sm text-muted-foreground">Projected Net Worth at 65</div>
                    <div className="mt-4 h-32 w-full flex items-end justify-center gap-1">
                      {[40, 55, 45, 70, 65, 80, 75, 90, 85, 100, 95, 110].map((h, i) => (
                        <div
                          key={i}
                          className="w-6 rounded-t bg-gradient-to-t from-[#0F766E] to-[#14B8A6]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4 shadow-sm border">
                    <div className="text-xs text-muted-foreground mb-1">Sabbatical Budget</div>
                    <div className="text-xl font-semibold text-foreground">$45,000</div>
                    <div className="text-xs text-[#0F766E]">6 months in Portugal</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm border">
                    <div className="text-xs text-muted-foreground mb-1">Break Window</div>
                    <div className="text-xl font-semibold text-foreground">Ages 34-35</div>
                    <div className="text-xs text-[#F97316]">Optimal timing</div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm border">
                    <div className="text-xs text-muted-foreground mb-1">Success Rate</div>
                    <div className="text-xl font-semibold text-foreground">94%</div>
                    <div className="text-xs text-muted-foreground">Monte Carlo confidence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
