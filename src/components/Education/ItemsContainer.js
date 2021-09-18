import React from 'react'
import { Item } from './Item'

export const ItemsContainer = (props) => {//named export
    return (
        <div className="container p-4">
           <h3>Education</h3>
           {props.items.length===0 ? "No Experiences Added" : 
             props.items.map((item,index) =>{
            return <Item item={item} key={index} onDelete={props.onDelete}/>
             })}
            
        
          
        </div>
        )
}

