import { CounterAction, CounterState } from "../components/state/Counter.types";

export const initialState = { count: 0 };

export const countReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
