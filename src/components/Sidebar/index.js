import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component{
    render(){
        return (
           <div className="Side-head">
             <a className="Side-photo" href="/">
			 </a>
             <a className="Side-intro" href="/">
				excelexcavator
			 </a>
			 <div className="Side-story">
			 </div>
			 <div className="Side-suggestion">
			 </div>
           </div>
       );
    }   
}

export default Sidebar;