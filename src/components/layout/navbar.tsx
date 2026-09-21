"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { GithubIcon, LinkedinIcon, UpworkIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-colors duration-300",
        scrolled && "border-border bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" nativeButton={false} render={<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" />}>
            <GithubIcon className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" nativeButton={false} render={<a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />}>
            <LinkedinIcon className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" nativeButton={false} render={<a href={siteConfig.links.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork" />}>
            <UpworkIcon className="size-4" />
          </Button>
          <Button size="sm" nativeButton={false} render={<a href="#contact" />} className="ml-2">
            Contact Me
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <Link
                      href={item.href}
                      className="rounded-md px-2 py-2.5 text-base text-foreground transition-colors hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-2 border-t border-border px-4 pt-4">
              <Button variant="outline" size="icon" nativeButton={false} render={<a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" />}>
                <GithubIcon className="size-4" />
              </Button>
              <Button variant="outline" size="icon" nativeButton={false} render={<a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />}>
                <LinkedinIcon className="size-4" />
              </Button>
              <Button variant="outline" size="icon" nativeButton={false} render={<a href={siteConfig.links.upwork} target="_blank" rel="noopener noreferrer" aria-label="Upwork" />}>
                <UpworkIcon className="size-4" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
