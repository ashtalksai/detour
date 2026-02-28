"use client";

import { motion } from "framer-motion";
import { 
  LineChart, 
  Calendar, 
  Layers, 
  Brain, 
  Shield, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Wealth Projections",
    description: "Monte Carlo simulations model market volatility, inflation, and your unique spending patterns.",
  },
  {
    icon: Calendar,
    title: "Timeline Builder",
    description: "Drag and drop career phases, sabbaticals, and life events to build your ideal path.",
  },
  {
    icon: Layers,
    title: "Scenario Comparison",
    description: "Compare multiple life paths side-by-side. See the real cost of that year abroad.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Get personalized suggestions for optimal break timing based on your goals and risk tolerance.",
  },
  {
    icon: Shield,
    title: "Stress Testing",
    description: "What if there's a recession? A health emergency? We model the worst so you're prepared.",
  },
  {
    icon: Smartphone,
    title: "Mobile Dashboard",
    description: "Track your progress anywhere. Update your plan in real-time as life happens.",
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to plan <span className="text-[#0F766E]">unconventional careers</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Built for a generation that doesn't believe in "one job for life."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border bg-card hover:border-[#0F766E]/50 hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-[#0F766E]/10 text-[#0F766E] mb-4 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
