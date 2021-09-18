import React from 'react'

export const Item = ({item,onDelete}) => {//named export
    return (
        <>
        <div>
           <h2>{item.college}</h2>
           <h4>{item.course}-{item.stream}</h4>
           <h6>{item.from}-{item.to}</h6>

           <h5>{item.description}</h5>
          
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(item)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
