import { combineReducers } from "redux";
import todos from "./todo";
import filterTodo from "./filter";

export default combineReducers({
  todos,
  filterTodo
});
