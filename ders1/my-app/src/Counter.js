import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(useEffectIcFonksiyon, []);

  function useEffectIcFonksiyon() {
    console.log("test");

    window.addEventListener('onload', ()=> {
      console.log('sayfa yuklendi')
    })

  }

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <p>Murat: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
