import { useReducer } from "react";
import { countReducer } from "../../reducers/countReducer";

const initialState = { count: 0 };

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <>
      Count : {state.count}
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment 10
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
}
