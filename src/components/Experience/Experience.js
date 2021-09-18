
import { ItemsContainer } from './ItemsContainer';
import React, { useState} from 'react';
import { AddItem } from './AddItem';
import {useDispatch} from 'react-redux';
import { detailsCreator } from '../../redux/actions/detailsActions';
import { useHistory } from 'react-router';






let  Experience = ()=> {
  let history=useHistory();
  let dispatch=useDispatch();
 //delete handler
  const onDelete = (item) => {
    setItems(items.filter((e) => {
      return e !== item
    }))
    
  }
  //addhandler

const addItem = (role,name,from,to,description) => {
    const myItem = {
      role: role,
      name:name,
      from: from,
      to:to,
      description: description,
    }
    setItems([...items, myItem]);
    
  }
  const next=()=>{
    dispatch(detailsCreator({experience:items}));
    history.push("./projects")

  }
  //state
const [items, setItems] = useState([]);
return (
       <>
      <AddItem addItem={addItem} next={next} />
      
      <ItemsContainer items={items} onDelete={onDelete} />
      
      </>
  );
}
export default Experience;
