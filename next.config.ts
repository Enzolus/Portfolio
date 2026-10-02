import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repository?.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(process.env.GITHUB_ACTIONS && !isUserSite && repository
    ? { basePath: `/${repository}`, assetPrefix: `/${repository}/` }
    : {}),
};

export default nextConfig;
