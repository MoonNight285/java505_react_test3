import React from "react";
import Header from "./Header";
import MainImage from "./MainImage";
import Article from "./Article";
import Footer from "./Footer";

const containerStyle = {
    padding : "0"
}

function CloneApp() {
    return (
        <div className={"container-fluid"} style={containerStyle}>
            <Header />
            <MainImage />
            <Article />
            <Footer content={"Powered by w3.css"} />
        </div>
    );
}

export default CloneApp;