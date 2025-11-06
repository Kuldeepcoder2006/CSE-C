import React, { useState } from 'react'
import "./Book.css"

function Book(props) {
    const [count, setCount] = useState(0)
  return (
    <div id='book'>
        <center>
        <br />
        <img src={props.img} alt="" height={100} width={100}/>
        <h2>Title : {props.title}</h2>
        <h3>Price : {props.price} </h3>
        <div className="btn">
            <button onClick={()=>setCount(count+1)}>+</button>
            <span style={{margin:"10px"}}>{count}</span>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
        </center>
    </div>
  )
}

export default Book