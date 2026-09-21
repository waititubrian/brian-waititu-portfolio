"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, UpworkIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion ? undefined : container;
  const childVariants = prefersReducedMotion ? undefined : item;

  return (
    <section
      id="top"
      className="bg-grid-fade relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="bg-gradient-brand pointer-events-none absolute top-1/3 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full opacity-20 blur-[100px]"
      />

      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center"
      >
        <motion.span
          variants={childVariants}
          className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm text-muted-foreground"
        >
          {siteConfig.role}
        </motion.span>

        <motion.h1
          variants={childVariants}
          className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient-brand">{siteConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl"
        >
          Full-Stack Developer building SaaS MVPs, dashboards, and business
          web applications with the Next.js ecosystem, with a background in
          software quality and test automation for enterprise applications.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-sm text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary" aria-hidden />
          Open to freelance and full-time roles
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button size="lg" render={<a href="#projects" />}>
            View Projects
            <ArrowRight className="size-4" data-icon="inline-end" />
          </Button>
          <Button size="lg" variant="outline" render={<a href="#contact" />}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={childVariants} className="mt-10 flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
          <span className="text-border">·</span>
          <a
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <UpworkIcon className="size-4" />
            Upwork
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
