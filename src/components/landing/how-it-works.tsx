"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Connect Your Data",
    description: "Securely link your bank accounts, investments, and income sources. Takes under 5 minutes.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Define Your Goals",
    description: "Tell us about your dream sabbatical, career pivot, or early retirement target.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Explore Scenarios",
    description: "Our AI runs thousands of simulations and shows you exactly what's possible.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Execute Your Plan",
    description: "Get actionable steps, milestone tracking, and ongoing optimization as life evolves.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-[#F0FDFA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Plan your detour in <span className="text-[#0F766E]">4 simple steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From overwhelmed to optimized in under 10 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0F766E] to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#0F766E] text-white mb-4 shadow-lg">
                  <item.icon className="h-7 w-7" />
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
