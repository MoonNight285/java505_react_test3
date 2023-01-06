import React from "react";
import Toolbar from "./Toolbar";

// 컨텍스트 : 자식 컴포넌트에서 데이터를 한번에 전달할 수 있는 객체
// React.createContext : 컨텍스트 객체를 생성
// Provider를 사용하여 생성된 컨텍스트를 사용할 컴포넌트를 지정하여 사용
// 사용법
// const 컨텍스트명 = React.createContext(기본값);

// Context.Provider : 생성된 컨텍스트를 사용할 자식 컴포넌트를 지정 시 사용한다.
// value 속성에 전달하고자하는 데이터를 지정, 해당 데이터를 사용하고자 하는 자손 컴포넌트를 감싸면 어느 위치의
// 자손 컴포넌트이든 상관없이 해당 데이터에 접근이 가능하다.
// Provider 여러개 사용하는것이 가능하다.
// 사용법
// <컨텍스트명.Provider value = {전달할 데이터}>
//      <자손 컴포넌트 />
// </컨텍스트명.Provider>

// Class.contextType : 클래스 컴포넌트에서 컨텍스트에 저장된 내용을 가져올 경우 사용한다.
// 사용법
// componentDidMount() {
//      let value = this.context;
// }
//
// 사용하고자하는 컴포넌트 클래스.contextType = 생성된 컨텍스트;

// Context.Consumer : Provider로 감싸진 자손 컴포넌트 중 컨텍스트에 저장된 데이터를 사용하고자 할 경우
// Consumer를 사용하여 저장된 데이터를 가져온다.
// 함수 컴포넌트에서 사용
// Consumer는 여러개 사용하는것이 가능하다.
// 사용법
// <컨텍스트명.Consumer>
//      {value => <컴포넌트 key={value} />}
// </컨텍스트명.Consumer>

// Context.displayName : 컨텍스트의 이름을 지정할 때 사용
// 개발자 도구에서 displayName으로 지정한 이름이 출력됨
// <지정한이름.Provider> 또는 <지정한이름.Consumer>
// 사용법
// 컨텍스트명.displayName = '사용하고자하는 이름';

// useContext : 컨텍스트를 사용하기 위한 리엑트 훅
// 사용법
// const value = useContext(컨텍스트명);

function App8() {
    // 자식 컴포넌트에 theme라는 이름으로 데이터를 전달
    return (
        <Toolbar theme={"dark"} />
    );
}

export default App8;