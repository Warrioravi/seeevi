
import { ItemsContainer } from './ItemsContainer';
import React, { useState} from 'react';
import { AddItem } from './AddItem';
import { useHistory } from 'react-router';
import { detailsCreator } from '../../redux/actions/detailsActions';
import { useDispatch } from 'react-redux';




let  Projects = ()=> {
  let history=useHistory();
  let dispatch = useDispatch();
 //delete handler
  const onDelete = (item) => {
    setItems(items.filter((e) => {
      return e !== item
    }))
  }
  //addhandler

  let next=()=>{
    dispatch(detailsCreator({projects:items}));
    history.push("./education")

  }
const addItem = (proj,desc,link) => {
    const myItem = {
      project: proj,
      description: desc,
      project_link:link,
    }
    setItems([...items, myItem]);
  }
  //state
const [items, setItems] = useState([]);
return (
       <>
      <AddItem next={next} addItem={addItem} />
      <ItemsContainer items={items}  onDelete={onDelete} />
      </>
  );
}
export default Projects;
