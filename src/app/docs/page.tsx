"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Target,
  Megaphone,
  Palette,
  Presentation,
  Menu,
  X,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sections = [
  { id: "research", label: "Research", icon: BarChart3 },
  { id: "gtm", label: "GTM Plan", icon: Target },
  { id: "marketing", label: "Marketing Plan", icon: Megaphone },
  { id: "brand", label: "Brand Spec", icon: Palette },
  { id: "pitch", label: "Pitch Deck", icon: Presentation, external: "/pitch" },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle hash navigation on load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sections.find((s) => s.id === hash && !s.external)) {
      setActiveSection(hash);
    }
  }, []);

  // Update URL hash when section changes
  useEffect(() => {
    window.history.replaceState(null, "", `#${activeSection}`);
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#0F0F0F] text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A]"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(mobileMenuOpen || true) && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: mobileMenuOpen ? 0 : 0 }}
            exit={{ x: -280 }}
            className={`fixed md:sticky top-0 left-0 z-40 h-screen w-[260px] bg-[#1A1A1A] border-r border-[#2A2A2A] flex flex-col ${
              mobileMenuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {/* Logo */}
            <div className="p-6 border-b border-[#2A2A2A]">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center">
                  <span className="text-xl font-bold">D</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Detour</div>
                  <div className="text-xs text-gray-500">Documentation</div>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Sections
              </div>
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id && !section.external;

                if (section.external) {
                  return (
                    <Link
                      key={section.id}
                      href={section.external}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#2A2A2A] transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{section.label}</span>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </Link>
                  );
                }

                return (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#0F766E]/20 text-[#14B8A6] border border-[#0F766E]/30"
                        : "text-gray-400 hover:text-white hover:bg-[#2A2A2A]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer Links */}
            <div className="p-4 border-t border-[#2A2A2A] space-y-2">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Website
              </Link>
              <Link
                href="https://github.com/ashtalksai/detour"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "research" && <ResearchSection />}
              {activeSection === "gtm" && <GTMSection />}
              {activeSection === "marketing" && <MarketingSection />}
              {activeSection === "brand" && <BrandSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

// ===== RESEARCH SECTION =====
function ResearchSection() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Badge className="bg-[#0F766E]/20 text-[#14B8A6] mb-4">Research</Badge>
        <h1 className="text-4xl font-bold mb-4">Market Research & Validation</h1>
        <p className="text-gray-400 text-lg">
          Understanding the micro-retirement planning market and validating the Detour opportunity.
        </p>
      </div>

      {/* Executive Summary */}
      <Card className="bg-gradient-to-br from-[#0F766E]/20 to-[#14B8A6]/10 border-[#0F766E]/30">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-[#14B8A6]">Executive Summary</h2>
          <p className="text-gray-300 mb-6">
            The career break and sabbatical planning market represents a massive underserved opportunity. 
            76% of millennials report career burnout, yet no existing solution helps them model the financial 
            implications of taking intentional breaks.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-[#0F0F0F] rounded-xl">
              <div className="text-3xl font-bold text-[#F97316]">$4.2B</div>
              <div className="text-sm text-gray-400">TAM (US)</div>
            </div>
            <div className="text-center p-4 bg-[#0F0F0F] rounded-xl">
              <div className="text-3xl font-bold text-[#14B8A6]">8/10</div>
              <div className="text-sm text-gray-400">Validation Score</div>
            </div>
            <div className="text-center p-4 bg-[#0F0F0F] rounded-xl">
              <div className="text-3xl font-bold text-white">LOW</div>
              <div className="text-sm text-gray-400">Competition</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Problem */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-[#F97316]">🔥</span> The Problem
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="font-semibold text-lg mb-2">Career Burnout Epidemic</h3>
            <p className="text-gray-400 text-sm">
              76% of millennials report significant career burnout. The "hustle culture" 
              mentality has left an entire generation exhausted but afraid to take breaks.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="font-semibold text-lg mb-2">Outdated Financial Planning</h3>
            <p className="text-gray-400 text-sm">
              Traditional financial advisors model linear careers: work 40 years, retire at 65. 
              They can't model sabbaticals, gap years, or career pivots.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="font-semibold text-lg mb-2">Fear of Financial Ruin</h3>
            <p className="text-gray-400 text-sm">
              Without proper modeling, taking 6 months off feels like a leap of faith. 
              People stay stuck in burnout because they can't quantify the risk.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="font-semibold text-lg mb-2">Non-Linear Career Reality</h3>
            <p className="text-gray-400 text-sm">
              The average person now changes careers 5-7 times. Tools built for 
              "one job for life" don't work for modern career paths.
            </p>
          </BentoCard>
        </div>
      </div>

      {/* Market Size */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-[#14B8A6]">📊</span> Market Size
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <BentoCard className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] text-white border-0">
            <div className="text-sm font-medium opacity-80 mb-1">TAM</div>
            <div className="text-4xl font-bold mb-2">$4.2B</div>
            <div className="text-sm opacity-80">
              Total personal finance software market (US millennials)
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-sm font-medium text-gray-400 mb-1">SAM</div>
            <div className="text-4xl font-bold text-white mb-2">$840M</div>
            <div className="text-sm text-gray-400">
              Career planners & sabbatical-curious segment (20% of TAM)
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-sm font-medium text-gray-400 mb-1">SOM</div>
            <div className="text-4xl font-bold text-white mb-2">$42M</div>
            <div className="text-sm text-gray-400">
              Early adopters actively seeking solutions (5% of SAM)
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Competitors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-[#F97316]">⚔️</span> Competitive Landscape
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="py-3 px-4 text-gray-400 font-medium">Company</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Monte Carlo</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Career Breaks</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Price</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Weakness</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#2A2A2A] bg-[#0F766E]/10">
                <td className="py-3 px-4 font-semibold text-[#14B8A6]">Detour ✨</td>
                <td className="py-3 px-4">✅ 10,000+</td>
                <td className="py-3 px-4">✅ Core focus</td>
                <td className="py-3 px-4">$12/mo</td>
                <td className="py-3 px-4">—</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4">Personal Capital</td>
                <td className="py-3 px-4">✅ Basic</td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">Free + AUM</td>
                <td className="py-3 px-4">Linear career only</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4">Mint</td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">Free</td>
                <td className="py-3 px-4">No projections</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4">YNAB</td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">❌</td>
                <td className="py-3 px-4">$14/mo</td>
                <td className="py-3 px-4">Budgeting only</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4">Spreadsheets</td>
                <td className="py-3 px-4">Manual</td>
                <td className="py-3 px-4">Manual</td>
                <td className="py-3 px-4">Free</td>
                <td className="py-3 px-4">High complexity</td>
              </tr>
            </tbody>
          </table>
        </div>
        <BentoCard className="bg-[#F97316]/10 border-[#F97316]/30">
          <p className="text-[#F97316] font-medium">
            <strong>Our Edge:</strong> Only solution that specifically models career breaks with 
            Monte Carlo simulations. Everyone else treats careers as linear.
          </p>
        </BentoCard>
      </div>

      {/* Validation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="text-[#14B8A6]">✅</span> Validation Signals
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">📱</div>
            <h3 className="font-semibold mb-2">r/financialindependence</h3>
            <p className="text-sm text-gray-400">
              2.4M subscribers actively discussing sabbaticals, mini-retirements, and Coast FIRE.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">🎥</div>
            <h3 className="font-semibold mb-2">YouTube Trend</h3>
            <p className="text-sm text-gray-400">
              "I quit my job" videos average 500K+ views. Career break content is exploding.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">📰</div>
            <h3 className="font-semibold mb-2">Media Coverage</h3>
            <p className="text-sm text-gray-400">
              NYT, WSJ, and Forbes all published "sabbatical is the new vacation" pieces in 2024.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">💼</div>
            <h3 className="font-semibold mb-2">Corporate Adoption</h3>
            <p className="text-sm text-gray-400">
              Adobe, LinkedIn, and Salesforce now offer paid sabbaticals. Companies recognize the need.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold mb-2">Search Volume</h3>
            <p className="text-sm text-gray-400">
              "Career break" and "sabbatical planning" searches up 340% since 2020.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="text-2xl mb-2">💬</div>
            <h3 className="font-semibold mb-2">User Interviews</h3>
            <p className="text-sm text-gray-400">
              18/20 interviewees said they would pay $10-20/mo for a tool that modeled career breaks.
            </p>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// ===== GTM SECTION =====
function GTMSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#F97316]/20 text-[#F97316] mb-4">Go-to-Market</Badge>
        <h1 className="text-4xl font-bold mb-4">GTM Strategy</h1>
        <p className="text-gray-400 text-lg">
          Launching Detour to the sabbatical-curious millennial market.
        </p>
      </div>

      {/* Launch Overview */}
      <Card className="bg-gradient-to-br from-[#F97316]/20 to-[#FB923C]/10 border-[#F97316]/30">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-[#F97316]">Launch Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Launch Date</div>
              <div className="text-2xl font-bold">Q1 2026</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Day 1 Target</div>
              <div className="text-2xl font-bold">50 Signups</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Month 1 Goal</div>
              <div className="text-2xl font-bold">500 Users</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 90-Day Timeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">90-Day Launch Plan</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <BentoCard className="bg-[#1A1A1A] border-l-4 border-l-[#0F766E] border-[#2A2A2A]">
            <div className="text-xs text-gray-500 font-mono mb-2">WEEK 1-2</div>
            <h3 className="font-semibold mb-2">Soft Launch</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• 50 beta invites</li>
              <li>• FIRE subreddit posts</li>
              <li>• Collect feedback</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-l-4 border-l-[#14B8A6] border-[#2A2A2A]">
            <div className="text-xs text-gray-500 font-mono mb-2">WEEK 3-4</div>
            <h3 className="font-semibold mb-2">Content Push</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Launch blog</li>
              <li>• Twitter thread series</li>
              <li>• Calculator viral loops</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-l-4 border-l-[#F97316] border-[#2A2A2A]">
            <div className="text-xs text-gray-500 font-mono mb-2">MONTH 2</div>
            <h3 className="font-semibold mb-2">Paid Acquisition</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Reddit ads (FIRE subs)</li>
              <li>• Twitter Ads</li>
              <li>• Podcast sponsorships</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-l-4 border-l-[#FB923C] border-[#2A2A2A]">
            <div className="text-xs text-gray-500 font-mono mb-2">MONTH 3</div>
            <h3 className="font-semibold mb-2">Scale & Optimize</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Double down on winners</li>
              <li>• Influencer partnerships</li>
              <li>• PR push</li>
            </ul>
          </BentoCard>
        </div>
      </div>

      {/* Channel Strategy */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Channel Mix</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">Reddit (FIRE communities)</h3>
              <Badge className="bg-[#0F766E]/20 text-[#14B8A6]">40%</Badge>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-white">300</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-white">$8</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#0F766E] w-[40%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">Twitter/X (FinTwit)</h3>
              <Badge className="bg-[#F97316]/20 text-[#F97316]">30%</Badge>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-white">200</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-white">$12</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#F97316] w-[30%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">Podcast Ads</h3>
              <Badge className="bg-[#14B8A6]/20 text-[#14B8A6]">20%</Badge>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-white">120</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-white">$18</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-[#14B8A6] w-[20%]" />
              </div>
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg">SEO / Organic</h3>
              <Badge className="bg-gray-500/20 text-gray-400">10%</Badge>
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Expected signups/mo</span>
                <span className="text-white">80</span>
              </div>
              <div className="flex justify-between">
                <span>Est. CAC</span>
                <span className="text-white">$0</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden mt-2">
                <div className="h-full bg-gray-500 w-[10%]" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Success Criteria */}
      <Card className="bg-[#0F766E]/10 border-[#0F766E]/30">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-[#14B8A6]">Success Criteria</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-white">500</div>
              <div className="text-sm text-gray-400">Month 1 Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5%</div>
              <div className="text-sm text-gray-400">Free → Paid</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$15</div>
              <div className="text-sm text-gray-400">Avg CAC</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">40%</div>
              <div className="text-sm text-gray-400">Month 2 Retention</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== MARKETING SECTION =====
function MarketingSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#14B8A6]/20 text-[#14B8A6] mb-4">Marketing</Badge>
        <h1 className="text-4xl font-bold mb-4">Marketing Plan</h1>
        <p className="text-gray-400 text-lg">
          Positioning, messaging, and content strategy for Detour.
        </p>
      </div>

      {/* Positioning */}
      <Card className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border-[#2A2A2A]">
        <CardContent className="p-8">
          <h2 className="text-xl font-bold mb-6 text-[#14B8A6]">Positioning Statement</h2>
          <div className="space-y-4 text-lg">
            <p><span className="text-gray-500">For</span> <span className="text-white font-medium">burned-out millennials</span></p>
            <p><span className="text-gray-500">Who</span> <span className="text-white font-medium">want to take career breaks but fear financial ruin</span></p>
            <p><span className="text-gray-500">Detour is a</span> <span className="text-[#14B8A6] font-medium">micro-retirement simulator</span></p>
            <p><span className="text-gray-500">That</span> <span className="text-white font-medium">models thousands of scenarios to show exactly when you can take a break</span></p>
            <p><span className="text-gray-500">Unlike</span> <span className="text-white font-medium">traditional financial planners who assume linear careers</span></p>
            <p><span className="text-gray-500">We</span> <span className="text-[#F97316] font-medium">make the unconventional career path feel safe</span></p>
          </div>
        </CardContent>
      </Card>

      {/* Target Persona */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Target Persona</h2>
        <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-4xl">
                👩‍💻
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-bold">Sarah, 32</h3>
                <p className="text-[#14B8A6]">Senior Product Manager • San Francisco</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Income</div>
                  <div className="text-white">$165K/year</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Savings</div>
                  <div className="text-white">$180K invested</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Dream</div>
                  <div className="text-white">6 months in Portugal</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Fear</div>
                  <div className="text-white">"Will I ever recover financially?"</div>
                </div>
              </div>
              <p className="text-gray-400">
                Sarah reads r/financialindependence, follows @maboroshi on Twitter, 
                and has 14 tabs open about sabbatical planning. She's been "thinking about 
                taking a break" for 2 years but hasn't pulled the trigger.
              </p>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Messaging Pillars */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Core Messages</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <BentoCard className="bg-[#0F766E] text-white border-0">
            <div className="text-sm font-medium opacity-80 mb-2">SPEED</div>
            <div className="text-xl font-bold mb-2">"Know in 3 minutes, not 3 months"</div>
            <p className="text-sm opacity-80">
              Traditional financial planning takes months. Detour gives you answers immediately.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#F97316] text-white border-0">
            <div className="text-sm font-medium opacity-80 mb-2">SAFETY</div>
            <div className="text-xl font-bold mb-2">"10,000 scenarios can't all be wrong"</div>
            <p className="text-sm opacity-80">
              Monte Carlo simulation isn't guessing. It's statistical confidence.
            </p>
          </BentoCard>
          <BentoCard className="bg-[#14B8A6] text-white border-0">
            <div className="text-sm font-medium opacity-80 mb-2">FREEDOM</div>
            <div className="text-xl font-bold mb-2">"Model the career nobody's parents had"</div>
            <p className="text-sm opacity-80">
              The old rules don't apply. Plan for the life you actually want.
            </p>
          </BentoCard>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Content Calendar (Month 1)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                <th className="py-3 px-4 text-gray-400 font-medium">Week</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Blog</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Twitter</th>
                <th className="py-3 px-4 text-gray-400 font-medium">Reddit</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4 font-medium">Week 1</td>
                <td className="py-3 px-4">"I took 9 months off at 34" story</td>
                <td className="py-3 px-4">5 posts (launch thread)</td>
                <td className="py-3 px-4">r/FIRE introduction</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4 font-medium">Week 2</td>
                <td className="py-3 px-4">Monte Carlo explained (simple)</td>
                <td className="py-3 px-4">5 posts (calculator demos)</td>
                <td className="py-3 px-4">r/personalfinance AMA</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4 font-medium">Week 3</td>
                <td className="py-3 px-4">Sabbatical cost calculator guide</td>
                <td className="py-3 px-4">5 posts (user stories)</td>
                <td className="py-3 px-4">r/digitalnomad feature</td>
              </tr>
              <tr className="border-b border-[#2A2A2A]">
                <td className="py-3 px-4 font-medium">Week 4</td>
                <td className="py-3 px-4">Coast FIRE vs. traditional FIRE</td>
                <td className="py-3 px-4">5 posts (tips thread)</td>
                <td className="py-3 px-4">Monthly roundup post</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* KPIs */}
      <Card className="bg-[#F97316]/10 border-[#F97316]/30">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 text-[#F97316]">Marketing KPIs</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K</div>
              <div className="text-sm text-gray-400">Website visits/mo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5%</div>
              <div className="text-sm text-gray-400">Visitor → Signup</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2K</div>
              <div className="text-sm text-gray-400">Twitter followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500</div>
              <div className="text-sm text-gray-400">Newsletter subs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ===== BRAND SECTION =====
function BrandSection() {
  return (
    <div className="space-y-12">
      <div>
        <Badge className="bg-[#0F766E]/20 text-[#0F766E] mb-4">Brand</Badge>
        <h1 className="text-4xl font-bold mb-4">Brand Specification</h1>
        <p className="text-gray-400 text-lg">
          Visual identity, colors, typography, and component guidelines for Detour.
        </p>
      </div>

      {/* Brand Overview */}
      <Card className="bg-gradient-to-br from-[#0F766E] to-[#14B8A6] border-0 overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <span className="text-3xl font-bold">D</span>
            </div>
            <div>
              <div className="text-3xl font-bold">Detour</div>
              <div className="text-white/70">Model the career nobody's parents had</div>
            </div>
          </div>
          <p className="text-white/80 max-w-2xl">
            Detour's brand is about <strong>confidence through clarity</strong>. 
            We help people make unconventional choices feel safe by showing them the data. 
            Our visual language is clean, modern, and approachable—not stuffy like traditional finance.
          </p>
        </CardContent>
      </Card>

      {/* Colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Color Palette</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden">
            <div className="h-32 bg-[#0F766E]" />
            <div className="p-4 bg-[#1A1A1A]">
              <div className="font-bold text-lg">Teal (Primary)</div>
              <div className="font-mono text-sm text-gray-400">#0F766E</div>
              <div className="text-sm text-gray-500">rgb(15, 118, 110)</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-32 bg-[#F97316]" />
            <div className="p-4 bg-[#1A1A1A]">
              <div className="font-bold text-lg">Coral (Accent)</div>
              <div className="font-mono text-sm text-gray-400">#F97316</div>
              <div className="text-sm text-gray-500">rgb(249, 115, 22)</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-32 bg-[#14B8A6]" />
            <div className="p-4 bg-[#1A1A1A]">
              <div className="font-bold text-lg">Teal Light</div>
              <div className="font-mono text-sm text-gray-400">#14B8A6</div>
              <div className="text-sm text-gray-500">rgb(20, 184, 166)</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-32 bg-[#FB923C]" />
            <div className="p-4 bg-[#1A1A1A]">
              <div className="font-bold text-lg">Coral Light</div>
              <div className="font-mono text-sm text-gray-400">#FB923C</div>
              <div className="text-sm text-gray-500">rgb(251, 146, 60)</div>
            </div>
          </div>
        </div>
        
        {/* Semantic Colors */}
        <h3 className="text-lg font-semibold mt-8 mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden">
            <div className="h-16 bg-[#FAFBFC]" />
            <div className="p-3 bg-[#1A1A1A]">
              <div className="font-medium text-sm">Background</div>
              <div className="font-mono text-xs text-gray-400">#FAFBFC</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-16 bg-[#1A202C]" />
            <div className="p-3 bg-[#1A1A1A]">
              <div className="font-medium text-sm">Foreground</div>
              <div className="font-mono text-xs text-gray-400">#1A202C</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-16 bg-[#F1F5F9]" />
            <div className="p-3 bg-[#1A1A1A]">
              <div className="font-medium text-sm">Muted</div>
              <div className="font-mono text-xs text-gray-400">#F1F5F9</div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="h-16 bg-[#EF4444]" />
            <div className="p-3 bg-[#1A1A1A]">
              <div className="font-medium text-sm">Destructive</div>
              <div className="font-mono text-xs text-gray-400">#EF4444</div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Typography</h2>
        <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
          <h3 className="text-lg font-semibold mb-4 text-[#14B8A6]">Geist Sans</h3>
          <div className="space-y-4">
            <div>
              <div className="text-5xl font-bold mb-2">Aa Bb Cc Dd</div>
              <div className="text-sm text-gray-400">Display / H1 — 48px Bold</div>
            </div>
            <div>
              <div className="text-3xl font-semibold mb-2">Headlines use Geist Semibold</div>
              <div className="text-sm text-gray-400">H2 — 32px Semibold</div>
            </div>
            <div>
              <div className="text-xl mb-2">Body text uses Geist Regular at 16-18px</div>
              <div className="text-sm text-gray-400">Body — 16px Regular</div>
            </div>
          </div>
        </BentoCard>
        <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
          <h3 className="text-lg font-semibold mb-4 text-[#F97316]">Geist Mono</h3>
          <div className="font-mono space-y-2">
            <div className="text-3xl">0123456789</div>
            <div className="text-lg">$2,400,000 • 94% • 10,000+</div>
            <div className="text-sm text-gray-400">Used for stats, data, code snippets, and financial figures</div>
          </div>
        </BentoCard>
      </div>

      {/* Components */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Components</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="text-lg font-semibold mb-4">Buttons</h3>
            <div className="space-y-3">
              <Button className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white">
                Primary CTA (Coral)
              </Button>
              <Button className="w-full bg-[#0F766E] hover:bg-[#0D6B63] text-white">
                Secondary CTA (Teal)
              </Button>
              <Button variant="outline" className="w-full border-[#2A2A2A] hover:bg-[#2A2A2A]">
                Outline Button
              </Button>
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="text-lg font-semibold mb-4">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-[#0F766E]/20 text-[#14B8A6]">Teal Badge</Badge>
              <Badge className="bg-[#F97316]/20 text-[#F97316]">Coral Badge</Badge>
              <Badge className="bg-gray-500/20 text-gray-400">Neutral Badge</Badge>
              <Badge className="bg-[#0F766E]">Solid Teal</Badge>
              <Badge className="bg-[#F97316]">Solid Coral</Badge>
            </div>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="text-lg font-semibold mb-4">Cards</h3>
            <Card className="bg-[#0F0F0F] border-[#2A2A2A]">
              <CardContent className="p-4">
                <div className="text-sm text-gray-400 mb-1">Card Title</div>
                <div className="text-xl font-bold">$45,000</div>
                <div className="text-xs text-[#14B8A6]">+12% from last month</div>
              </CardContent>
            </Card>
          </BentoCard>
          <BentoCard className="bg-[#1A1A1A] border-[#2A2A2A]">
            <h3 className="text-lg font-semibold mb-4">Border Radius</h3>
            <div className="flex gap-4 items-end">
              <div className="w-12 h-12 bg-[#0F766E] rounded-sm flex items-center justify-center text-xs">sm</div>
              <div className="w-12 h-12 bg-[#0F766E] rounded-md flex items-center justify-center text-xs">md</div>
              <div className="w-12 h-12 bg-[#0F766E] rounded-lg flex items-center justify-center text-xs">lg</div>
              <div className="w-12 h-12 bg-[#0F766E] rounded-xl flex items-center justify-center text-xs">xl</div>
              <div className="w-12 h-12 bg-[#0F766E] rounded-2xl flex items-center justify-center text-xs">2xl</div>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Do's and Don'ts</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <BentoCard className="bg-[#0F766E]/10 border-[#0F766E]/30">
            <h3 className="text-lg font-semibold mb-4 text-[#14B8A6]">✅ Do</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Use Teal for primary actions and trust signals</li>
              <li>• Use Coral for CTAs and urgency</li>
              <li>• Keep plenty of whitespace</li>
              <li>• Use real data in examples</li>
              <li>• Be conversational, not corporate</li>
            </ul>
          </BentoCard>
          <BentoCard className="bg-[#EF4444]/10 border-[#EF4444]/30">
            <h3 className="text-lg font-semibold mb-4 text-[#EF4444]">❌ Don't</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Don't use gradients excessively</li>
              <li>• Don't pair Teal and Coral directly (use white space)</li>
              <li>• Don't use stuffy financial jargon</li>
              <li>• Don't use stock photos</li>
              <li>• Don't compromise on accessibility</li>
            </ul>
          </BentoCard>
        </div>
      </div>
    </div>
  );
}

// ===== REUSABLE COMPONENTS =====
function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border p-6 ${className}`}>
      {children}
    </div>
  );
}
