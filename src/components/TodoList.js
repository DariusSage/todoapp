import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo";

class TodoList extends React.Component {
  render(){
    console.log(this.props);
    return (
      <ul>
        {this.props.todos != null &&
          this.props.todos.map(todo => {
            if(this.props.filter === 1 && todo.complete){
              return null;
            }
            if(this.props.filter === 2 && !todo.complete){
              return null;
            }
            return (
              <li onClick={() => this.props.toggleTodo(todo.id)} style={{ textDecoration: todo.complete ? "line-through" : "none", cursor: "pointer" }} key={todo.id}>{todo.text}</li>
            )
          })}
      </ul>
    )
  };
};

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filterTodo
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
