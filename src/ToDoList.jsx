import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const List = (props) => {

    return (<>
        <div className="todo_style">
            <span className="Icons">
            <EditIcon
                className="editIcon fa fa-times"
                aria-hidden="true"
                onClick={ () => {
                    props.onSelect(props.id);
                }}
            />
            <DeleteIcon 
                className="deleteIcon fa fa-times"
                aria-hidden="true"
                onClick={() => {
                    props.onSelect(props.id);
                }}
            />  
            </span>
            <li> {props.text} </li>
        </div>
    </>)
}

export default List;