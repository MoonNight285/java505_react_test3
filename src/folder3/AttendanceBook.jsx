import React from "react";

const students = [
    {key : 1, name : "Inje"},
    {key : 2, name : "Steve"},
    {key : 3, name : "Bill"},
    {key : 4, name : "Jeff"}
];

// 리스트 : 비슷한 데이터를 모아둔 것
// key : 리엑트에서 각 객체나 아이템을 구분할 수 있는 고유의 값
// 리엑트에서는 해당 리스트 사이에서 엘리먼트를 구분할 수 있는 고유한 값이면 된다.
// id를 사용, id라는 것 자체가 고유한 값이라는 의미이므로 키값으로 사용할 수 있다.
function AttendanceBook() {
    return (
        <ul>
            {students.map((student) => {
                return <li>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;