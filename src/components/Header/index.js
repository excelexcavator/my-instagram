import React from "react";
import "./Header.css";

class Header extends React.Component{
    render(){
        return (
           <nav className="Head">
             <div className="Head-menus">
                 <a className="Head-logo" href="/">
                 </a>
			
                 <div className="Head-gallery">
                 </div>
			
                 <div className="Head-favorite">
                 </div>
			
                 <div className="Head-profile">
                 </div>
             </div>
           </nav>
       );
    }   
}

export default Header;