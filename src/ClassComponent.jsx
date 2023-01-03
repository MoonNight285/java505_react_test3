// 1. 모든 컴포넌트는 React를 import를 해서 사용해야한다.
// 2. 클래스 컴포넌트는 React.Component를 상속받아 클래스를 생성해야한다.
// 3. 함수 및 클래스 컴포넌트는 export default로 선언해줘야 외부에서 사용이 가능하다.
// 4. 클래스 컴포넌트에는 render() 메소드가 존재한다. 그리고 render() 메소드에서 JSX 문법을 사용한다.
// 5. 클래스 컴포넌트는 리액트 생명주기 메소드를 사용할 수 있다.
// 6. 생성자를 사용할수 있다. 생성자에서 상태 표현을 위한 state를 설정해야한다.

import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <p>클래스 컴포넌트 화면</p>
            </div>
        );
    }
    
    componentDidMount() {
        console.log("마운트 후 출력");
    }
}

export default ClassComponent;