import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const gallery = project.images && project.images.length > 0 ? project.images : [undefined];

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {project.name}
      </h1>
      <p className="mt-3 text-lg text-muted-foreground text-pretty">{project.tagline}</p>

      <div className="mt-6">
        {project.live ? (
          <Button
            nativeButton={false}
            render={<a href={project.live} target="_blank" rel="noopener noreferrer" />}
          >
            Visit live site
            <ArrowUpRight className="size-4" data-icon="inline-end" />
          </Button>
        ) : (
          <Badge variant="outline" className="font-normal">
            Coming soon
          </Badge>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {gallery.map((src, i) => (
          <div
            key={src ?? i}
            className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary"
          >
            {src ? (
              <Image
                src={src}
                alt={`${project.name} screenshot ${i + 1}`}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover object-top"
              />
            ) : (
              <div className="bg-gradient-brand flex h-full w-full items-center justify-center opacity-20">
                <FolderGit2 className="size-16 text-foreground" strokeWidth={1.25} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {project.description.map((paragraph, i) => (
          <p key={i} className="text-base text-muted-foreground text-pretty sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {project.tech.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
}
