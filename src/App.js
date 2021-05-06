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
            href="https://github.com/Lyching0310/React-Weather-App"
            target="_blank"
            rel="noreferrer"
            id="gitLink"
          >
            Open-source code
          </a>
          {""} and {""}
          <a
            href="https://alyssareactweatherapp.netlify.app/"
            target="_blank"
            rel="noreferrer"
            id="Netlify"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
