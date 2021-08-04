import React,{useState} from "react";
import { buyCake } from "./redux/index";
import { connect } from "react-redux";

function NewContainer(props){
    const [number, setNumber] = useState(1)
    return(
        <div>
            <h2>Number of IceCream - {props.numOfIce}</h2>
            <input type='text' value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} cake </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfCake: state.cake.numOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewContainer)
