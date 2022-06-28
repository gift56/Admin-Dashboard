import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Transaction from "./component/transaction/Transaction";
import './component/sass/styles.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Transaction />
    </div>
  );
}

export default App;
