import React from "react";

function ArticleContent({title, subTitle, contentList}) {
    return (
        <div className={"text-center mx-5"}>
            <h3 className={"mb-5"}>{title}</h3>
            <h4 className={"mb-3"}>{subTitle}</h4>
            <div>
                { contentList.map(item => <p>{item}</p>) }
            </div>
        </div>
    );
}

export default ArticleContent;