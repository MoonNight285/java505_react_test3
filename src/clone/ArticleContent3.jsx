import React from "react";
import "./button.css"

function ArticleContent3({title, contents}) {
    return (
        <div>
            <h2>{title}</h2>
            {
                contents.map(item => <p>{item}</p>)
            }
            <form>
                <label htmlFor={"userName"} className={"form-label mt-5"}>Name</label>
                <input type={"text"} id={"userName"} className={"mb-4"} />
                <label htmlFor={"userCount"} className={"form-label"}>How many people</label>
                <input type={"number"} id={"userCount"} className={"mb-4"} />
                <label htmlFor={"date"} className={"form-label"}>Name</label>
                <input type={"datetime-local"} className={"mb-5"} />
                <input type={"text"} placeholder={"Message \\ Special requirements"} className={"mb-4"} />
                <button type={"button"} className={"mt-3"}>send message</button>
            </form>
        </div>
    );
};

export default ArticleContent3;