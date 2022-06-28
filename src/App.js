import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Payout from "./component/payout/Payout";
import './component/sass/styles.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Payout />
    </div>
  );
}

export default App;
