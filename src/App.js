import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <hr></hr>
          <main>
            <Dictionary defaultKeyword="kindness" />
          </main>
        </header>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://nifty-clarke-f085a7.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Ana Martins
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/anavillaret/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            on <i class="fab fa-github"></i>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
