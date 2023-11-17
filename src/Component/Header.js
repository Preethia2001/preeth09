import React,{usestate}from 'react'

 const Header=()=> {
  const[name,setName]=usestate("Ram")
  return (
    <div>
      <h1>my name is{name}</h1>
      <button onClick={()=>setName("sita")}>click here</button>
      
    </div>
  )
}

export default Header
