"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Palmtree, 
  RefreshCw, 
  TrendingDown, 
  Plus, 
  Trash2,
  GripVertical 
} from "lucide-react";
import type { TimelineEvent } from "@/app/calculator/page";

interface TimelineBuilderProps {
  events: TimelineEvent[];
  onChange: (events: TimelineEvent[]) => void;
  currentAge: number;
  retirementAge: number;
}

const eventTypes = {
  work: { icon: Briefcase, color: "#0F766E", label: "Work" },
  break: { icon: Palmtree, color: "#F97316", label: "Break" },
  pivot: { icon: RefreshCw, color: "#8B5CF6", label: "Pivot" },
  coast: { icon: TrendingDown, color: "#14B8A6", label: "Coast" },
};

export function TimelineBuilder({ events, onChange, currentAge, retirementAge }: TimelineBuilderProps) {
  const totalYears = retirementAge - currentAge;

  const addEvent = (type: TimelineEvent["type"]) => {
    const lastEvent = events[events.length - 1];
    const startAge = lastEvent ? lastEvent.endAge : currentAge;
    const newEvent: TimelineEvent = {
      id: Date.now().toString(),
      type,
      label: eventTypes[type].label,
      startAge,
      endAge: Math.min(startAge + 2, retirementAge),
      income: type === "work" ? 100000 : type === "coast" ? 50000 : 0,
      expenses: 50000,
    };
    onChange([...events, newEvent]);
  };

  const removeEvent = (id: string) => {
    onChange(events.filter((e) => e.id !== id));
  };

  const getEventWidth = (event: TimelineEvent) => {
    return ((event.endAge - event.startAge) / totalYears) * 100;
  };

  const getEventLeft = (event: TimelineEvent) => {
    return ((event.startAge - currentAge) / totalYears) * 100;
  };

  return (
    <div className="space-y-6">
      {/* Timeline visualization */}
      <div className="relative">
        {/* Age markers */}
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          {Array.from({ length: Math.ceil(totalYears / 5) + 1 }, (_, i) => (
            <span key={i}>{currentAge + i * 5}</span>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="relative h-24 bg-muted rounded-lg overflow-hidden">
          {/* Grid lines */}
          {Array.from({ length: Math.ceil(totalYears / 5) }, (_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-border"
              style={{ left: `${((i + 1) * 5 / totalYears) * 100}%` }}
            />
          ))}

          {/* Events */}
          {events.map((event, index) => {
            const EventIcon = eventTypes[event.type].icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-2 bottom-2 rounded-lg cursor-pointer group"
                style={{
                  left: `${getEventLeft(event)}%`,
                  width: `${getEventWidth(event)}%`,
                  backgroundColor: eventTypes[event.type].color,
                  minWidth: "60px",
                }}
              >
                <div className="h-full flex items-center justify-center px-2 text-white">
                  <EventIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-xs font-medium truncate">{event.label}</span>
                </div>
                
                {/* Delete button */}
                <button
                  onClick={() => removeEvent(event.id)}
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4">
          {Object.entries(eventTypes).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <div 
                className="h-3 w-3 rounded" 
                style={{ backgroundColor: value.color }}
              />
              <span>{value.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Add event buttons */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground mr-2">Add phase:</span>
        {Object.entries(eventTypes).map(([key, value]) => {
          const Icon = value.icon;
          return (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => addEvent(key as TimelineEvent["type"])}
              className="gap-1.5"
              style={{ borderColor: value.color, color: value.color }}
            >
              <Icon className="h-3.5 w-3.5" />
              {value.label}
            </Button>
          );
        })}
      </div>

      {/* Event list */}
      <div className="space-y-2">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 p-3 rounded-lg border bg-card"
          >
            <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
            
            <div 
              className="h-8 w-8 rounded-lg flex items-center justify-center text-white"
              style={{ backgroundColor: eventTypes[event.type].color }}
            >
              {(() => {
                const Icon = eventTypes[event.type].icon;
                return <Icon className="h-4 w-4" />;
              })()}
            </div>

            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-foreground">{event.label}</div>
              <div className="text-xs text-muted-foreground">
                Ages {event.startAge} - {event.endAge} ({event.endAge - event.startAge} years)
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm font-medium text-[#0F766E]">
                ${(event.income || 0).toLocaleString()}/yr
              </div>
              <div className="text-xs text-muted-foreground">
                -${(event.expenses || 0).toLocaleString()}/yr
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeEvent(event.id)}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
