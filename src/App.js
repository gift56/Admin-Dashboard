import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Pages from "./component/pages/Pages";
import './component/sass/styles.css'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
