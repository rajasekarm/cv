export interface Project {
  name: string;
  year: number;
  description: string;
  repoUrl?: string;
  /** Internal detail page on this site, e.g. "/velo". */
  href?: string;
}

export const projects: Project[] = [
  {
    name: "velo",
    year: 2024,
    description:
      "Agentic engineering team — PRD to commit, fully agent-driven. Built on Claude.",
    repoUrl: "https://github.com/rajasekarm/velo",
    href: "/velo",
  },
];
