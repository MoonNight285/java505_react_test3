import React from "react";

function ArticleContent2({title, subContents}) {
    return (
        <div className={"me-5"}>
            <h2 className={"text-center"}>{title}</h2>
            {
                subContents.map(item => {
                    return (<div className={"my-5"}>
                        <h4>{item.subTitle}</h4>
                        <p>{item.subContent}</p>
                    </div>);
                })
            }
        </div>
    );
}

export default ArticleContent2;