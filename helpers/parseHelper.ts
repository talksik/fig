import Command, { CommandType } from "../models/command";

export function getCommand(commandType: CommandType) {}

export function parser(command: string) {
  // if it's just a command, then don't do anything
  // return command object based on currently entered string
  // then can use that command object to see if it's complete or not
  // build some sort of tree for finding out the options for a user while they are typing
  // go through each token,
  // check if the currToken is a command
  // if not, then mark it as an argument or option depending on if it has "--" flag or not
}
