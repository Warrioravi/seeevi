import React from 'react'

export const Item = ({item,onDelete}) => {//named export
    return (
        <>
        <div>
           <h2>{item.achievement_name}</h2>
         

           <h5>{item.description}</h5>
          
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(item)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
