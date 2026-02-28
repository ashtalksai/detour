"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager → Sabbatical in Bali",
    content: "Detour showed me I could take 9 months off at 34 without touching my retirement. I'm writing this from a rice paddy in Ubud.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Software Engineer → Career Pivot",
    content: "I was scared to leave tech for teaching. Detour modeled 50 scenarios and found a path that works. Starting my M.Ed in fall.",
    avatar: "MJ",
  },
  {
    name: "Priya Sharma",
    role: "Consultant → Early Retirement Track",
    content: "Traditional advisors said 'keep grinding.' Detour showed me I could coast at 45. That changed everything about how I work now.",
    avatar: "PS",
  },
];

export function Testimonials() {
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
            Join <span className="text-[#0F766E]">10,000+ detourists</span> living intentionally
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real people who stopped waiting for "someday" and started planning for it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
              <p className="text-foreground mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-[#0F766E] text-white">
                  <AvatarFallback className="bg-[#0F766E] text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
