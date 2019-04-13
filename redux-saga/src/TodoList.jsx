import React, { Component } from "react";
import "./index.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getItemDeleteAction,
  getInitList
} from "./store/actionCreator";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleAddItem();
    }
  }
  handleAddItem() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleDeleteItem(index) {
    const action = getItemDeleteAction(index);
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState());
  }
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    /* axios
      .get("https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist")
      .then(res => {
        console.log(res.data.todolist);
        const action = initListAction(res.data.todolist);
        store.dispatch(action);
      }); */
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        todoList={this.state.todoList}
        handleInputChange={this.handleInputChange}
        handleKeyUp={this.handleKeyUp}
        handleAddItem={this.handleAddItem}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }
}

export default TodoList;
