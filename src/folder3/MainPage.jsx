import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
    const [showWarning, setShowWaring] = useState(false);
    
    const handleToggleClick = () => {
        setShowWaring(prevState => !prevState);
    }
    
    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </div>
    );
}

export default MainPage;