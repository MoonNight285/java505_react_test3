// 1. 모든 컴포넌트는 React를 import를 해서 사용해야한다.
// 2. 함수 컴포넌트는 그냥 함수 생성해 사용하면 된다.
// 3. 함수 및 클래스 컴포넌트는 export default로 선언해줘야 외부에서 사용이 가능하다.
// 4. 함수 컴포넌트에는 render() 함수를 사용하지않고 return으로 처리한다. 그리고 return 블럭안에서 JSX 문법을 사용한다.
// 5. state 변경 및 생명주기에 관련된 함수를 사용하기 위해서 hooks를 사용함

import React, {useState} from "react";

function FunctionComponent(props) {
    return (
        <div>
            <p>함수 컴포넌트 사용</p>
        </div>
    );
}

export default FunctionComponent;