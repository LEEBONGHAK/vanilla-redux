import { createStore } from 'redux';

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
const reducer = (state = 0) => {
  console.log(state);
  return state;
};

// store는 data를 저장하는 곳
// CreateStore는 reducer를 요구함.
const store = createStore(reducer);

console.log(store.getState());