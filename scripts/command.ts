import { exec } from "@actions/exec";

const run = async (cmd: string, wsdir: string) => {
  await exec(`bit ${cmd}`, [], { cwd: wsdir });
};

export default run;
