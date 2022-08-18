import { CounterAction, CounterState } from "../components/state/Counter.types";

export const countReducer = (
  { count }: CounterState,
  { type, payload }: CounterAction
) => {
  switch (type) {
    case "INCREMENT":
      return { count: count + payload };
    case "DECREMENT":
      return { count: count - payload };
    default:
      return { count };
  }
};
