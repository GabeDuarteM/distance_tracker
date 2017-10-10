import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ListTrackers from "./ListTrackers"

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <ListTrackers />
  </div>
)

export default App
