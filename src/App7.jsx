import React from "react";
import Calculator from "./folder4/Calculator";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App7(props) {
    return (
        // <div>
        //     <Calculator />
        // </div>
        
        // 리액트 라우터 : SPA 방식의 리액트 앱을 MPA 방식으로 사용할 수 있도록 해주는 라이브러리
        // Routes : 페이지 객체를 여러개 가질 수 있는 객체
        // Route : 화면에 그려지는 페이지 객체
        // path : 웹 브라우저에 표시되는 url 주소 설정, 절대 경로/상대 경로 다 사용이 가능하다. *을 사용시 모든 페이지를 뜻함
        // path url을 정확하게 입력해야 접속이 가능
        // element : path로 지정된 url 주소와 매칭되는 컴포넌트
        // <Link> : 리액트 라우터에서 사용되는 링크 전용 컴포넌트, html의 <a> 태그와 동일하다.
        // to : url 주소 입력, Route 컴포넌트에 path로 설정된 주소
        // <Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={"blogs"} element={<Blogs />} />
                    <Route path={"contact"} element={<Contact />} />
                    <Route path={"*"} element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App7;