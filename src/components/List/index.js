import React, { useState } from "react";

function List(props){


    return(
        <ul className="todo-list">
            {props.itemList.map(item => (
                <li type="text" key={item.id}>
                    {item.done ? <s>{item.text}</s> : item.text}
                    <button disabled={item.done} onClick={() => props.onItemEdit(item)}>Edit</button>
                    <button onClick={() => props.onItemDeleted(item)}>Remove</button>
                    <button onClick={() => props.onItemDone(item)}>Done</button>
                </li>
            ))}
        </ul>
    );
}

export default List;