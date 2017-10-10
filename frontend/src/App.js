import React from "react"
import logo from "./logo.svg"
import "./App.css"
import ListTrackers from "./ListTrackers"

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Distance Tracker</h1>
      <p>Yeah, i know, its the default create-react-app layout 😅</p>
    </header>
    <ListTrackers />
  </div>
)

export default App
