import { getTasks } from "~/services/api";
import { Task } from "~/services/interface";
import { ActionTree, MutationTree } from "vuex";

export interface TasksState {
  isLoading: boolean;
  tasks: Task[] | null;
}

const defaultState = () => ({
  isLoading: false,
  tasks: null,
});

export const state = (): TasksState => defaultState();

export const getters = {
  isLoading: (state: TasksState): boolean => state.isLoading,
  tasks: (state: TasksState): Task[] | null => state.tasks,
};

export const actions: ActionTree<TasksState, any> = {
  startLoadingTasks: async (context) => {
    const { state, commit } = context;
    if (state.isLoading) return;

    commit("onStartLoading");
    try {
      const tasks = await getTasks();
      commit("onFinishLoading", { tasks });
    } catch (err) {
      // TODO: Error handle
      throw new Error(err);
    }
  },
};

export const mutations: MutationTree<TasksState> = {
  onStartLoading: (state) => {
    state.isLoading = true;
  },
  onFinishLoading: (state, payload) => {
    state.isLoading = false;
    state.tasks = payload.tasks;
  },
  setTasks: (state, payload) => {
    state.tasks = payload.tasks;
  },
};
