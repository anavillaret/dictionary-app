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
            <Dictionary />
          </main>
        </header>
        <footer className="App-footer">
          <small>Coded by Ana Martins</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
