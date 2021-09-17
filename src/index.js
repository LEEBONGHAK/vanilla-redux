import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// RURE REDUX: COUNTER
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const PLUS = "PLUS";
const MINUS = "MINUS";

// reducer는 data를 modify 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨
// action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
const reducer = (state = 0, action) => {
  switch (action.type ) {
    case PLUS:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
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
plus.addEventListener("click", () => store.dispatch({ type: PLUS}));
minus.addEventListener("click", () => store.dispatch({ type: MINUS}));


// RURE REDUX: TO DO LIST
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const toDoModifier = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: uuidv4() }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const toDoStore = createStore(toDoModifier);

const onSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  toDoStore.dispatch({ type: ADD_TODO, text: toDo });
}

form.addEventListener("submit", onSubmit);