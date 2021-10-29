# React 최적화 수업

## 리액트 최적화 9가지 방법

> 코드를 최적화하기 위해 사용하는 특정 패턴과 방법에 상관 없이 코드를 DRY하게 유지하는 것은 매우 중요하다.

- 최적화가 되어 있지 않다면 재사용에 있어 어려움을 겪고,패키지화를 거치게 되면 수정하기 매우 어려워 지기 때문이다.

- 그렇기 때문에 본 문서에서는 최적화 하는 방법을 알려주고 간단한 React 계산기를 통해 적용하고자 한다.

## 1.useMemo()

- 이 힘수는 React Hook중 하나로서 React에서 CPU 소모가 심한 함수들을 캐싱하기 위해 사용한다.

- 예시

```js
function App() {
  const [count, setCount] = useState(0);

  const expFunc = (count) => {
    waitSync(3000);
    return count * 90;
  };
  const resCount = expFunc(count);
  return (
    <>
      Count: {resCount}
      <input
        type="text"
        onChange={(e) => setCount(e.target.value)}
        placeholder="Set Count"
      />
    </>
  );
}
```

- 위 코드에서 `expFunc`는 3분을 기다린후 `state`인 `count`에 90을 곱해 변경하는 함수이다.

- 따라서 `input`에 값이 들어와 변경 될때 마다 `setCount`를 통해 값이 바뀌게 되고 3분을 기다린후 90을 곱하게되 딜레이가 커지게 된다.

- 이런 구조에서는 `useMemo`를 통해 `expFunc`을 최적화 함으로써 해결할 수 있다.

```js
useMemo(() => func, [input_dependency]);
```

- `func`은 캐시하고 싶은 함수이고, `input_dependency`는 `useMemo`가 캐시할 `func`에 대한 입력 배열로, `input_dependency`가 변경될경우 `func`이 호출된다.

```js
function App() {
  const [count, setCount] = useState(0);

  const expFunc = (count) => {
    waitSync(3000);
    return count * 90;
  };
  const resCount = useMemo(() => {
    return expFunc(count);
  }, [count]);
  return (
    <>
      Count: {resCount}
      <input
        type="text"
        onChange={(e) => setCount(e.target.value)}
        placeholder="Set Count"
      />
    </>
  );
}
```

- 이제 `expFunc`는 `useMemo`에 의해 호출되지 않고 입력에 대한 캐시된 결과값을 리턴한다.

## 2.가상화된 List

- 만약 거대한 list data를 렌더링 한다면 브라우저에 viewport에 보여지는 부분만 렌더링하고 나머지는 스크롤 할때 보여지도록 하게한다.

- 위와 같은 방법 `windowing`이라 부르며, 많은 React라이브러리들이 존재한다.

## 3.React.PureComponent

- Class Component에서 `ShouldComponentUpdate`의 역할과 비슷한 `React.PureComponent`가 존재하다.

- `React.PureComponent`는 `state`와 `prop`값을 체크하여 component가 업데이트 되는 확인한다.

```js
class ReactComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null,
    };
    this.inputValue = null;
  }
  handleClick = () => {
    this.setState({ data: this.inputValue });
  };
  onChange = (evt) => {
    this.inputValue = evt.target.value;
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data === this.state.data) return false;
    return true;
  }
  render() {
    l("rendering App");
    return (
      <div>
        {this.state.data}
        <input onChange={this.onChange} />
        <button onClick={this.handleClick}>Click Me </button>
      </div>
    );
  }
}
```

- 이것은 `React.PureComponent`를 사용하여 적용한다면

```js
class ReactComponent extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null,
    };
    this.inputValue = null;
  }
  handleClick = () => {
    this.setState({ data: this.inputValue });
  };
  onChange = (evt) => {
    this.inputValue = evt.target.value;
  };
  render() {
    l("rendering App");
    return (
      <div>
        {this.state.data}
        <input onChange={this.onChange} />
        <button onClick={this.handleClick}>Click Me </button>
      </div>
    );
  }
}
```

- 이렇게 바꾸게 되면 text창에 숫자를 입력하고 `Click Me`를 연속으로 누르면 ReactComponent는 한번만 렌더링 하는것을 볼수 있다.

- 이전 props와 state의 객체들의 값을 `shallow`비교를 하는것을 알수있다.

  > (그렇기 때문에 항상 pureComponent를 일반 컴포넌트처럼 사용하면 안된다.)

- 함수형 컴포넌트에서는 `hoc`의 `recompose`가 이와 유사한 기능을 한다.

## 4.Cahsing function

