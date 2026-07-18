import { ACTIONS } from "../utils/constants";

export function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...state, action.payload];

    case ACTIONS.UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              ...action.payload,
            }
          : task
      );

    case ACTIONS.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);

    case ACTIONS.MOVE_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              status: action.payload.status,
            }
          : task
      );

    default:
      return state;
  }
}


