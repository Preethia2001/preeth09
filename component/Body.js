import React,{usestate} from 'react'

const Body=()=>{
    const[count,setcount]=usestate(0)
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>Like</button>
        <p>Like:{count}</p>
    </div>
  )
}

export default Body
