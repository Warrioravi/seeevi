import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {detailsCreator} from '../../redux/actions/detailsActions';


let Personal=()=>{
  let dispatch = useDispatch();
  let {name,summary,city,phone,email,github}= useState(state=>state);


  let history=useHistory();


   function handleSkills(value){
        let arr=value.split(",");
        dispatch(detailsCreator({skills:arr}))
        console.log(arr);
  }

    
return <> <div>
<div className="container">
<h3 className="m-4">Add Personal details</h3>
<form>

<div className="form-group m-4">
<label for="title">Name</label>
<input type="text" className="form-control" value={name} onChange={(e)=>{dispatch(detailsCreator({name:e.currentTarget.value}))}} placeholder="Enter name"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">Summary</label>
<input type="text" value={summary} onChange={(e)=>{dispatch(detailsCreator({summary:e.currentTarget.value}))}} className="form-control"  placeholder=" summary"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">City</label>
<input type="text" className="form-control" value={city} onChange={(e)=>{dispatch(detailsCreator({city:e.currentTarget.value}))}} placeholder="city"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">Email</label>
<input type="text" className="form-control" value={email} onChange={(e)=>{dispatch(detailsCreator({email:e.currentTarget.value}))}} placeholder="Email id"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">Phone</label>
<input type="number" className="form-control" value={phone} onChange={(e)=>{dispatch(detailsCreator({phone:e.currentTarget.value}))}} placeholder="Phone"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">Github</label>
<input type="text" className="form-control" value={github} onChange={(e)=>{dispatch(detailsCreator({github:e.currentTarget.value}))}} placeholder="Github id"/>
</div>
<div className="form-group m-4">
<label for="exampleInputPassword1">Skills</label>
<input type="text" className="form-control" onChange={(e)=>{handleSkills(e.currentTarget.value)}} placeholder="Add multiple skills separated by commas(,)"/>
</div>
<button type="submit"  onClick={(e)=>{
    e.preventDefault();
    history.push('/experience');
               }} className="btn btn-success btn-m mt-0">Next</button>
</form>
</div>
</div></>
}
export default Personal;