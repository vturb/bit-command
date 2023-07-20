import { exec } from "@actions/exec";

const run = async (wsdir: string) => {
  await exec("bit status --strict", [], { cwd: wsdir });
  await exec("bit build", [], { cwd: wsdir });
};

export default run;
