import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="contentHeaderWrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
