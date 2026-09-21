import { services } from "@/data/services";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="What I Build"
          title="Services"
          description="I partner with founders and businesses to ship software that actually works in production."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <Card className="h-full transition-colors duration-300 hover:border-primary/40">
                  <CardContent className="flex flex-col gap-4">
                    <div className="bg-gradient-brand flex size-10 items-center justify-center rounded-lg">
                      <Icon className="size-5 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
