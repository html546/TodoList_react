import React, { Component } from "react";
import { Input, List, Button } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input
            className="todo-input"
            value={this.props.inputValue}
            placeholder="todo"
          />
          <Button type="primary" className="todo-submit">
            提交
          </Button>
          <div className="todo-list">
            <List
              size="large"
              bordered
              dataSource={this.props.list}
              renderItem={(item, index) => (
                <List.Item>
                  {index + 1}-{item}
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

export default connect(
  mapStateToProps,
  null
)(TodoList);
