import React from 'react'
import { connect } from 'react-redux'
import {increment,decrement} from'../redux/store'

 const Counter =(props)=>
 {
 	return(
 		<div className="p-3 mb-2 bg-secondary text-white" style={{position:'relative',top:'50px'}}>
 	     <button onClick={props.increment} type="button" className="btn btn-primary">+</button>
 	     <h1> the counter is {props.dataCounter}</h1>
 	     <button onClick={props.decrement} type="button" className="btn btn-primary">-</button>
 		</div>
 		)
 }
const mapStateToProps = state =>{
	return {dataCounter: state.dataCounter}
	console.log(state)
}
const mapDispatchToProps = dispatch=>{
	return{
		increment:()=>dispatch(increment()),
		decrement:()=>dispatch(decrement())
	}

}

 export default connect(mapStateToProps,mapDispatchToProps)(Counter);

