import React from "react";

function ArticleImage({url, size}) {
    return (
        <div>
            <img src={url} style={size}/>
        </div>
    );
}

export default ArticleImage;