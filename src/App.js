import React, { useState } from "react";
import List from "./ToDoList";
import './index.css';

function App() {

  const [inputItems, setInputItems] = useState("");
  const [Items ,setItems] = useState([]);

  const itemEvents = (e) => {
    setInputItems(e.target.value);
  }

  const listOfItems = () => {
    if(inputItems === ""){

    } else {
      const allInputData = { id: new Date().getTime().toString() , name : inputItems}
      setItems( (prevItems) => { return [...prevItems,allInputData]; });
      setInputItems("");
    }
  };

  const deleteItems = (key) => {
    setItems( (preVal) => {
      return preVal.filter( (arrEle , index) => 
      {
        return index !== key
      }
      )
    })
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
          <button onClick={listOfItems}>+</button>
          <ol>
            {Items.map( (itemValue , index) => {
              return (
                <div>
                <List key = {itemValue.id}
                      id = {itemValue.id}
                      text = {itemValue.name}
                      onSelect = {deleteItems}
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