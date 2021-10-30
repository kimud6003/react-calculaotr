# React Design Pattern

## Presentational and Container Component Pattern

- 데이터 처리와 데이터 출력을 분리하는 패턴

- 의존성을 분리

- 재사용성을 높임

- Markup 작업이 편함

### ✏️ Container Components

- 데이터 fetch를 다루는데 Redux의 dispatch 같은 느낌

- 연관이 있는 서브 컴포넌트를 렌더링

- DOM Markup, CSS 존재 X

- Presentational 또는 Container Components 에 callback 및 데이터 전달

- stateful한 경향을 가지고 있는 컴포넌트

> 여기서 잠깐 stateful하다?

### ✏️ Presentational Components (FC) : how things look

- 화면에 보여지는 것만을 담당하는 Components

- DOM markup,CSS가 존재

- props를 통해서 데이터나 callbacks 받음

- View에 필요한 state를 가지고 옴

- state,lifecycle, Perfomance optimization이 필요한 경우가 아니라면 함수형 컴포넌트로 작성

- stateless한 경향을 가지고 있는 컴포넌트

## Atomic Design Pattern

- 디자인 요소들을 나누어 파악후 요소들이 조합되는 과정을 통해서 디자인을 구성하는 방식

- Atoms, Molecules, Organisms, Templates, Pages로 구성

### Atoms

- 하나의 구성 요소, 자체의 스타일만 가지고 있으며, 다른곳에 영향을 미치는 스타일은 적용하면 안됨

- 예를 들면 Button, Inputs, form labels

```js
const Button = ({ type = 'button', children = '' }) => (
  <button type={type}>{children}</button> // 가장 기본이 되는 html 태그입니다.
);
```

### Molecules

- Atoms가 모여서 만들어지는 하나의 구성 요소

- Atom 단위인 input label, input, button를 합쳐 새로운 의미 있는 단위를 만듬

- 예를 들면 button과 input 태그를 사용해 검색 컴포넌트를 만드는것

### Organisms

- Molecules보다 비교적 복잡한 구조로 동일하거나 다른 Molecules로 구성

- 예를 들면 검색 컴포넌트를 적용한 nav바

### Template

- Templates의 중요한 특성은 페이지의 최종 내용보다 페이지의 기본 내용 구조에 초점을 맞춤

### Pages

- 실제 콘텐츠가 적용된 UI의 모습

- Pages 단위에서 어플레케이션 상태 관리 (Redux,Mobex)가 적용됨
