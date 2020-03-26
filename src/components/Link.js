import React from "react";
import { filterTodo } from "../actions/filter";
import { connect } from "react-redux";

class Link extends React.Component {
  onClick = (state) => {
    this.props.filterTodo(state)
  }
  render(){
    return (
      <button onClick={() => this.onClick(this.props.state)} style={{ marginLeft: "4px" }}>
        {this.props.text}
      </button>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterTodo: state => dispatch(filterTodo(state))
});

export default connect(null, mapDispatchToProps)(Link);
