import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Settings from "./component/settings/Settings";
import './component/sass/styles.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Settings />
    </div>
  );
}

export default App;
