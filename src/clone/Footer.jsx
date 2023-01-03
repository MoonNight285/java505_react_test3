import React from "react";

const footerStyle = {
    height : "100px",
    backgroundColor : "lightgray"
}

function Footer({content}) {
    return (
        <footer className={"d-flex justify-content-center align-items-center"} style={footerStyle}>
            <p>{content}</p>
        </footer>
    );
}

export default Footer;