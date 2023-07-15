import {useReducer} from 'react'

const reducer=(state,action)=>{
  switch(action.type){
    case"increment":
    return{count:state.count+1,showText:state.showText}
    case "toggleShowText":
      return{count:state.count,showText:!state.showText}
      default:
        return state;
  }}


const useReduce = () => {
  const[state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <div>

<h1>{state.count}</h1>
<button
onClick={()=>{
  dispatch({type:"increment"})
  dispatch({type:"toggleShowText"})
 
}}
>click here</button>
{state.showText && <p>this is a text</p>}
    </div>
  )
}

export default useReduce