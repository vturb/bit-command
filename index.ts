import * as core from "@actions/core";
import run from "./scripts/verify";

try {
  const wsDir: string = core.getInput("ws-dir") || process.env.WSDIR || "./";
  run(wsDir);
} catch (error) {
  core.setFailed((error as Error).message);
}
