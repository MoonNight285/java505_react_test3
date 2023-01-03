import React from "react";
import ArticleImage from "./ArticleImage";
import ArticleContent from "./ArticleContent";
import ArticleContent2 from "./ArticleContent2";
import ArticleContent3 from "./ArticleContent3";

const contentList1 = [
    "The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
]

const subContent1 = {
    subTitle : "Bread Basket",
    subContent : "Assortment of fresh baked fruit breads and muffins 5.50"
}

const subContent2 = {
    subTitle : "Honey Almond Granola with Fruits",
    subContent : "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
}

const subContent3 = {
    subTitle : "Belgian Waffle",
    subContent : "Vanilla flavored batter with malted flour 7.50"
}

const subContent4 = {
    subTitle : "Scrambled eggs",
    subContent : "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
}

const subContent5 = {
    subTitle : "Blueberry Pancakes",
    subContent : "With syrup, butter and lots of berries 8.50"
}

const contentList2 = [
    subContent1, subContent2, subContent3, subContent4, subContent5
]

const contentList3 = [
    "We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.",
    "Catering Service, 42nd Living St, 43043 New York, NY",
    "You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:"
]

const imgSize = {
    size1 : {
        width : 501,
        height : 617
    },
    size2 : {
        width: 501,
        height: 752
    }
}

function Article() {
    return (
        <div className={"row my-5"}>
            <div className={"col-xl-7 mx-auto my-5"}>
                <div className={"d-flex"}>
                    <ArticleImage url={"articleImg1.png"} size={imgSize.size1} />
                    <ArticleContent title = {"About Catering"} subTitle = {"Tradition since 1889"} contentList = {contentList1} />
                </div>
                <hr className={"my-5"}/>
                <div className={"d-flex my-5"}>
                    <ArticleContent2 title={"Our Menu"} subContents={contentList2} />
                    <ArticleImage url={"articleImg2.png"} size={imgSize.size2} />
                </div>
                <div className={"my-5"}>
                    <ArticleContent3 title={"Contact"} contents={contentList3}/>
                </div>
            </div>
        </div>
    );
}

export default Article;