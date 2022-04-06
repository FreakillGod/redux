import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
        <h1>{props.numberOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numberOfCakes:state.cake.numberOfCakes
    }
}
const mapDispactchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispactchToProps)(CakeContainer)