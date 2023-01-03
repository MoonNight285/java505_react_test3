import React from "react";
import BoardItem from "./BoardItem";

const boardItemList = [
    {boardIdx : 100, boardTitle : "게시판 글 제목 100번", boardUserId : "test1", boardCreateDate : "2023-01-03 12:40:00"},
    {boardIdx : 101, boardTitle : "게시판 글 제목 101번", boardUserId : "test2", boardCreateDate : "2023-01-03 12:41:00"},
    {boardIdx : 102, boardTitle : "게시판 글 제목 102번", boardUserId : "test3", boardCreateDate : "2023-01-03 12:42:00"},
]

function BoardList() {
    return (
        <div className={"container mx-auto"}>
            <table className={"table table-hover table-striped"}>
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>글 제목</th>
                        <th>글 작성자</th>
                        <th>글 작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<BoardItem idx={"100"} title={"테스트 제목1"} userId={"user1"} createDt={"2023-01-03 12:40:00"}/>*/}
                    {/*<BoardItem idx={"101"} title={"테스트 제목2"} userId={"user2"} createDt={"2023-01-03 12:41:00"}/>*/}
                    {/*<BoardItem idx={"102"} title={"테스트 제목3"} userId={"user3"} createDt={"2023-01-03 12:42:00"}/>*/}
                    {
                        boardItemList.map((item) => {
                            return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;