import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          Created by Alyssa Reyes {""}
          <a
            href="https://github.com/Lyching0310/react-final-project"
            target="_blank"
            rel="noopener noreferrer"
            id="gitLink"
          >
            Open-source code on GitHub
          </a>
          {""} and {""}
          <a
            href="https://final-project-alyssareyes.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="Netlify"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
