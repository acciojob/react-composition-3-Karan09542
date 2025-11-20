
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tooltip tooltiptext={"Thank you"}>
          <h2 className="tooltip">Hover over me</h2>
        </Tooltip>
        <Tooltip tooltiptext={"Thank you again"}>
          <p className="tooltip">Hover over me once more</p>
        </Tooltip>
    </div>
  )
}

export default App
