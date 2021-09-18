
import { ItemsContainer } from './ItemsContainer';
import React, { useState} from 'react';
import { AddItem } from './AddItem';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { detailsCreator } from '../../redux/actions/detailsActions';




let  Achievements = ()=> {
  let dispatch=useDispatch();
  let history=useHistory();

 //delete handler
  const onDelete = (item) => {
    setItems(items.filter((e) => {
      return e !== item
    }))
  }
  //addhandler
 
const addItem = (achievement_name,description) => {
    const myItem = {
        achievement_name:achievement_name,
      description: description,
    }
    setItems([...items, myItem]);
  }

  const next=()=>{
    dispatch(detailsCreator({achievements:items}))
    history.push('/resume');

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
export default Achievements;
