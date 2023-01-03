import React from "react";

function Profile(props) {
    let data = props;
    let userName = props.userName;
    
    return (
        <div className={"border rounded-2 px-3 m-4"}>
            <div className={"my-3"}>
                <label for={"user-id"} className={"form-label"}>아이디 : </label>
                {/* 매개변수를 바로 쓰는 방법과 자스로 제어후 사용하는 방법이 있다. */}
                {/*<input type={"text"} id={"user-id"} className={"form-control"} value={props.userId}/>*/}
                <input type={"text"} id={"user-id"} className={"form-control"} value={data.userId}/>
            </div>
            
            <div className={"my-3"}>
                <label for={"user-name"} className={"form-label"}>이름 : </label>
                {/* 매개변수를 바로 쓰는 방법과 자스로 제어후 사용하는 방법이 있다. */}
                {/*<input type={"text"} id={"user-name"} className={"form-control"} value={props.userName}/>*/}
                <input type={"text"} id={"user-name"} className={"form-control"} value={userName}/>
            </div>
            
            <div className={"my-3"}>
                <label for={"user-tel"} className={"form-label"}>전화번호 : </label>
                <input type={"tel"} id={"user-tel"} className={"form-control"} value={props.userTel}/>
            </div>
            
            <div className={"my-3"}>
                <label for={"user-email"} className={"form-label"}>이메일 : </label>
                <input type={"email"} id={"user-email"} className={"form-control"} value={props.userEmail}/>
            </div>
        </div>
    );
}

export default Profile;