export interface IDatabase {
  read(filename: string): Promise<string[]>;
  write(filename: string, data: string): Promise<boolean>;
}
