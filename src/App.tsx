import { useStore } from "./hooks/useStore";
import "./App.css";

function App() {
  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <div className="App">
      <h1>Google Translate</h1>
      <button
        onClick={() => {
          setFromLanguage("es");
        }}
      >
        Cambiar a español
      </button>
      <p>{fromLanguage}</p>
    </div>
  );
}

export default App;
