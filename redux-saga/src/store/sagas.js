import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreator";

function* todoSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  try {
    const res = yield axios.get(
      "https://www.easy-mock.com/mock/5ca803587e5a246db3d100cb/todolist"
    );
    const action = initListAction(res.data.todolist);
    yield put(action);
  } catch (error) {
    console.log("接口请求失败,请检查todolist接口");
  }
}

export default todoSaga;
