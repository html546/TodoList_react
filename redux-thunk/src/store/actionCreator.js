import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from "./actionTypes";
import axios from "axios";

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getItemDeleteAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return dispatch => {
    axios
      .get("https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist")
      .then(res => {
        const action = initListAction(res.data.todolist);
        dispatch(action);
      });
  };
};
