import React from "react";
import Sidebar from "./component/sidebar/Sidebar";
import Chart from "./component/chart/Chart";
import './component/sass/styles.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chart />
    </div>
  );
}

export default App;
