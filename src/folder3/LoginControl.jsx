import React, {useState} from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>로그아웃</button>
    );
}

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };
    
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }
    
    // 엘리먼트 변수 : 자바스크립트 변수에 리엑트 컴포넌트를 저장한 것
    // 조건부 랜더링을 사용하기 위해서 자바스크립트 변수 button에 리엑트 컴포넌트를 저장
    let button;
    
    // state의 상태에 따라서 엘리먼트 변수에 저장될 리엑트 컴포넌트를 변경
    if (isLoggedIn) {
        button = <LoginButton onClick={handleLogoutClick} />;
    } else {
        button = <LogoutButton onClick={handleLoginClick} />;
    }
    
    return (
        <div>
            <Greeting isLogginedIn={isLoggedIn} />
            {/* 엘리먼트 변수에 저장된 리엑트 컴포넌트가 출력된다.*/}
            {button}
        </div>
    );
}

export default LoginControl;