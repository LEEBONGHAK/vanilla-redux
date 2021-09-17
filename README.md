# Vanilla Redux

Learning Vanilla-Redux  

## Learned

reducer : 현재 상태의 application과 함께 불려지는 function (+ with action), return하는 것은 application의 state가 됨  
action : reducer와 소통하는 방법으로 Object여야 하며 그 key 이름은 항상 type임 (바꿀 수 없음)  
dispatch : reducer에게 action을 보내는 방법  
subscribe : store의 변화를 감지하면 인자값으로 준 함수를 실행  
  
switch가 자주 쓰임  
```
switch(action.type){
  case ..blah..:
    return something;
  case ..blah2..:
    return something2;
  default:
    return something3;
}
```
  
string으로 바로 쓰는 대신에 const variable로 선언해서 사용하기 -> 에러 발견 용이  
  
State Mutation  
 - state는 single source of truth이며, read-only이다  
 - 즉, store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.  
 - state를 mutate하지 말아야한다. ▷ mutating state하는 대신에 새로운 state objects를 리턴해야 한다.  
 - mutation은 변형하는 것 (array에 push()를 통해 element를 추가하는 행위 등)  
  
...state ▷ state array안의 모든 content