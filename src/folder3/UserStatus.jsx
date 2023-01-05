import React from "react";

// 문제1 - 아래의 소스에서 삼항 연산자를 사용한 부분을 if ~ else문을 사용하여 조건부 랜더링으로 수정하기
function UserStatus(props) {
    let loggedStatus;
    
    if (props.isLoggedIn) {
        loggedStatus = "로그인";
    } else {
        loggedStatus = "로그인하지 않은"
    }
    
    return (
        <div>
            {/*이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은.'}</b> 상태입니다.*/}
            이 사용자는 현재 <b>{loggedStatus}</b> 상태입니다.
        </div>
    );
}

export default UserStatus;