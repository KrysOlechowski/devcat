import React from "react";
import "./App.css";
import { HomePage } from "./pages/home-page";
import { Theme } from "./theme/theme-provider";

function App() {
  return (
    <Theme>
      <div className="App">
        <HomePage />
      </div>
    </Theme>
  );
}

export default App;
