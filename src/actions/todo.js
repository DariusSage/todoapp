export const addTodo = (id, text) => ({ type: "ADD_TODO", id, complete: false, text });

export const toggleTodo = (id) => ({ type: "TOGGLE_TODO", id });