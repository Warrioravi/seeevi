import React, { useState } from 'react'


export const AddItem = ({addItem,next}) => {
  
    const [project,setProject]= useState("");
    const [desc,setDesc]= useState("");
    const [link,setLink]=useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!project||!desc){
            alert("Project name or description cannot be blank")
        }
       else{
        addItem(project,desc,link);
        setDesc("");
        setProject("");
        setLink("");
        
       }
        
    }
    return (
        <div>
            <div className="container">
             <h3 className="m-4">Add Projects</h3>
            <form onSubmit={submit}>
   
    <div className="form-group m-4">
      <label for="title">project Name</label>
    <input type="text" className="form-control" value={project} id="title" onChange={(e)=>{setProject(e.target.value)}} placeholder="Enter project name"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">project Description</label>
    <input type="text" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description"/>
    </div>
    <div className="form-group m-4">
    <label for="exampleInputPassword1">project Link</label>
    <input type="text" className="form-control" id="link" value={link} onChange={(e)=>{setLink(e.target.value)}} placeholder="optional"/>
    </div>
   
   <button type="submit" className="btn btn-success btn-sm m-4">Add project</button>
   <button className="btn btn-sm  btn-primary" onClick={(e)=>{e.preventDefault();
      next()}}>Next</button>
   </form>
       </div>
       </div>
    )
}
