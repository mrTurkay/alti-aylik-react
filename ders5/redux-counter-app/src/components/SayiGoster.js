import { useSelector } from "react-redux";

const SayiGoster = () => {
  const state = useSelector((state) => state);

  return <h2>{state.counter.value}</h2>;
};

export default SayiGoster;
