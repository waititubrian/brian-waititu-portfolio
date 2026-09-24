"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, UpworkIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";
import { sendContactMessage, type ContactFormState } from "@/lib/actions/contact";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactFormState = { status: "idle" };

const contactLinks = [
  { label: "Email", value: "Send a message", href: (email: string) => `mailto:${email}`, icon: Mail },
  { label: "GitHub", value: "View my work", href: () => siteConfig.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "Connect with me", href: () => siteConfig.links.linkedin, icon: LinkedinIcon },
  { label: "Upwork", value: "Hire me on Upwork", href: () => siteConfig.links.upwork, icon: UpworkIcon },
];

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const lastHandledState = useRef<ContactFormState | null>(null);

  useEffect(() => {
    if (state === lastHandledState.current) return;
    lastHandledState.current = state;

    if (state.status === "success") {
      toast.success(state.message ?? "Message sent.");
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something reliable"
          description="Have a project in mind, an MVP to ship, or a workflow that needs automating? I'd like to hear about it."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="flex flex-col gap-4">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href(siteConfig.email)}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="bg-gradient-brand flex size-10 shrink-0 items-center justify-center rounded-lg">
                  <Icon className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form action={formAction} className="flex flex-col gap-5">
              {/* Honeypot field - hidden from real users, catches simple bots */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required disabled={isPending} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" required disabled={isPending} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about your project..."
                  rows={6}
                  required
                  disabled={isPending}
                />
              </div>

              <Button type="submit" size="lg" disabled={isPending} className="self-start">
                {isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" data-icon="inline-start" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
