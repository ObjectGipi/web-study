export interface IOldDatabase {
  read(filename: string): Promise<string[]>;
  write(filename: string, data: string): Promise<boolean>;
}
export interface INewDatabase {
  convertToCSV(filename: string): void;
}
