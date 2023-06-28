
export type ExecFunction = (command: string, options?: {cwd: string}) => Promise<number>;

const run: (exec: ExecFunction, wsdir: string) => Promise<void> = async (exec, wsdir) => {
  await exec('bit status --strict', { cwd: wsdir });
  await exec('bit build', { cwd: wsdir });
}

export default run;
