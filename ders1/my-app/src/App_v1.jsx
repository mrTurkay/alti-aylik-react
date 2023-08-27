import logo from "./logo.svg";
import "./App.css";
import HaberCard from "./HaberCard";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>test etseetsesese</div>
        <HaberCard
          haber={{
            title: "Haber Başlığı",
            description: "Haber Açıklaması",
            image: "https://picsum.photos/200/300",
          }}
        />
        <HaberCard
          haber={{
            title: "Haber 2",
            description: "Haber aciklamasi 2",
            image: "https://picsum.photos/200/300",
          }}
        />
        <HaberCard
          haber={{
            title: "Haber 2",
            description: "Haber aciklamasi 2",
            image: "https://picsum.photos/200/300",
          }}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
