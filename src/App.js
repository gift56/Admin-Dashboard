import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Referral from "./component/referral/Referral";
import './component/sass/styles.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Referral />
    </div>
  );
}

export default App;
