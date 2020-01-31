import React, {Component} from "react";
import "./App.css";


import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


class App extends Component{
  render(){
    return (
        <div className="App">
          <Header />
		  <div className="App-main">
			<Portrait />
			<Sidebar />
          </div>
        </div>
    );
  }
}

export default App;