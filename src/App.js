import React, { Component } from 'react';
class RandomElement extends React.Component {
    
  constructor(props) {
    super(props);
    this.state={todos:[]};
  }
  
  save() {
    var todos = [...this.state.todos];
    todos.push(this.newText.value);
    this.setState({todos});
  }
  handleClick = () => {
  var t=Math.floor(Math.random()* this.state.todos.length);
	console.log(t);
    this.setState({
      clicked: true, 
	
      selectedNote: this.state.todos[t]
    })
  }

  render(){
      return(
          <div className="list">
            <h1> TO-DO List</h1>
            <input type="text" ref={(ip) => {this.newText = ip}}/>
            <button onClick={this.save.bind(this)} className="btn btn-primary glyphicon glyphicon-floppy-saved">Save
            </button>
            <ul>
              {this.state.todos.map(function(todo) {
                    return <li>{todo}</li>
               })}
              
            </ul>
            <button onClick={this.handleClick}>Random Note</button>
                  <h1>You Have Selected: {this.state.clicked && this.state.selectedNote}</h1>
          </div>
      )
  }
};
export default RandomElement;
