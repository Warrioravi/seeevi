import React, { useState } from 'react'
import { useHistory } from 'react-router';

export const AddItem = ({addItem,next}) => {
    let history=useHistory();
    const [course,setCourse]= useState("");
    const [stream,setStream]=useState("");
    const [desc,setDesc]= useState("");
    const [college,setCollege]=useState("");
    const [from,setFrom]=useState("");
    const [to,setTo]=useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!course||!stream||!college||!desc){
            alert("Experience name or description cannot be blank")
        }
       else{
        addItem(course,stream,college,from,to,desc);
        setDesc("");
        setStream("");
        setCollege("");
        setFrom("");
        setTo("");
        setCourse("");
       }
        
    }
    return (
        <div>
            <div className="container">
             <h3 className="m-4">Add Education</h3>
            <form onSubmit={submit}>
   
    <div className="form-group m-1">
      <label for="title">Course Name</label>
    <input type="text" className="form-control" value={course} id="title" onChange={(e)=>{setCourse(e.target.value)}} placeholder="Enter course name"/>
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1">Stream</label>
    <input type="text" className="form-control" value={stream} onChange={(e)=>{setStream(e.target.value)}} placeholder="Stream"/>
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1"></label>
    <input type="text" className="form-control" value={college} onChange={(e)=>{setCollege(e.target.value)}} placeholder="College"/>
    
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1">From</label>
    <input type="text" className="form-control"  value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder="MM/YYYY"/>
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1">To</label>
    <input type="text" className="form-control"  value={to} onChange={(e)=>{setTo(e.target.value)}} placeholder="MM/YYYY"/>
    </div>
    <div className="form-group m-1">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="cgpa /clubs/societies"/>
    </div>
   
   <button type="submit" className="btn btn-success btn-sm m-4 ">Add Education</button>
   <button className="btn btn-sm  btn-primary" onClick={(e)=>{e.preventDefault();
      next();
      }}>Next</button>
   
   </form>
       </div>
       </div>
    )
}
