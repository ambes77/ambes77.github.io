const execa = require("execa");
const fs = require("fs");

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "ambes77.github.io"]);
    console.log("Building...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const dist = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", dist, "add", "--all"]);
    await execa("git", ["--work-tree", dist, "commit", "-m", "ambes77.github.io"]);
    console.log("Pushing to ambes77.github.io...");
    await execa("git", ["push", "origin", "HEAD:ambes77.github.io", "--force"]);
    await execa("rm", ["-r", dist]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "ambes77.github.io"]);
    console.log("Successfully deployed");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();


