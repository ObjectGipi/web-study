import {INewDatabase, IOldDatabase} from "../repository/IOldDatabase";
import {BaseDatabase} from "./base-database";

export class CSVDatabase extends BaseDatabase implements IOldDatabase, INewDatabase {
  public read(filename: string): Promise<string[]> {
    throw new Error("Method not implemented.");
  }
  public write(filename: string, data: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public convertToCSV = (filename: string) => {}
}
