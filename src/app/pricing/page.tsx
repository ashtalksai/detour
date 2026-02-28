"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Building } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    description: "For the curious planner",
    price: 0,
    period: "forever",
    icon: Zap,
    color: "#64748B",
    features: [
      "1 active scenario",
      "Basic wealth projection",
      "Monthly updates",
      "Community support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pathfinder",
    description: "For serious life planners",
    price: 12,
    period: "month",
    icon: Sparkles,
    color: "#0F766E",
    features: [
      "Unlimited scenarios",
      "Monte Carlo simulations (10,000+)",
      "AI recommendations",
      "Milestone tracking",
      "Real-time market updates",
      "Export to PDF",
      "Priority support",
    ],
    cta: "Start 14-day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For financial advisors",
    price: 49,
    period: "month",
    icon: Building,
    color: "#F97316",
    features: [
      "Everything in Pathfinder",
      "Client management dashboard",
      "White-label reports",
      "API access",
      "Bulk scenario modeling",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes! Cancel with one click, no questions asked. You'll keep access until the end of your billing period.",
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption. We never store your login credentials—we use read-only connections via Plaid.",
  },
  {
    question: "What's a Monte Carlo simulation?",
    answer: "It's a statistical method that runs thousands of possible market scenarios to give you a confidence range, not just a single guess.",
  },
  {
    question: "Can I use Detour with my financial advisor?",
    answer: "Yes! Share your scenarios via link, or have your advisor sign up for our Enterprise plan for full collaboration.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0FDFA] to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Simple pricing for <span className="text-[#0F766E]">unconventional careers</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Start free, upgrade when you're ready to get serious about your future.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !annual ? "bg-white shadow text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                annual ? "bg-white shadow text-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
              <Badge className="ml-2 bg-[#0F766E]">Save 20%</Badge>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const displayPrice = annual && plan.price > 0 
              ? Math.round(plan.price * 0.8) 
              : plan.price;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${
                  plan.popular 
                    ? "border-[#0F766E] shadow-lg ring-1 ring-[#0F766E]" 
                    : ""
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#0F766E]">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div 
                      className="h-12 w-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${plan.color}15` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: plan.color }} />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div>
                      <span className="text-4xl font-bold text-foreground">
                        ${displayPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{plan.period}
                      </span>
                    </div>

                    <Button 
                      className="w-full"
                      style={{ 
                        backgroundColor: plan.popular ? "#F97316" : plan.price === 0 ? "#0F766E" : undefined,
                      }}
                      variant={plan.popular || plan.price === 0 ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-[#0F766E] mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <Button variant="outline" size="lg">
            Talk to a human
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
