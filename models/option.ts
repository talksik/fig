import Arg from "./arg";

export default class Option {
  name: string | string[];
  description?: string;
  args: Arg | Arg[];

  constructor(_name: string | string[], _desc: string, _args: Arg | Arg[]) {
    this.args = _args;
    this.name = _name;
    this.description = _desc;
  }
}
