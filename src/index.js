import { createStore } from 'redux';

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

// reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
// action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
const reducer = (state = 0, action) => {
  console.log(state, action);
  if (action.type === "ADD") {
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

// reducer에게 Action을 보내는 방법 : store.dispatch({key: value});
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });


console.log(store.getState());