import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App5 from "./App5";
import CloneApp from "./clone/CloneApp";
import App6 from "./App6";
import MyApp from "./practice/MyApp";
import App7 from "./App7";
import App8 from "./folder4/App8";
import App9 from "./folder4/App9";
import DarkOrLight from "./folder4/DarkOrLight";
import App11 from "./folder4/App11";
import MyRouter from "./MyRouter";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // strict mode : 자바스크립트의 문법을 엄격하게 확인한다는 의미
    // React.StrictMode : 배포 버전에는 제외되고 개발 버전에서 동작하는 엄격모드, 몇 가지 함수를 중복실행하여
    // 잘못된 것이 없는지 확인하도록함
    <React.StrictMode>
        {/*<App />*/}
        {/*<App2 />*/}
        {/*<App3 />*/}
        {/*<CloneApp />*/}
        {/*<App5 />*/}
        {/*<App6 />*/}
        {/*<MyApp />*/}
        {/*<App7 />*/}
        {/*<App8 />*/}
        {/*<App9 />*/}
        {/*<DarkOrLight />*/}
        {/*<App11 />*/}
        <MyRouter />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
