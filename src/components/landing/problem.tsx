"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, DollarSign, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Burnout is real",
    description: "76% of millennials report career burnout, but fear taking a break will derail their future.",
  },
  {
    icon: DollarSign,
    title: "Traditional planning fails",
    description: "Financial advisors still think careers are linear. Nobody models sabbaticals or pivot years.",
  },
  {
    icon: HelpCircle,
    title: "Guesswork isn't a strategy",
    description: '"Can I afford 6 months off?" shouldn\'t require a leap of faith. It requires data.',
  },
];

export function Problem() {
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
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700 mb-4">
            <AlertCircle className="mr-2 h-4 w-4" />
            The Problem
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your parents' career advice is obsolete
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Work 40 years, retire at 65, die with money. That's not how we live anymore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600 mb-4">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
