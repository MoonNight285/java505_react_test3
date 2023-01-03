import React from "react";
import {Nav} from "react-bootstrap";
import "./navItem.css"

const styles = {
    navStyle : {
        boxShadow : "0px 2px 5px 0px gray",
        height : "60px",
        position : "fixed",
        width : "100%",
        backgroundColor : "white"
    },
    
    navFontColor : {
        color : "black"
    }
}

function Header() {
    return (
        <Nav className={"d-flex justify-content-between align-content-center"} style={styles.navStyle}>
            <Nav.Item>
                <Nav.Link href="/" style={styles.navFontColor}>Gourmet au Catering</Nav.Link>
            </Nav.Item>
            <div className={"d-flex"}>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" style={styles.navFontColor}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" style={styles.navFontColor}>Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" style={styles.navFontColor}>Contact</Nav.Link>
                </Nav.Item>
            </div>
        </Nav>
    );
}

export default Header;