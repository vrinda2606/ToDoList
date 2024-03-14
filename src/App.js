import React, { useState } from "react";
import List from "./ToDoList";
import './index.css';
import EditIcon from '@mui/icons-material/Edit';

function App() {

  const [inputItems, setInputItems] = useState("");
  const [Items ,setItems] = useState([]);
  const [toggleButton, setToggleButton] = useState(true);
  const [isEditItem , setEditItem] = useState(null);


  const itemEvents = (e) => {
    setInputItems(e.target.value);
  }

  const listOfItems = () => {
    if(inputItems === ""){
        alert("Enter valid input");
    }else if(inputItems && !toggleButton){
      setItems(
        Items.map( (e) => {
          if(e.id === isEditItem){
            return {...e, name: inputItems}
          }
          return e;
        })
      );
      setToggleButton(true);
      setInputItems("");
      setEditItem(null);
    } else {
      const allInputData = { id: new Date().getTime().toString() , name : inputItems}
      setItems( (prevItems) => { return [...prevItems,allInputData]; });
      setInputItems("");
    }
  };

  const deleteItems = (key) => {
    setItems( (preVal) => {
      return preVal.filter( (arrEle) => 
      {
        return key !== arrEle.id
      }
      )
    })
  }

  const editItems = (id) => {
    const newEditItems = Items.find( (item) => item.id === id );
    console.log(newEditItems);

    setToggleButton(false);
    setInputItems(newEditItems.name);

    setEditItem(id);
  }

  return (
    <>
      <div className="main_div">
         <div className="center-div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input 
            type="text" 
            placeholder="Add items" 
            onChange={itemEvents}
            value={inputItems}
            />
            {
              toggleButton ? <button className="toggle" onClick={listOfItems}>+</button> : <EditIcon className="editIcon fa fa-times toggle" aria-hidden="true" onClick={listOfItems} />
            }
          <ol>
            {Items.map( (itemValue , index) => {
              return (
                <div>
                <List key = {itemValue.id}
                      id = {itemValue.id}
                      text = {itemValue.name}
                      onSelect = {deleteItems}
                      onEdit = {editItems}
                />
              </div>)
            })}
          </ol>
         </div>
      </div>
    </>
  );
}

export default App;