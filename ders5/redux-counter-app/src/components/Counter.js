import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

export default function Counter() {
  const [amount, setAmount] = useState(5);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      <br /> <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        incrementByAmount
      </button>
    </div>
  );
}
