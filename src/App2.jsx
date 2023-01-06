import React from "react"; // 기본으로 설치된 라이브러리는 경로없이 사용가능
import Contents from "./Contents"; // 직접만든 컴포넌트는 경로 사용해야함
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import PhotoInfo from "./PhotoInfo";
import LinkList from "./LinkList";
import Board from "./homework/Board";
import About from "./homework/About";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

const styles = {
    fakeImg : {
        height : 200,
        backgroundColor : "#aaa"
    }
}

function App2() {
    return (
        <div>
            <Header />
            <Navigate />
            
            <div className={"container mt-5"}>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                        <PhotoInfo />
                        <LinkList />
                    </div>
                    <div className={"col-sm-8"}>
                        <Contents />
                        <Contents />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App2;