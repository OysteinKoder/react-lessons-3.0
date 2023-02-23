import logo from "./logo.svg";

// Button is a default import, you can tell because it does not have curly brackets around it.

import Button from "./components/Button";
import "./App.css";

// The paragraphs are named imports, you can tell because they have curly brackets

import { ParagraphOne, ParagraphTwo } from "./components/Paragraphs";

import { TEXT } from "./language/text_example";

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
          Learn React
        </a>
        <Button text={TEXT.BUTTON.EXAMPLE_BUTTON} />
        <ParagraphOne text={TEXT.TEXT_ONE} />
        <ParagraphTwo text={TEXT.TEXT_TWO} />
      </header>
    </div>
  );
}

export default App;
