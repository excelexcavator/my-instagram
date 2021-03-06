import React from "react";
import "./Portrait.css";

class Like extends React.Component{
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
	
	render() {
		return (
			<button className="Port-button" onClick={this.handleClick} style={{position:"static",float:"left"}}>
				<img src={this.state.like ? require("../../resource/icon_redheart.png") : require("../../resource/icon_whiteheart.png")} width="100%">
				</img>
			<p style={{position:"absolute",left:"15px",fontSize:"15px"}}> {this.state.like ? "1000 likes" : "999 likes"}
			</p>
			</button>
		);
	}

}

class SmallLike extends React.Component{
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
	
	render() {
		return (
			<button className="Port-button-small" onClick={this.handleClick} style={{position:"absolute",float:"right"}}>
				<img src={this.state.like ? require("../../resource/icon_redheart.png") : require("../../resource/icon_whiteheart.png")} width="100%">
				</img>
			</button>
		);
	}

}

class AddComment extends React.Component {
  constructor () {
	  super();
	  this.state = { content: 'Add a comment...'};
  }
  
  handleComment (event) {
      this.setState({
        content: event.target.value
      })
  }
	
  handleSubmit (event) {
	  const { content } = this.state;
	  this.props.onSubmit({username:"excelexcavator", content:this.state.content});
	  this.setState({ content: 'Add a comment...' });
  }
	  
  render() {
	  return (
		<div className="Port-addcomment">
		  <input className="Port-addcomment" value={this.state.content} onChange={this.handleComment.bind(this)} />
          <button className="Port-post" onClick={this.handleSubmit.bind(this)} > Post
          </button>
		</div>
	  )
  }
}

class ShowComment extends React.Component {
  render () {
	  return (
      <div className="Port-comment">
		<SmallLike className="Port-button-small"/>
		<b>{this.props.comment.username} </b>：{this.props.comment.content}
		
      </div>
    )
  }
}

class CommentList extends React.Component {
  	defaultProps = {
    comments: []
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) =>
          <ShowComment comment={comment} key={i} />
        )}
      </div>
    )
  }
}

class Port extends React.Component{
	constructor () {
	    super()
	    this.state = {comments: []}
	  }
	  
    handleSubmitComment (comment) {
		this.state.comments.push(comment)
      	this.setState({
      		comments: this.state.comments
      	})
    }
	
    render(){
  	  const comments = [
  	       {username: 'realdonaldtrump', content: 'Hello World!'},
  		   {username: 'pikachu123', content: 'Interesting comment.'}
  	     ]
		 
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
			
			 <div width="100%">
			 <Like />
			 <button className="Port-button" style={{position:"flex",float:"left"}}>
			 	<a href="../#/Landscape">
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
			</div>
			
			
			<div> {
				comments.map((comment, i) => <ShowComment comment={comment} key={i} />
				)
			}
			</div>
			<AddComment onSubmit={this.handleSubmitComment.bind(this)}/>
			<CommentList comments={this.state.comments} />
			
           </div>
       );
    }   
}

function Portrait() {
	return (
		<div>
			<Port />
		</div>
	)
}

export default Portrait;