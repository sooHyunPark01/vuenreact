import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';
function CrudInput(props) {

        
    // ref 만들기. 예시) const refInput = useRef();
    const inputName= useRef();
    const inputPower= useRef();


    
    const handlerAdd =(event) => {

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

        var man={
            name: inputName.current.value,
            power: Number( inputPower.current.value ),
        }
        props.callbackAdd( man );

        inputPower.current.value = null;
        inputName.current.value = 0;
    }
    
    // JSX로 화면 만들기
    return (
        <div>
            <div>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" placeholder="이름을 입력하세요" ref={inputName}/>
            </div>
            <div>
                <label htmlFor="number">Power : </label>
                <input type="number" name="power" placeholder="숫자를 입력하세요" ref={inputPower} />
            </div>
            <button onClick={handlerAdd}>Add</button>
        </div>
    )
}

export default CrudInput;