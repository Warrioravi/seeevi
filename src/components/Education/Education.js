
import { ItemsContainer } from './ItemsContainer';
import React, { useState} from 'react';
import { AddItem } from './AddItem';
import { useHistory } from 'react-router';
import { detailsCreator } from '../../redux/actions/detailsActions';
import { useDispatch } from 'react-redux';







let  Education = ()=> {
  let history=useHistory();
  let dispatch=useDispatch();
 //delete handler
  const onDelete = (item) => {
    setItems(items.filter((e) => {
      return e !== item
    }))
  }
  //addhandler
 
const addItem = (course,stream,college,from,to,description) => {
    const myItem = {
      course:course,
      stream:stream,
      college:college,
      from: from,
      to:to,
      description: description,
    }
    setItems([...items, myItem]);
  }

  const next=()=>{
    dispatch(detailsCreator({education:items}))
    history.push('/achievements')
  }
  //state
const [items, setItems] = useState([]);
return (
       <>
      <AddItem next={next} addItem={addItem} />
      
      <ItemsContainer items={items} onDelete={onDelete} />
      
      </>
  );
}
export default Education;
