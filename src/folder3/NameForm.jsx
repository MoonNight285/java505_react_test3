import React, {useState} from "react";

function NameForm(props) {
    // 변수 value를 state로 설정, 기본값은 빈문자열
    const [value, setValue] = useState('');
    
    // 이벤트 발생시 동작하는 함수
    // 매개변수로 자바스크립트 event 객체를 가져온다.
    // 이벤트가 발생된 태그의 정보가 들어있다.
    const handleChange = (event) => {
        // state로 설정된 변수 value의 값을 변경하는 setValue() 함수를 실행
        // event 객체를 통해서 이벤트가 발생한 대상의 정보를 가져온다.
        // 이벤트 발생 대상이 가지고 있는 value 값을 사용하여 state값을 변경한다.
        setValue(event.target.value);
    }
    
    const handleSubmit = (event) => {
        alert("입력한 이름 : " + value);
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit} className={"container"}>
            <div className={"my-3"}>
                <label htmlFor={"user-name"} className={"form-label"}>이름 : </label>
                {/* input 태그의 value를 state로 설정된 변수를 사용하여 화면에 데이터를 출력 */}
                {/* 사용자 입력에 의해서 값이 변경될 경우 이벤트를 발생 */}
                <input type={"text"} className={"form-control"} value={value} onChange={handleChange} />
            </div>
            <div className={"my-3"}>
                <button type={"submit"} className={"btn btn-primary"}>제출</button>
            </div>
        </form>
    );
}

export default NameForm;