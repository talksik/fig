import Arg from "./arg";
import Option from "./option";

export enum CommandType {
  git = "git",
  npm = "npm",
  commit = "commit"
}

export default class Command {
  constructor(
    type: CommandType,
    subcommands?: Command[],
    args?: Arg | Arg[],
    options?: Option[]
  ) {}
}
