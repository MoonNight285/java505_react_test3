import React from "react";

function Counter(props) {
    const count = 0;
    
    return (
        <div>
            {count && <h1>현재 카운트 : {0}</h1>}
        </div>
    );
}

export default Counter;