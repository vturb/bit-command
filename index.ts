import * as core from "@actions/core";
import run from "./scripts/command";

try {
  const wsDir: string = core.getInput("ws-dir") || process.env.WSDIR || "./";
  run(core.getInput("cmd"), wsDir);
} catch (error) {
  core.setFailed((error as Error).message);
}
