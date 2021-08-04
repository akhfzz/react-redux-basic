import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIce } from "./redux";

function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.item} </h2> 
            <button onClick={props.buyItem}>Buy now</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.iceCream.numOfIce 
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownDispatch) => {
    const dispatchFunction = ownDispatch.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIce())
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)