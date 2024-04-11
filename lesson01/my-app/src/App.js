import logo from "./logo.svg";
import "./App.css";
import HVK from "./components/HVK";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJ
        </a>
      </header>
      <HVK />
      <HVK email="khai0511@gmail.com" phone="03131665461" />
      <HVK email="khai0511@gmail.com" phone="03131665461" class="K22CNT4" />
    </div>
  );
}

export default App;
