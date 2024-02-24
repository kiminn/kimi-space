# React

>왜 JQuery에서 넘어왔을까?

페이지 전환없이 앱 같은 느낌을 원함</br>
(레이아웃이 있으면서 그 내부 내용들이 바뀌는 느낌)

### SPA
페이지가 하나인 앱방식의 유행 </br>



## SPA의 장점
###### 새로고침이나 브라우저를 닫지않는 한
한페이지에서 내부 콘텐츠들이 바뀌는 것이기 떄문에 한 페이지에있는 데이터들이 유지됨 </br>


데이터를 다루는 비중이 많아짐에 따라, 프론트 중요도가 점점 높아짐 </br>
SPA가 되면서 데이터를 유지할 수 있어서 데이터를 많이 다루게 됨</br>
한 번 데이터를 받아오면 애플리케이션내에서 가지고있을 수 있음

---

## MVC 패턴
백엔드의 아키텍쳐라 프론트에서는 잘 안맞음 </br>
-> 앵귤러가 시도했었음(양방향 바인딩)


## FLUX 패턴 
데이터의 흐름이 일관성있음 </br>
-> 리액트(1way 바인딩)


#### 장점
데이터 추적이 용이함 방향이 한방향이라서 대규모 프로젝트에서 에러가 났을 때, 추적이 용이해진다!! </br>
부모-자식관계!! 원인이 명확하여 범인찾기 좋다

---

### 리액트는 컴포넌트 기반으로 만든다

자바스크립트는 처음이자 끝</br>
계속 익히도록 노력하기!!

</br>
vite로 프로젝트를 만드는 것을 추천
</br>
스트릭트모드 지우기 

---

>1. 데이터 생각하고
>2. 이것이 바뀌는가? 생각하기 (state)

</br>

ex) </br>
뉴스나 광고는 계속 바뀜 => 이런것들은 `state`로 관리할 필요가있다


Todo라면 할 일들은 모두 `state`로 만들어줘야함


{}중괄호를 해야만 js코드에 접근이가능핟다

---

js

return jsx

---

`state`는 불변성이라는 특성이있음 </br>
=> 참조를 끊어줘야함

</br>

```jsx
newTodo === newTodo // false여야함
```
그래야  state가 바꼈다고 인지한다

 

바뀌었는지 감지하려면, `useEffect`로! 

</br>

자식은 부모의 스테이트를 바꾸려면 허락을 받아야함



```
1. 화면에서 바뀌는 데이터를 상태 state로 만들자
2. 반복 사용되는 것들을 컴포넌트화하자
3. 비슷한데 다른 부분을 props로 만들자 (index 같은 것들)
4. 화면은 미리 다 만들어두고 보였다 안보였다한다 (삼항연산자, &&, map사용하기)
```
 