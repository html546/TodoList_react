import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";

const defaultState = {
  inputValue: "",
  todoList: [
    "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList",
    "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList",
    "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList",
    "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList"
  ]
};

export default (state = defaultState, action) => {
  /* console.log(state);
  console.log(action); */
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  } else if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList.splice(action.index, 1);
    return newState;
  } else if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.data;
    return newState;
  }
  return state;
};
