import React, { Component } from "react";
import "./index.css";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const data = [
  "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第一条 TodoList",
  "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第二条 TodoList",
  "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第三条 TodoList",
  "这是非常非常非常长的让人觉得不可思议的但是它语句通顺的第四条 TodoList"
];

class TodoList extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder="todo" className="todo-input" />
          <Button type="primary" className="todo-submit">
            提交
          </Button>
        </div>
      </div>
    );
  }
}

export default TodoList;
