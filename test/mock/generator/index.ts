import { Task } from "~/services/interface";

const items: Task[] = [
  {
    id: 1,
    title: "タスクA",
    status: "TODO",
  },
  {
    id: 2,
    title: "タスクB",
    status: "WIP",
  },
  {
    id: 3,
    title: "タスクC",
    status: "DONE",
  },
  {
    id: 4,
    title: "タスクD",
    status: "TODO",
  },
  {
    id: 5,
    title: "タスクE",
    status: "TODO",
  },
  {
    id: 6,
    title: "タスクF",
    status: "WIP",
  },
  {
    id: 7,
    title: "タスクG",
    status: "TODO",
  },
];

export const tasksMock = () => items.sort((prev, next) => prev.id - next.id);
