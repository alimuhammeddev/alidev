import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

export type PortfolioProject = {
  title: string;
  description: string;
  image: StaticImageData;
  technologies: string[];
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[#e4ded2] bg-[#fbf9f4] p-3 transition-colors duration-300 hover:border-[#a95132]">
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#e9e3d8]">
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#fbf9f4] px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.14em] text-[#a95132]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-3 pt-6">
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#252720]">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#716f66]">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-[#f1e4dc] px-3 py-1.5 text-[11px] font-medium text-[#8a4429]"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-[#e8e2d6] pt-5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#55564f] transition-colors hover:text-[#a95132]"
          >
            <Code2 size={16} aria-hidden="true" />
            Source code
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#252720] transition-colors hover:text-[#a95132]"
          >
            View project
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a95132] text-[#fffaf2] transition-colors group-hover:bg-[#87412b]">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
