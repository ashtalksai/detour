import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — Detour",
  description: "Research, GTM strategy, marketing plan, and brand guidelines for Detour micro-retirement simulator.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {children}
    </div>
  );
}
