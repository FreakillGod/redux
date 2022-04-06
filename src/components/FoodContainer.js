import React from 'react'
import { addFood } from '../redux'
import { connect } from 'react-redux'

const FoodContainer = (props) => {
  return (
    <div>
        <h1>{props.numberOfFoods}</h1>
        <button onClick={props.addFood}>Buy Food</button>
    </div>
  )
}

const mapStateToProps=state=>{
    return{
        numberOfFoods:state.food.numberOfFoods
    }
}

const mapDispactchToProps=dispatch=>{
    return{
        addFood:()=>dispatch(addFood())
    }
}

export default connect(mapStateToProps,mapDispactchToProps)(FoodContainer)
