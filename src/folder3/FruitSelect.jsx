import React, {useState} from "react";

function FruitSelect(props) {
    const [value, setValue] = useState("grape");
    const [value2, setValue2] = useState([]);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleChange2 = (e) => {
        let items = [];
        
        for (let i = 0; i < e.target.value.length; ++i) {
            items.push(e.target.value[i]);
        }
        
        setValue2(items);
    }
    
    const handleSubmit = (e) => {
        alert(`선택한 과일 : ${value}`);
        e.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={"my-3"}>
                <label htmlFor={"sel1"} className={"form-label"}>과일을 선택하세요 : </label>
                {/* select 사용 시 기본값 설정을 value 속성으로 진행 */}
                {/* multiple 속성 사용 시 true/false 사용 */}
                {/* 리엑트에서 기본 html의 속성 중 속성명으로만 효과가 발생하는 속성에 대해서도 값을 제어하기 위해서
                    속성명={값} 형식으로 사용한다.*/}
                <select id={"sel1"} className={"form-select"} value={value} onChange={handleChange}>
                    <option value={"apple"}>사과</option>
                    <option value={"banana"}>바나나</option>
                    <option value={"grape"}>포도</option>
                    <option value={"watermelon"}>수박</option>
                </select>
            </div>
            <div className={"my-3"}>
                <label htmlFor={"sel2"} className={"form-label"}>과일을 선택하세요 : </label>
                <select id={"sel2"} className={"form-select"} onChange={handleChange2} value={value2} multiple={true}>
                    <option value={"apple"}>사과</option>
                    <option value={"banana"}>바나나</option>
                    <option value={"grape"}>포도</option>
                    <option value={"watermelon"}>수박</option>
                </select>
            </div>
            <div className={"my-3"}>
                <button type={"submit"} className={"btn btn-primary"}>제출</button>
            </div>
        </form>
    );
}

export default FruitSelect;