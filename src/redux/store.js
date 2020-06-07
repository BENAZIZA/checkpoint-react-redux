import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const INCREMENT ='INCREMENT'
const DECREMENT ='DECREMENT'
export const increment =()=>{
    return{
    	type:INCREMENT
    }
    
}
export const decrement =()=>{
	return{
		type:DECREMENT
	}
}
const initialState ={
	dataCounter:10
}
const Reducer = (state=initialState,action)=>
{
	switch(action.type){
		case INCREMENT :return {...state,dataCounter: state.dataCounter+1}
		case DECREMENT :return {...state,dataCounter:state.dataCounter-1}
		default:return state
	}
}
const store=createStore(Reducer,applyMiddleware(logger,thunk))
export default store;
