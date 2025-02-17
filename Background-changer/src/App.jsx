import { useState } from "react"
import './App.css';


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="main-container"
    style={{backgroundColor: color}}
    >
      <div className="button-container">
        <div className="buttons">
          <button
          onClick={() => setColor("red")}
          className="button1"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="button2"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="button3"
          style={{backgroundColor: "blue"}}
          >Blue</button>
             <button
          onClick={() => setColor("orange")}
          className="button4"
          style={{backgroundColor: "orange"}}
          >orange</button>
             <button
          onClick={() => setColor("pink")}
          className="button5"
          style={{backgroundColor: "pink"}}
          >pink</button>
             <button
          onClick={() => setColor("purple")}
          className="button6"
          style={{backgroundColor: "purple"}}
          >purple</button>
             <button
          onClick={() => setColor("yellow")}
          className="button7"
          style={{backgroundColor: "yellow"}}
          >yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
