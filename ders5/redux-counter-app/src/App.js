import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import "./styles.css";
import SayiGoster from "./components/SayiGoster";

export default function App() {
  const { value } = useSelector((state) => state.counter);
  return (
    <div className="App">
      <div className="header">
        <h1>Redux Counter App</h1>
        <h2>Şu anki sayı - {value}</h2>
      </div>
      <Counter />
      <SayiGoster />
    </div>
  );
}
