import Link from "next/link";
import { Compass } from "lucide-react";

const footerLinks = {
  Product: [
    { href: "/calculator", label: "Calculator" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/pricing", label: "Pricing" },
  ],
  Resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "Guides" },
    { href: "#", label: "FAQ" },
  ],
  Company: [
    { href: "#", label: "About" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-[#0F766E]" />
              <span className="text-lg font-bold">Detour</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Model the career nobody's parents had. Plan micro-retirements with confidence.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3 text-foreground">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Detour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
