import React from "react";
import "./Portrait.css";

function Port(props) {
	return 
}
class Portrait extends React.Component{
    constructor(props) {
      super(props);
      this.state = {like: false};
	  this.handleClick = this.handleClick.bind(this);
    }
	
	handleClick() {
		this.setState(prevState => ({
			like: !prevState.like
		}));
	}
	
    render(){
        return (
           <div className="Port">
             <div className="Port-head">
				<img className="Port-photo" src={require("../../resource/logo_whova.png")}>
				</img> 
				<p className="Port-name"> Whova
				</p>
             </div>
			
			 <img src={require("../../resource/image_star.jpg")} width="100%">
			 </img>
			 <button className="Port-button" onClick={this.handleClick} style={{position:"flex",float:"left"}}>
				<img src={this.state.like ? require("../../resource/icon_redheart.png") : require("../../resource/icon_whiteheart.png")} width="100%">
			 	</img>
				<p style={{position:"absolute",left:"15px",fontSize:"15px"}}> {this.state.like ? "1000 likes" : "999 likes" } <br />
				</p>
			 </button>
			 <button className="Port-button" style={{position:"flex",float:"left"}}>
			 	<a href="../Landscape">
				<img src={require("../../resource/icon_comment.png")} width="100%">
			 	</img>
			    </a>
			 </button>
			 <button className="Port-button" style={{position:"flex",float:"left"}}>
			 	<img src={require("../../resource/icon_navigate.png")} width="100%">
			 	</img>
			 </button>
			 <button className="Port-button" style={{position:"flex",float:"right"}}>
			 	<img src={require("../../resource/icon_flag.png")} width="100%">
			 	</img>
			 </button>
			<pre className="Port-comment"> 
			<b> realdonaldtrump </b> #Repost @teamtrump Hello world! {"\n"}
			<b>     angele_line14212 </b> What an interesting webpage it is. {"\n"}
			 </pre>
			
           </div>
       );
    }   
}

export default Portrait;