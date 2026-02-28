'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, TrendingUp, Users, DollarSign, Target, 
  BarChart3, Zap, Clock, CheckCircle2, XCircle, 
  ArrowRight, Laptop, LineChart, ChevronLeft, ChevronRight,
  Rocket, Brain, Briefcase, Heart, Globe
} from 'lucide-react'

// Slide Components
function TitleSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-light rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="max-w-5xl w-full text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <span className="text-6xl font-bold tracking-tight">
            <span className="text-primary">De</span>
            <span className="text-accent">tour</span>
          </span>
        </div>
        
        {/* Tagline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Plan your micro-retirement with confidence
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          AI-powered timeline builder + Monte Carlo wealth projections
        </p>
        
        {/* CTA */}
        <a 
          href="https://detour.ashketing.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Try Detour <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

function ProblemSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">
        {/* Main content - 2/3 */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-accent" />
            </span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              The Problem
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Millennials are burnt out. But taking a break feels{' '}
            <span className="text-accent">financially impossible.</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl font-mono font-bold text-primary mb-2">72%</div>
              <p className="text-muted-foreground">of millennials report burnout</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Gallup 2024</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="text-4xl font-mono font-bold text-accent mb-2">8%</div>
              <p className="text-muted-foreground">actually take a career break</p>
              <p className="text-sm text-muted-foreground/60 mt-1">LinkedIn 2023</p>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground italic">
            Why? Because Excel spreadsheets and anxiety don't make a plan.
          </p>
        </div>
        
        {/* Quote - 1/3 */}
        <div className="flex items-center">
          <div className="bg-primary text-primary-foreground rounded-xl p-6 w-full">
            <p className="text-lg italic mb-4">
              "I wanted to take 6 months off, but I had no idea if I could afford it. So I didn't."
            </p>
            <p className="text-sm opacity-80">
              — Sarah, 32, Software Engineer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SolutionSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-background">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">
        {/* Main content - 2/3 */}
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              The Solution
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Detour turns "maybe someday" into{' '}
            <span className="text-primary">a real plan.</span>
          </h2>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Timeline Builder</h3>
                <p className="text-muted-foreground">Describe your ideal career break in plain language</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <LineChart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Monte Carlo Simulation</h3>
                <p className="text-muted-foreground">See your probability of success (not just one outcome)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Built for Micro-Retirements</h3>
                <p className="text-muted-foreground">6-month sabbaticals, not age 65 retirement</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual - 1/3 */}
        <div className="flex items-center justify-center">
          <div className="bg-muted rounded-xl p-6 w-full aspect-square flex flex-col items-center justify-center">
            <div className="text-6xl font-mono font-bold text-primary mb-2">90%</div>
            <p className="text-sm text-muted-foreground text-center">success probability</p>
            <div className="mt-4 w-full bg-primary/20 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-primary/5">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Market Opportunity
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          <span className="text-primary">$4.2B</span> market growing{' '}
          <span className="text-accent">18%</span> annually
        </h2>
        
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">$4.2B</div>
            <div className="text-lg font-medium">TAM</div>
            <p className="text-sm text-muted-foreground">US personal finance software market</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2">18M</div>
            <div className="text-lg font-medium">SAM</div>
            <p className="text-sm text-muted-foreground">Millennials considering career breaks</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-mono font-bold text-accent mb-1">+18%</div>
            <div className="text-sm font-medium">CAGR</div>
            <p className="text-xs text-muted-foreground">Market growth through 2028</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="text-3xl font-mono font-bold text-accent mb-1">180k</div>
            <div className="text-sm font-medium">SOM Year 1</div>
            <p className="text-xs text-muted-foreground">1% of SAM (conservative)</p>
          </div>
        </div>
        
        <p className="text-xl text-center text-muted-foreground">
          We're the <span className="font-semibold text-foreground">ONLY tool</span> built specifically for micro-retirements
        </p>
      </div>
    </div>
  )
}

function TractionSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-accent" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Traction
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          Pre-launch validation signals
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-mono font-bold text-foreground mb-2">1,200+</div>
            <div className="text-lg font-medium mb-1">upvotes</div>
            <p className="text-sm text-muted-foreground">r/financialindependence + r/Fire</p>
          </div>
          
          {/* Featured card */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 relative">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              KEY METRIC
            </span>
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-3xl font-mono font-bold mb-2">500+</div>
            <div className="text-lg font-medium mb-1">waitlist signups</div>
            <p className="text-sm opacity-80">From soft launch (2 weeks)</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-mono font-bold text-foreground mb-2">2,100</div>
            <div className="text-lg font-medium mb-1">searches/mo</div>
            <p className="text-sm text-muted-foreground">"sabbatical calculator" keywords</p>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Full launch pending Stage 11 GO decision
        </p>
      </div>
    </div>
  )
}

function ProductSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-6xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Laptop className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Product
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          How it works
        </h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Left - Screenshot placeholder */}
          <div className="md:col-span-3 bg-card border border-border rounded-xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <LineChart className="w-12 h-12 text-primary" />
              </div>
              <div>
                <p className="text-lg font-medium">Monte Carlo Simulation</p>
                <p className="text-sm text-muted-foreground">10,000 scenarios analyzed</p>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-primary">90%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-accent">$85k</div>
                  <div className="text-xs text-muted-foreground">Runway Needed</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Features stack */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">AI Timeline Builder</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Describe your break in plain language — AI builds the timeline
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <LineChart className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Monte Carlo Simulation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Run 10,000 scenarios to see your success probability
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Wealth Projection</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Track savings, expenses, investment returns during your break
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BusinessModelSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Business Model
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          SaaS with clear path to <span className="text-primary">$1M+ ARR</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-1">Free</h3>
            <div className="text-3xl font-bold mb-4">$0<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">•</span> 1 scenario/month</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Basic projections</li>
            </ul>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-xl p-6 relative">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="font-semibold mb-1">Starter</h3>
            <div className="text-3xl font-bold mb-4">$12<span className="text-base font-normal opacity-70">/mo</span></div>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2"><span className="text-accent">•</span> Unlimited scenarios</li>
              <li className="flex items-center gap-2"><span className="text-accent">•</span> Export reports</li>
              <li className="flex items-center gap-2"><span className="text-accent">•</span> Priority support</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold mb-1">Pro</h3>
            <div className="text-3xl font-bold mb-4">$49<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Everything in Starter</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Team sharing</li>
              <li className="flex items-center gap-2"><span className="text-primary">•</span> Advisor mode</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">90:1</div>
            <div className="text-sm text-muted-foreground">LTV:CAC</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">&lt;1 mo</div>
            <div className="text-sm text-muted-foreground">Payback</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary">$1.8M</div>
            <div className="text-sm text-muted-foreground">Year 1 ARR</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompetitionSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-primary text-primary-foreground">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </span>
          <span className="text-sm uppercase tracking-widest opacity-80">
            Competition
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          We win on <span className="text-accent">focus</span>
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/20">
                <th className="p-4 font-medium"></th>
                <th className="p-4 font-medium text-center opacity-70">Spreadsheets</th>
                <th className="p-4 font-medium text-center opacity-70">Mint / PC</th>
                <th className="p-4 font-medium text-center opacity-70">NewRetirement</th>
                <th className="p-4 font-medium text-center bg-accent/20 rounded-t-lg text-accent">Detour ✅</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10">
                <td className="p-4">AI timeline builder</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center bg-accent/10"><CheckCircle2 className="w-5 h-5 mx-auto text-accent" /></td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Monte Carlo simulation</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><CheckCircle2 className="w-5 h-5 mx-auto opacity-80" /></td>
                <td className="p-4 text-center bg-accent/10"><CheckCircle2 className="w-5 h-5 mx-auto text-accent" /></td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Micro-retirement focus</td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center"><XCircle className="w-5 h-5 mx-auto opacity-50" /></td>
                <td className="p-4 text-center bg-accent/10"><CheckCircle2 className="w-5 h-5 mx-auto text-accent" /></td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Setup time</td>
                <td className="p-4 text-center opacity-70">4+ hours</td>
                <td className="p-4 text-center opacity-70">30 min</td>
                <td className="p-4 text-center opacity-70">2 hours</td>
                <td className="p-4 text-center bg-accent/10 font-bold text-accent">10 min</td>
              </tr>
              <tr>
                <td className="p-4">Price</td>
                <td className="p-4 text-center opacity-70">Free</td>
                <td className="p-4 text-center opacity-70">Free/$5</td>
                <td className="p-4 text-center opacity-70">$120/yr</td>
                <td className="p-4 text-center bg-accent/10 rounded-b-lg font-bold text-accent">$12/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-center mt-8 text-lg opacity-90">
          Every competitor solves retirement at 65. We're the <span className="font-bold text-accent">ONLY</span> tool built for sabbaticals at 30.
        </p>
      </div>
    </div>
  )
}

function GTMSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-muted/30">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-accent" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Go-To-Market
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12">
          Product-Led Growth + SEO
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> PLG
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Freemium model → try before you buy</li>
              <li>• Upgrade trigger: 3 scenarios = see value</li>
              <li className="text-primary font-medium">Target: 5% free→paid conversion</li>
            </ul>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" /> Content/SEO
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• 2,100 searches/mo for target keywords</li>
              <li>• Low competition, high intent</li>
              <li className="text-accent font-medium">Target: 5k organic visitors/mo</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Community
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• r/financialindependence (2.1M)</li>
              <li>• r/Fire (500k)</li>
              <li className="text-primary font-medium">Target: 10% signups from Reddit</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-accent">$1,200</div>
            <div className="text-sm text-muted-foreground">Month 1 Budget</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-mono font-bold text-primary">90 days</div>
            <div className="text-sm text-muted-foreground">Sprint to Stage 11</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-background">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Team & Ask
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
          Built by ChimeStream Portfolio
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">👨‍💻</span>
            </div>
            <h3 className="font-bold text-lg">Ash Hatef</h3>
            <p className="text-primary text-sm mb-4">Founder, ChimeStream</p>
            <p className="text-sm text-muted-foreground">
              Product builder, growth marketer, 15+ SaaS launches
            </p>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-xl p-8">
            <h3 className="font-bold text-lg mb-4">The Ask</h3>
            <div className="text-3xl font-bold mb-2">GO or SKIP</div>
            <p className="text-sm opacity-90 mb-4">Decision on distribution</p>
            <div className="text-sm opacity-80">
              If GO: <span className="font-bold text-accent">$10k</span> for paid amplification
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="font-bold text-lg mb-4">Use of Funds</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Paid acquisition</span>
                <span className="font-mono text-primary">50%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Content/SEO</span>
                <span className="font-mono text-primary">30%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Partnerships</span>
                <span className="font-mono text-primary">20%</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8">
          Self-funded to Stage 11. Seeking decision, not investment.
        </p>
      </div>
    </div>
  )
}

function WhyNowSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-primary/5">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent" />
          </span>
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Why Now
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
          Remote work + FIRE movement + millennial burnout = <span className="text-primary">perfect timing</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-4">Remote Work</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 48% of knowledge workers now remote</li>
              <li>• Career breaks no longer = career death</li>
              <li>• Geographic arbitrage makes sabbaticals affordable</li>
            </ul>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-4">FIRE Movement</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• r/financialindependence grew 300% since 2020</li>
              <li>• 18M millennials considering early retirement</li>
              <li>• Financial literacy at all-time high</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-4">Burnout Epidemic</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 72% of millennials report burnout</li>
              <li>• Only 8% take action</li>
              <li className="text-primary font-medium">• Gap = opportunity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function VisionSlide() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-primary via-primary to-teal-light text-primary-foreground relative overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </span>
          <span className="text-sm uppercase tracking-widest opacity-80">
            Vision
          </span>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          The future of work is flexible. Detour makes it financially possible.
        </h2>
        
        <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl">
          In 5 years, taking a career break will be as normal as switching jobs. 
          Detour will be the default planning tool for 1M+ millennials designing 
          their own work-life timelines.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-accent font-bold mb-2">Phase 1 — Year 1</div>
            <h3 className="font-bold text-lg mb-2">Sabbaticals</h3>
            <p className="text-sm opacity-80 mb-4">Career break planning for individuals</p>
            <div className="text-sm">
              <span className="font-mono font-bold">10k</span> paid users • <span className="font-mono font-bold">$1.8M</span> ARR
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <div className="text-accent font-bold mb-2">Phase 2 — Year 2-3</div>
            <h3 className="font-bold text-lg mb-2">Flexible Work</h3>
            <p className="text-sm opacity-80 mb-4">Part-time work, side hustle modeling, B2B2C</p>
            <div className="text-sm">
              <span className="font-mono font-bold">100k</span> users • <span className="font-mono font-bold">$15M</span> ARR
            </div>
          </div>
          
          <div className="bg-accent/20 backdrop-blur rounded-xl p-6 border border-accent/50">
            <div className="text-accent font-bold mb-2">Phase 3 — Year 3-5</div>
            <h3 className="font-bold text-lg mb-2">Life Design Platform</h3>
            <p className="text-sm opacity-80 mb-4">ANY life transition: parental leave, entrepreneurship, grad school</p>
            <div className="text-sm">
              <span className="font-mono font-bold text-accent">1M</span> users • <span className="font-mono font-bold text-accent">$100M</span> ARR
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Pitch Deck Component
const slides = [
  { id: 1, component: <TitleSlide />, label: 'Title' },
  { id: 2, component: <ProblemSlide />, label: 'Problem' },
  { id: 3, component: <SolutionSlide />, label: 'Solution' },
  { id: 4, component: <MarketSlide />, label: 'Market' },
  { id: 5, component: <TractionSlide />, label: 'Traction' },
  { id: 6, component: <ProductSlide />, label: 'Product' },
  { id: 7, component: <BusinessModelSlide />, label: 'Business Model' },
  { id: 8, component: <CompetitionSlide />, label: 'Competition' },
  { id: 9, component: <GTMSlide />, label: 'GTM' },
  { id: 10, component: <TeamSlide />, label: 'Team & Ask' },
  { id: 11, component: <WhyNowSlide />, label: 'Why Now' },
  { id: 12, component: <VisionSlide />, label: 'Vision' },
]

export default function PitchDeck() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index === current) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const nextSlide = useCallback(() => {
    if (current < slides.length - 1) {
      setDirection(1)
      setCurrent(c => c + 1)
    }
  }, [current])

  const prevSlide = useCallback(() => {
    if (current > 0) {
      setDirection(-1)
      setCurrent(c => c - 1)
    }
  }, [current])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [nextSlide, prevSlide])

  // Touch/swipe navigation
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX
      const diff = touchStartX - touchEndX
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide()
        else prevSlide()
      }
    }
    
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, prevSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-background relative">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="h-full w-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={current === 0}
        className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={current === slides.length - 1}
        className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center hover:bg-card transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        <div className="flex gap-1.5 bg-card/80 backdrop-blur rounded-full px-3 py-2 border border-border">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="fixed top-6 right-6 text-sm text-muted-foreground font-mono bg-card/80 backdrop-blur rounded-full px-3 py-1 border border-border z-50">
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
