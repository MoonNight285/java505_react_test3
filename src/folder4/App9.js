import React from "react";

// 컨텍스트 객체 생성
const ThemeContext = React.createContext("light");

function Toolbar2(props) {
    return (
        <ThemeContext.Consumer>
            {value => <ThemedButton2 aaa={value} />}
        </ThemeContext.Consumer>
        // <div>
        //     <ThemedButton2 />
        // </div>
    );
}

function ThemedButton2(props) {
    return (
        <ThemeContext.Consumer>
            {value => <Button2 theme={value} />}
        </ThemeContext.Consumer>
    );
}

function Button2(props) {
    return <button>{props.theme}</button>
}

function App9(props) {
    return (
        // Provider 의 값 전달은 value 속성으로 무조건 고정
        <ThemeContext.Provider value={'dark'} >
            <Toolbar2 />
        </ThemeContext.Provider>
    );
}

export default App9;