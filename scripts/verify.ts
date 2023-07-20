import { exec } from "@actions/exec";

const run: (wsdir: string) => Promise<void> = async (wsdir) => {
  await exec("bit status --strict", [], { cwd: wsdir });
  await exec("bit build", [], { cwd: wsdir });
};

export default run;
