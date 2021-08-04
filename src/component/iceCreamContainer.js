import React from "react";
import { buyIce } from "./redux/index";
import { connect } from "react-redux";

function IceCreamContainer(props){
    return(
        <div>
            <h2>Number of IceCream - {props.numOfIce}</h2>
            <button onClick={props.buyIce}>Buy Ice</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfIce: state.iceCream.numOfIce
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIce: () => dispatch(buyIce())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)
