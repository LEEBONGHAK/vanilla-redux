import { createStore } from 'redux';

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
// action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
const reducer = (state = 0, action) => {
  if (action.type === "PLUS") {
    return state + 1;
  } else if (action.type === "MINUS") {
    return state - 1;
  } else {
    return state;
  }
};

// store는 data를 저장하는 곳
// CreateStore는 reducer를 요구함.
const store = createStore(reducer);

const onChange = () => {
  number.innerHTML = store.getState();
}

// subscribe : store 안에 있는 변화 감지
// store.subscribe(func); => store안의 변화를 감지하면 func 실행
store.subscribe(onChange);

// reducer에게 Action을 보내는 방법 : store.dispatch({key: value});
plus.addEventListener("click", () => store.dispatch({ type: "PLUS"}));
minus.addEventListener("click", () => store.dispatch({ type: "MINUS"}));