import React, { useState, useEffect, useRef, useCallback, useMemo, Fragment } from 'react';
import CrudListItem from './CrudListItem'
function CrudList(props) {
    const arrs =props.items.map( (item) => {
        return (
            <CrudListItem 
                item={item} 
                key={item.id}    
                {...props}
                // callbackDel ={props.callbackDel} 
                // callbackUp={props.callbackUp}
                // callbackDown={props.callbackDown}
                // callbackSave={props.callbackSave}                            
            ></CrudListItem>
        )
    })
    // JSX로 화면 만들기
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {arrs}
                </tbody>
            </table>                      
        </div>
    )
}

export default CrudList;