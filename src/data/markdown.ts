import { about } from "./about";
import { projects } from "./projects";

/** Plain-markdown version of the CV for AI agents (and the AI view toggle). */
export function cvMarkdown(site: string): string {
  const projectLines = projects.map((project) => {
    const lines = [`### ${project.name} (${project.year})`, "", project.description];
    if (project.repoUrl) lines.push("", `Repo: ${project.repoUrl}`);
    if (project.href) lines.push("", `Details: ${site}${project.href}`);
    return lines.join("\n");
  });

  return [
    "# Raja Sekar M",
    "",
    `> ${about.headline}`,
    "",
    about.bio.join("\n\n"),
    "",
    "## Skills",
    "",
    ...about.skills.map((skill) => `- ${skill}`),
    "",
    "## Projects",
    "",
    ...projectLines,
    "",
    "## Links",
    "",
    `- LinkedIn: ${about.links.linkedin}`,
    `- GitHub: ${about.links.github}`,
    "",
  ].join("\n");
}
