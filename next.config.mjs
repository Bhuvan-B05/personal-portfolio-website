/** @type {import('next').NextConfig} */
const repoName = "personal-portfolio-website"

const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // GitHub Pages subpath
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  typescript: { ignoreBuildErrors: true },
}

export default nextConfig