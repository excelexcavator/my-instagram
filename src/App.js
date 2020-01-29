import React, {Component} from "react";
import "./App.css";


import Header from "./components/Header";
import Portrait from "./components/Portrait";
import Sidebar from "./components/Sidebar";


class App extends Component{
  render(){
    return (
        <div className="App">
          <Header />
		  <section className="App-main">
			<Portrait />
			<Sidebar />
          </section>
        </div>
    );
  }
}

export default App;