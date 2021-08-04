import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from "./redux";
import { buyIce } from "./redux";

export const HooksContainerCakes = () =>{
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Num of Cake - {numOfCakes} </h2>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
export const HooksContainerIce = () => {
    const numOfIce = useSelector(es => es.iceCream.numOfIce);
    const dispatch = useDispatch();
    return (
        <div>
            <h2> Num Of Ice - {numOfIce}</h2>
            <button onClick={()=>dispatch(buyIce())}>Buy ice</button>
        </div>
    )
}