export type Status = "TODO" | "WIP" | "DONE";

export type Task = {
  id: number;
  title: string;
  status: Status;
  note?: string;
};
