import util from "node:util";
import fs from "node:fs";
import {IDatabase} from "../repository/IDatabase";

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

export class TxtDatabase implements IDatabase {
  read = async (filename: string): Promise<string[]> => {
    const buffer = await readFileAsync(filename);
    return buffer.toString().split("\n");
  }
  write = async (filename: string, data: string): Promise<boolean> => {
    await appendFileAsync(filename, data);
    return true;
  }
}