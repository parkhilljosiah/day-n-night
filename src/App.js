import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="page-container">
      <div className={`${theme}`}>
          <button onClick={toggleTheme} className="toggle-button">
            {theme === "light" ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-sun-fill"></i>}
          </button>
        <h1>Hello World.</h1>
      </div>
    </div>
  );
}

export default App;
