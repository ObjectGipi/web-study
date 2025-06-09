import {IDatabase} from "../repository/IDatabase";

export class CSVDatabase implements IDatabase {
  write(filename: string, data: string): Promise<boolean> {
      throw new Error("Method not implemented.");
  }
  read(filename: string): Promise<string[]> {
      throw new Error("Method not implemented.");
  }
}