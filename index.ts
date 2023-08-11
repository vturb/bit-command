import * as core from "@actions/core";
import run from "./scripts/verify";

try {
  const wsDir: string = core.getInput("ws-dir") || process.env.WSDIR || "./";
  const skipBuild: boolean =
    core.getInput("skip-build") === "true" ? true : false;
  run(skipBuild, wsDir);
} catch (error) {
  core.setFailed((error as Error).message);
}
