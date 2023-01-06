import React from "react";
import {Link} from "react-router-dom";

function Navigate() {
    return (
        <nav className={"navbar navbar-expand-sm bg-dark navbar-dark"}>
            <div className={"container-fluid"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/"}>main</Link>
                        {/*<a className={"nav-link active"} href={"#"}>main</a>*/}
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/board"}>board</Link>
                        {/*<a className={"nav-link active"} href={"#"}>board</a>*/}
                    </li>
                    <li className={"nav-item"}>
                        <Link className={"nav-link"} to={"/about"}>about</Link>
                        {/*<a className={"nav-link active"} href={"#"}>about</a>*/}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigate;