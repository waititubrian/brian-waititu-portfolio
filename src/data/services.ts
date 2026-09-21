import type { LucideIcon } from "lucide-react";
import { Rocket, Building2, Plug, Workflow, LayoutDashboard } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Rocket,
    title: "SaaS MVPs",
    description:
      "Take a product idea from zero to a working MVP — auth, billing, and core workflows built on a stack that scales with you.",
  },
  {
    icon: Building2,
    title: "Business Web Applications",
    description:
      "Custom web apps that replace spreadsheets and manual processes with reliable, purpose-built software.",
  },
  {
    icon: Plug,
    title: "REST APIs & Backend Systems",
    description:
      "Well-structured APIs and backend services designed around clear data models and predictable behavior.",
  },
  {
    icon: Workflow,
    title: "AI Integrations & Workflow Automation",
    description:
      "Connect AI models and third-party services into your existing tools to automate repetitive, manual work.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Internal Tools",
    description:
      "Internal dashboards that give your team visibility into data and operations without the overhead of off-the-shelf tools.",
  },
];
