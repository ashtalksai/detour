"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Compass } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0F766E] to-[#0D5C56]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-6">
            <Compass className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Ready to plan your detour?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands who've discovered they can take breaks, pivot careers, and still retire comfortably. Your unconventional path is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 h-12 text-base"
            >
              <Link href="/calculator">
                Start Free Simulation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 text-base border-white/30 text-white hover:bg-white/10"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/60">
            No credit card required. Free forever for basic planning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
