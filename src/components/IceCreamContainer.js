import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
  return (
    <div>
        <h1>{props.numberOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numberOfIceCreams:state.iceCream.numberOfIceCreams
    }
}
const mapDispactchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispactchToProps)(IceCreamContainer)

