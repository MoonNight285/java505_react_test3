import React, {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContents from "./MainContents";

function DarkOrLight(props) {
    // state로 등록
    const [theme, setTheme] = useState("light");
    
    // useCallback() : 콜백함수를 반환하는 리액트의 훅
    // 사용이유 : 리액트에는 메모이제이션이라는 기능을 사용할수 있어서 데이터가 지정한 의존성 배열에
    // 등록된 데이터가 변경되었을경우에 동작한다.
    // 메모이제이션이라는 기능은 변경된 사항이 있을때만 재 렌더링을하여 리소스를 적게 사용해 속도가 빨라질수있다. useEffect 같은경우는 무조건 재 렌더링 실행
    const toggleTheme = useCallback(() => {
        // state로 지정된 theme 값이 변경될 경우에만 동작
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);
    
    return (
        // 컨텍스트 Provider로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 한다.
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContents />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;