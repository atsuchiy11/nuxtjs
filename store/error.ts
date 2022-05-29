import { AxiosError } from "axios";
import { ActionContext, ActionTree, MutationTree } from "vuex";
import { ErrorMessage, handleError } from "~/services/ui/error";

export interface ErrorState {
  message: ErrorMessage | null;
}

export const defaultState = () => ({
  message: null,
});
export const state = (): ErrorState => defaultState();

export const getters = {
  message: (state: ErrorState) => state.message,
};

export const actions: ActionTree<ErrorState, any> = {
  async handleServerError<T>(
    context: ActionContext<ErrorState, T>,
    err: AxiosError
  ): Promise<void> {
    const { commit } = context;
    commit("failure", handleError(err));
  },

  reset(context) {
    const { commit } = context;
    commit("reset");
  },
};

export const mutations: MutationTree<ErrorState> = {
  failure: (state: ErrorState, payload: ErrorMessage): void => {
    state.message = payload;
  },
  reset: (state: ErrorState): void => {
    state.message = null;
  },
};
