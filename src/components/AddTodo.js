import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todo.js";

class AddTodo extends React.Component {
  onClick = () => {
    if(this.refs.addTodoInput.value !== ""){
      this.props.addTodo(new Date(), this.refs.addTodoInput.value)
      this.refs.addTodoInput.value = "";
    }
  };
  render(){
    return (
      <React.Fragment>
        <input type="text" ref="addTodoInput" />
        <button type="submit" onClick={this.onClick}>
          Add Todo
        </button>
      </React.Fragment>  
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: (id, text) => dispatch(addTodo(id, text))
});

export default connect(null, mapDispatchToProps)(AddTodo);
