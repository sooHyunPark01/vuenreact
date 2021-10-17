import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';
function CrudListItem(props) {
    // 컴포넌트의 상태값 설정
    const {item , callbackDel, callbackUp, callbackDown, callbackSave  } =props
    const [isEditMode, setIsEditMode] = useState(false); // 상태값이 기본타입인 경우

    const inputName= useRef();
    const inputPower= useRef();


    const handerDel = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      callbackDel(item)
    };
    const handerUp = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
        console.log(event.target);
        callbackUp(item)
    };
    const handerDown = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
        console.log(event.target);
        callbackDown (item)
    };
    const handerEdit = (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
        console.log(event.target);
       setIsEditMode( !isEditMode );
    };
    const handerSave= (event)=>{
        // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다

        if (inputName.current.value === "" ){
            alert("이름에 값을 입력하세요.")
            inputName.current.focus();
            event.stopPropagation();
            event.preventDefault();
            return false;
        }  
        

        if (inputPower.current.value === "" ){
            alert("파워에 값을 입력하세요.")
            inputPower.current.focus();
            event.stopPropagation();
            event.preventDefault();
            return false;
        }  
        
        if( isNaN( Number(inputPower.current.value ) )){
            alert("파워에 숫자만 입력하세요.")
            inputPower.current.value =0;
            inputPower.current.focus();
            event.stopPropagation();
            event.preventDefault();                
            return false;
        }

        var newItem={
            id : item.id, 
            name: inputName.current.value,
            power: Number( inputPower.current.value ),
        }
        callbackSave( newItem );
        setIsEditMode( !isEditMode);
    };
    


    const strong = item.power >= 300 ? 'strong':''

    const formView =(
        <tr 
            className={strong} 
            key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.power}</td>
            <td>
                <button onClick={handerDel}>Del</button>
                <button onClick={handerUp}>Power Up</button>
                <button onClick={handerDown}>Power Down</button>
                <button onClick={handerEdit}>Edit</button>
            </td>
        </tr>
    )

    const formEdit=(
        <tr 
            className={strong} 
            key={item.id}>
            <td>{item.id}</td>
            <td>
                <input 
                    defaultValue={item.name}  
                    name="name" 
                    placeholder="이름을 입력하세요" 
                    ref={inputName} />
            </td>
            <td>
                <input 
                    defaultValue={item.power} 
                    name="power" 
                    placeholder="파워를 입력하세요" 
                    ref={inputPower} />
            </td>
            <td>
                <button onClick={handerDel}>Del</button>
                <button onClick={handerUp}>Power Up</button>
                <button onClick={handerDown}>Power Down</button>
                <button onClick={handerSave}>Save</button>
            </td>
        </tr>
    )
    // JSX로 화면 만들기
    return isEditMode ? formEdit : formView;
}
export default CrudListItem;