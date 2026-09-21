import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

// TODO: personalize this with specifics only you can verify — years of
// experience, industries you've worked in, or a notable engagement —
// without overstating anything.
const focusPoints = [
  "Building SaaS MVPs, dashboards, and business web applications on the Next.js ecosystem",
  "Bringing a QA background — testing enterprise applications and building automation frameworks",
  "Thinking about edge cases and real-world usage from the start, not as an afterthought",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="About Me"
          title="A full-stack developer with a quality-first background"
          className="lg:pr-8"
        />

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <p className="text-base text-muted-foreground text-pretty sm:text-lg">
            I&apos;m a full-stack developer building SaaS MVPs, dashboards,
            business web applications, and the APIs behind them on the
            Next.js ecosystem.
          </p>
          <p className="text-base text-muted-foreground text-pretty sm:text-lg">
            My background is in QA Engineering — testing enterprise
            applications and building the automation frameworks that keep
            them reliable as they grow. That&apos;s where I developed a close
            attention to edge cases and real-world usage, and it shapes how
            I build today: with quality in mind from the start, not bolted
            on at the end.
          </p>
          <ul className="mt-2 flex flex-col gap-3">
            {focusPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
