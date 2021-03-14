export interface ILogstore {
  id?: number;
  content?: string;
  occurrences?: number;
}

export class Logstore {
  constructor(
    public id?: number,
    public content?: string,
    public occurrences?: number
  ) {}
}
