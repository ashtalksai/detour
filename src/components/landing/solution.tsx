"use client";

import { motion } from "framer-motion";
import { Sparkles, LineChart, Target, Zap } from "lucide-react";

export function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F0FDFA] to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-[#0F766E]/10 px-4 py-1.5 text-sm font-medium text-[#0F766E] mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              The Solution
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Detour models the career <span className="text-[#0F766E]">you actually want</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We run thousands of Monte Carlo simulations using your real financial data. The result? A personalized timeline showing exactly when you can take breaks, for how long, and what it costs.
            </p>

            <div className="space-y-4">
              {[
                { icon: LineChart, text: "10,000+ scenario simulations per plan" },
                { icon: Target, text: "Personalized break windows based on your goals" },
                { icon: Zap, text: "Real-time updates as markets change" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#0F766E]/10 flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-[#0F766E]" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border bg-card p-6 shadow-xl">
              <div className="text-sm font-medium text-muted-foreground mb-4">Your Optimal Timeline</div>
              
              {/* Timeline visualization */}
              <div className="space-y-6">
                {[
                  { age: "30-32", label: "Save Mode", color: "#0F766E", width: "60%" },
                  { age: "32-33", label: "Sabbatical", color: "#F97316", width: "25%" },
                  { age: "33-38", label: "Career Growth", color: "#0F766E", width: "100%" },
                  { age: "38-39", label: "Travel Year", color: "#F97316", width: "25%" },
                  { age: "39-50", label: "Peak Earning", color: "#0F766E", width: "100%" },
                  { age: "50+", label: "Coast FIRE", color: "#14B8A6", width: "80%" },
                ].map((period, index) => (
                  <div key={period.age} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{period.label}</span>
                      <span className="text-xs text-muted-foreground">{period.age}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: period.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * index }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: period.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#0F766E]">2 years</div>
                    <div className="text-xs text-muted-foreground">Total break time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#F97316]">$0</div>
                    <div className="text-xs text-muted-foreground">Impact on retirement</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 h-full w-full rounded-2xl bg-[#0F766E]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
