import React, { Component } from "react";
import "./index.css";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  handleInputChange(e){
    const action = {
      type:'change_input_value',
      value:e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder="todo" className="todo-input" value={this.state.inputValue} onChange={this.handleInputChange} />
          <Button type="primary" className="todo-submit">
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (
              <List.Item>
                {index + 1} - {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
