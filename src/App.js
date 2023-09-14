import React, { Component } from 'react'
import "./App.css";
import NavBar from "./Components/NavBar";
import Newspage from "./Components/Newspage";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
         <Router>
      <>
        <NavBar />
        <LoadingBar color="blue" progress={this.state.progress} height={3}/>

        <Routes>
          <Route exact path="/" element={<Newspage setProgress={this.setProgress} key="general" pagesize={9} category="general" country="in" />}></Route>
          <Route exact path="/business" element={<Newspage setProgress={this.setProgress} key="business" pagesize={9} category="business" country="in" />}></Route>
          <Route exact path="/health" element={<Newspage setProgress={this.setProgress} key="health" pagesize={9} category="health" country="in" />}></Route>
          <Route exact path="/entertainment" element={<Newspage setProgress={this.setProgress} key="entertainment" pagesize={9} category="entertainment" country="in" />}></Route>
          <Route exact path="/science" element={<Newspage setProgress={this.setProgress} key="science" pagesize={9} category="science" country="in" />}></Route>
          <Route exact path="/sports" element={<Newspage setProgress={this.setProgress} key="sports" pagesize={9} category="sports" country="in" />}></Route>
          <Route exact path="/technology" element={<Newspage setProgress={this.setProgress} key="technology" pagesize={9} category="technology" country="in" />}></Route>
        </Routes>
      </>
    </Router>
      </>
    )
  }
}

export default App

