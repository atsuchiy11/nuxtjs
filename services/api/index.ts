import axios from "axios";
import { sleep } from "~/services/utils";
import { Task } from "~/services/interface";

axios.defaults.baseURL = "http://localhost:5001";

export const sayHello = async (): Promise<void> => {
  const res = await axios.get("/v1/hello/john");
  console.log(res.data);
};

export const getTasks = async (): Promise<Task[]> => {
  sleep(300);
  const res = await axios.get<Task[]>("/v1/tasks");
  return res.data;
};
