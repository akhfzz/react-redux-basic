import React from 'react';
import { buyCake } from './redux/index'
import { connect } from 'react-redux';

function CakeContainer(props){
    return(
        <div>
            <h2>Number of Cake - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)