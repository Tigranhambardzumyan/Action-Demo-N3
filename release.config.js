module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Tigranhambardzumyan/Action-Demo-N3",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/github",
        {
          assets: [
            { path: "build.zip", label: "Build" },
            { path: "coverage.zip", label: "Coverage" }
          ]
        }
      ]
    ]
  };