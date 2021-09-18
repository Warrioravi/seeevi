import React, { useState } from 'react'
import { useHistory } from 'react-router';

export const AddItem = ({addItem,next}) => {
    let history=useHistory();
    const [achievement_name,setAchievement_name]= useState("");
   
    const [desc,setDesc]= useState("");
   
    const submit= (e)=>{
        e.preventDefault();
        if(!desc){
            alert("Experience name or description cannot be blank")
        }
       else{
        addItem(achievement_name,desc);
        setAchievement_name("");
        setDesc("");
        
       }
        
    }
    return (
        <div>
            <div className="container">
             <h3 className="m-4">Add Achievements</h3>
            <form onSubmit={submit}>
   
    <div className="form-group m-1">
    <label for="exampleInputPassword1">Achievement name</label>
    <input type="text" className="form-control"  value={achievement_name} onChange={(e)=>{setAchievement_name(e.target.value)}} placeholder="add achievement"/>
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="add description"/>
    </div>
   
   <button type="submit" className="btn btn-success btn-sm m-4 ">Add Achievement</button>
   <button className="btn btn-sm  btn-primary" onClick={(e)=>{e.preventDefault();
   next();
      }}>Generate Resume</button>
   
   </form>
       </div>
       </div>
    )
}
