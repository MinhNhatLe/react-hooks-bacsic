import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Counter from "./components/Counter";
// import HomePage from "./page";


function App() {
  const [count, setCount] = useState(0);

  function handleHeroClick() {

  }
  return (
    <div className="App">
      <h1>React hooks - Clock</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name='Easy Frontend' onClick={handleHeroClick} />

      <hr />
        <Counter/>
      <hr />

      {/* <HomePage/> */}
    </div>
  );
}

export default App;
