import React from "react";
import Goal from "./folder3/Goal";
import Greeting from "./folder3/Greeting";
import LoginControl from "./folder3/LoginControl";

function App6() {
    return (
        <div className={"container mt-5"}>
            <Goal isGoal={true}/>
            <hr />
            <Greeting isLoggedIn={false} />
            <hr />
            <LoginControl />
        </div>
    );
}

export default App6;