- react에서 함수는 render 메소드안에서 호출 될 수 있다.

```js
function expensiveFunc(input) {
    ...
    return output
}
class ReactCompo extends Component {
    render() {
        return (
            <div>
                {expensiveFunc}
            </div>
        )
    }
}
```

- 이와 같이 함수 실행이 오래 걸리게 될경우, 랜더링 하는 나머지 부분이 대기하게 되어 사용자들의 경험에 방해가 된다.

- `ReactCompo`를 보면 `expensiveFunc`은 jsx안에서 랜더링 되어 결과값을 리턴하여 DOM에 랜더링 시킨다.

- 함수는 CPU집약적으로 리렌더링 될때마다 실행되며 React는 해당 실행이 끝날때 까지 남은 리렌더링 알고리즘을 실행하기 위해 기다려야한다.

- 이런 상황에서 가장 좋은 방법은 만약 같은 `input`값이 들어온다면 캐시처리하여 같은 값을 리턴하도록 하는것이다.

```js
function expensiveFunc(input) {
    ...
    return output
}
const memoizedExpensiveFunc = memoize(expensiveFunc)
class ReactCompo extends Component {
    render() {
        return (
            <div>
                {memoizedExpensiveFunc}
            </div>
        )
    }
}
```

## 5.Reselect selectors

- `Reselect`를 사용하면 `Redux`상태 관리과 최적화 된다.

- `Reselect`라이브러리는 `Redux state`를 캡슐화하여 component를 확인하고 렌더링 할지 안할지 여부를 알려준다.

## 6.Web Worker

- 자바스크립트 코드는 싱글 쓰레드에서 작동한다.

- 동일한 쓰레드에서 오래걸리는 프로세스를 실행하면 ui 렌더링코드에도 영향을 미쳐 다른 쓰레드로 옮기는 것이다.

- 이러한 기능을 `Web worker`들이 하는 역할이다. UI에 흐름을 방해하지 않고 메인쓰레드와 동시에 실행할 수 있는 게이트웨이다.
  > (단 React에서 공식적으로 지원하지 않지만 Web Worker는 다양한 방식으로 사용될수 있다.)

```js
// webWorker.js
const worker = (self) => {
  function generateBigArray() {
    let arr = [];
    arr.length = 1000000;
    for (let i = 0; i < arr.length; i++) arr[i] = i;
    return arr;
  }
  function sum(arr) {
    return arr.reduce((e, prev) => e + prev, 0);
  }
  function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1);
  }
  self.addEventListener("message", (evt) => {
    const num = evt.data;
    const arr = generateBigArray();
    postMessage(sum(arr));
  });
};
export default worker;
// App.js
import worker from "./webWorker";
import React, { Component } from "react";
import "./index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
    };
  }
  calc = () => {
    this.webWorker.postMessage(null);
  };
  componentDidMount() {
    let code = worker.toString();
    code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
    const bb = new Blob([code], { type: "application/javascript" }); //멀티미디어를 다룰때 사용
    this.webWorker = new Worker(URL.createObjectURL(bb)); // Worker를 사용
    this.webWorker.addEventListener("message", (evt) => {
      const data = evt.data;
      this.setState({ result: data });
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.calc}> Sum </button>
        <h3> Result: {this.state.result}</h3>
      </div>
    );
  }
}
```

- 해당 앱은 10만개의 요소가 들어있는 배열의 합을 계산하는데, 만약 메인 쓰레드에서 작업을 한다면 많은 과부화가 올것이다.

- 이것을 `Web worker`로 옮겨 병렬적으로 실행을 시키면 효율적으로 해결할수 있다.

## Lazy Loading

- `Lazy loading`은 부하를 단축하기 위해 자주 사용되는 최적화 기법으로 `React`에서는 `React.lazy()` API를 사용한다.

- `React.lazy` 함수는 동적 import를 사용하며 일반 Component처럼 렌더링할 수 있게 해준다.

```js
React.lazy(() => {});

// or

function cb() {}
React.lazy(cb);
```

- 이 콜백 기능은 반디스 import를 통해 파일을 불러와야한다.

```js
class MyComponent extends Component {
  render() {
    return <div> MyComponent </div>;
  }
}
const MyComponent = React.lazy(() => {
  import("./MyComponent.js");
});
function AppComponent() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
// or
function cb() {
  return import("./MyComponent.js");
}
const MyComponent = React.lazy(cb);
function AppComponent() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}
```

- React.lazy의 클백 기능은 `import()` 호출을 통해 Promise를 반환한다.

## 8.React.memo()

- `useMemo`와 `React.PureComponent`와 같이 `React.memo()`는 함수 컴포넌트를 캐시하는데 사용된다.

```js
function My(props) {
  return <div>{props.data}</div>;
}
function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <button onClick={() => setState(0)}>Click</button>
      <My data={state} />
    </>
  );
}
```

- App 컴포넌트는 state를 `data`라는 props로 `My`컴포넌트에 넘겨준다.

- `button`엘리먼트의 onClick을 보면 클릭할때 마다 state 값을 0으로 변환해주는 작업을 한다.

- 만약 버튼을 계속 누른다면,state값이 동일함에도 불구하고 `My`컴포넌트는 계속 리랜더링된다.

  > (state의 결과값은 동일하지만 함수가 호출되기 때문에)

- 만약 하위에 여러가지 함수들이 존재할경우 과부하가 오게된다.

```js
function My(props) {
  return <div>{props.data}</div>;
}
const MemoedMy = React.memo(My);
function App() {
  const [state, setState] = useState(0);
  return (
    <>
      <button onClick={() => setState(0)}>Click</button>
      <MemeodMy data={state} />
    </>
  );
}
```

- 하지만 `React.memo`의 함수를 사용할경우 `My`컴포넌트는 오직 한번만 렌더링 된 후 다시는 리렌더링 되지 않는다.

- `React.memo`가 `prop`값을 `memoize`한 후 캐싱된 결과를 리턴하기 때문에 동일한 입력에 대해서는 `My`컴포넌트를 실행하지 않기 때문이다.

- `React.PureComponent`가 `class component`를 위한 거라면 `React.memo`는 함수형 `component`를 위한 캐싱 방법이다.

## 9.useCallback()

- `useCallback`은 `useMemo`와 비슷하지만 차이점은 함수 선언을 `memoize`하는데 사용된다는 것이다.

```js
function TestComp(props) {
  l("rendering TestComp");
  return (
    <>
      TestComp
      <button onClick={props.func}>Set Count in 'TestComp'</button>
    </>
  );
}
TestComp = React.memo(TestComp);
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Set Count</button>
      <TestComp func={() => setCount(count + 1)} />
    </>
  );
}
```

- `App`컴포넌트는 `useState`를 이용하여 `count`값을 관리하고 있다.

- `setCount`를 실행시키면 App컴포넌트는 자기자신을 포홤한 자식 컴포넌트를 리렌딩한다.

- 하지만 `React.memo`를 통해 현재와 다음 props를 비교하여 이전 props와 같다면 리렌더링을 하지 않는다.

- 그러나 문제는 TestComp에 새로운 인스턴스의 함수를 전달받는다면, 어떤 결과가 나올것인가?

```js
return (
  <>
    ...
    <TestComp func={() => setCount(count + 1)} />
  </>
);
```

- 화살표 함수 선언이 전달되므로 App 컴포넌트가 리랜더링 할때마다 항상 새참조로 새로운 함수 선언이 전될된다 (메모리 주소 포인터)

- 따라서 얕은 비교를 하는 `React.memo`는 다른 결과가 들어왔다고 이해하고 리렌더링을 하도록 실행한다.

- 그렇다면 함수 선언을 컴포넌트 밖에서 하면 어떨까? 이렇게 된다면 좋겠지만 그럴 경우 `setCount`함수를 참조할 수 없게된다.

- 여기서 `useCallback`이 필요한 것이다. `useCallback`으로 함수와 변경될 기준 값을 같이 전달하면 `useCallback`은 `memoize`된 함수를 리턴하고 이 값을 `TestComp`에 전달하면 된다.

```js
function App() {
  const check = 90;
  const [count, setCount] = useState(0);
  const clickHndlr = useCallback(() => {
    setCount(check);
  }, [check]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Set Count</button>
      <TestComp func={clickHndlr} />
    </>
  );
}
```

- `clickHndlr`는 dependency로값인 `check`가 변경되지 않는 한 App 컴포넌트가 리 렌더링 되어도 새로 생성되지 않으므로 `Set Count`버튼을 반복해서 클릭해도 `TestComp`는 다시 리렌더링 되지 않는다.

- `useCallback`이 `check` 변수값을 확인하여 이전 값과 변경되었다면 새로운 함수를 리턴하고 `TestComp` 와 `React.memo`는 새로운 참조가 되었으므로 리렌더링 된다.

- 만약 동일하다면 `useCallback`은 아무것도 리턴하지 않고 `React.memo`는 함수 참조가 이전과 같다고 판단하여 `TestComp`를 리렌더링 하지 않도록 할 것이다.
