import React, {useContext, useState} from "react";
import ThemeContext from "./ThemeContext";

function MainContents(props) {
    // useContext() 훅을 사용하여 <Context.Consumer>를 없이 컨텍스트에 저장된 정보를 사용함
    const {theme, toggleTheme} = useContext(ThemeContext);
    
    return (
        <div style={{width : "100vw", height : "100hw", padding : "1.5rem",
            backgroundColor : theme == "light" ? "white" : "black",
            color : theme == "light" ? "black" : "white"}}>
            <p>테마 변경이 가능한 웹 사이트</p>
            {/* button 태그의 클릭 이벤트에 컨텍스트를 통해 가져온 함수를 설정한다. */}
            <button onClick={toggleTheme}>테마 변경</button>
        </div>
    );
}

export default MainContents;