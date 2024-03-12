import React, { useState } from "react";
import {Button} from "@mui/material";  //not default export  so need to use {}
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';  
import ListMUI from "./ListMUI";

const ToDoListMUI = () => {

    const [item,setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (e) => {
        setItem(e.target.value);
    };

    const listOfItems = () => {
        if(item === ""){
        } else {
            setNewItem( (prevValue) => {
            return [...prevValue,item];
        });
        setItem("");
    }
    };

    return (<>
        <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add your item" value={item} onChange={itemEvent}/>
            <Button className="newBtn" onClick={listOfItems}>
                <AddOutlinedIcon></AddOutlinedIcon>
            </Button>

            <br />
            <ol>
                {newItem.map( (val,index) => {
                    return <ListMUI 
                                   text = {val}
                                   key={index} />
                })
                }
            </ol>
            <br />
        </div>
        </div>
    </>)
}

export default ToDoListMUI;