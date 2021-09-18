import React from 'react'

export const Item = ({item,onDelete}) => {//named export
    return (
        <>
        <div>
           <h2>{item.project}</h2>
           <h4>{item.description}</h4>
           <h6>{item.project_link}</h6>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(item)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
