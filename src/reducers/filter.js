const filterTodo = (state = 0, action) => {
  switch (action.type) {
    case "FILTER_TODO":
      return action.state;
    default:
      return state;
  }
};

export default filterTodo;
