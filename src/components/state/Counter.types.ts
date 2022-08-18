export type CounterState = {
  count: number;
};

export type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

export type ResetAction = {
  type: "RESET";
};

export type CounterAction = UpdateAction | ResetAction;
