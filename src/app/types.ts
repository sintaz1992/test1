export interface List {
  name: string;
  todos?: string[];
  dones?: string[];
}

export enum t {
  'done',
  'todo',
}
