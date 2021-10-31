# State management 

## ContextAPI

- Context API는 각 수준에서 props를 전달하지 않고 구성 요소 간에 데이터를 효과적으로 전달할 수 있는 방법

- 일반적으로 우리는 이러한 컨텍스트를 생성하여 `전역`처럼 사용 

- `제어의 역전(inversion of control)`을 이용하면 넘겨줘야 하는 props의 수는 줄고 최상의 컴포넌트의 제어력은 커짐

- 그러나 이러한 제어의 역전은 항상 옳은것은 아니며 복잡한 로직을 상위로 올리면 상위 컴포넌트들은 더 난해지고, 하위는 더욱 유연해져야함

### React.createContext()

- 먼저 `React.createContext()`를 통해 Context 객체를 만듬

- Context객체를 구독하고 있는 컴포넌트를 렌더링 할때 React는 트리 상위에서 가장 가까이 있는 Provider로 부터 값을 읽는다 

### Context.Provider

-  `<testContext.Provider value={}> `의 형태를 가지고 있다 

- 컴포넌트인 Provider는 context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할

- `value`의 prop을 받아서 하위에 있는 컴포넌트에게 전달

- 하위의 context를 구독하는 모든 컴포넌트는 `value`의 prop값이 바뀔때마다 다시 렌더링


### useReducer

```js
const [state, dispatch] = useReducer(reducer,init);
```

- Context를 사용할떄 `useState`의 대체 함수로 `(state,action)=> newState`를 받고  `dispatch`메서드와 짝의 형태로 현재 state를 반환

