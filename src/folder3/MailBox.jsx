import React from "react";

function MailBox(props) {
    const unreadMessage = props.unreadMessages;
    
    // inline if : jsx 문법으로 랜더링을 진행하는 render() 함수 내부에서 if 문을 사용할 수 없기 때문에
    // && 를 사용하거나 삼항 연산자를 사용하여 조건부 렌더링을 진행할 수 있음.
    // && 연산자 사용 시 && 연산자 오른쪽에 있는 피 연산자는 왼쪽에 있는 피 연산자의 값에 따라 랜더링이 결정된다.
    // && 연산자 왼쪽의 피연산자 값이 false일 경우 오른쪽의 피연산자는 연산 평가 자체가 동작하지 않는다.
    // && 연산자 왼쪽의 피연산자는 연산 평가가 이루어지기 때문에 해당 값이 그대로 출력된다.
    return (
        <div>
            <h1>안녕하세요.</h1>
            {unreadMessage > 0 && <h2>현재 {unreadMessage}개의 읽지 않은 메세지가 있습니다.</h2>}
        </div>
    );
}

export default MailBox;