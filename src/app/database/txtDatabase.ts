import util from "node:util";
import fs from "node:fs";
import { IOldDatabase } from "../repository/IOldDatabase";
import {BaseDatabase} from "./base-database";

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

export class TxtDatabase extends BaseDatabase implements IOldDatabase {
  public read = async (filename: string): Promise<string[]> => {
    if (!this.find("users.txt")) {
      // 파일을 생성하고 빈 배열리턴;
      return [];
    }
    const buffer = await readFileAsync(filename);
    return buffer.toString().split("\n");
  };
  public write = async (filename: string, data: string): Promise<boolean> => {
    if (!this.find("users.txt")) {
      // 파일을 생성
    }
    await appendFileAsync(filename, data);
    return true;
  };
}
