import PortfolioHome from "./PortfolioHome";

export default function Home() {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const isGitHubPagesProject = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io");
  const basePath = isGitHubPagesProject ? `/${repository}` : "";

  return <PortfolioHome basePath={basePath} />;
}
