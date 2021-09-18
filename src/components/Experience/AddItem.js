import React, { useState } from 'react'
import { useHistory } from 'react-router';

export const AddItem = ({addItem,next}) => {
    let history=useHistory();
    const [role,setRole]= useState("");
    const [desc,setDesc]= useState("");
    const [name,setName]=useState("");
    const [from,setFrom]=useState("");
    const [to,setTo]=useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!role||!desc){
            alert("Experience name or description cannot be blank")
        }
       else{
        addItem(role,name,from,to,desc);
        setDesc("");
        setRole("");
        setName("");
        setFrom("");
        setTo("");
       }
        
    }
    return (
        <div>
            <div className="container">
             <h3 className="m-4">Add Experience</h3>
            <form onSubmit={submit}>
   
    <div className="form-group m-4">
      <label for="title">Company Name</label>
    <input type="text" className="form-control" value={name} id="title" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter company name"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">Role</label>
    <input type="text" className="form-control" value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder="Job Role"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">From</label>
    <input type="text" className="form-control"  value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder="MM/YYYY"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">To</label>
    <input type="text" className="form-control"  value={to} onChange={(e)=>{setTo(e.target.value)}} placeholder="MM/YYYY"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="optional"/>
    </div>
   
   <button type="submit" className="btn btn-success btn-sm m-4 ">Add Experience</button>
   <button className="btn btn-sm  btn-primary" onClick={(e)=>{e.preventDefault()
     next()}}>Next</button>
   
   </form>
       </div>
       </div>
    )
}
