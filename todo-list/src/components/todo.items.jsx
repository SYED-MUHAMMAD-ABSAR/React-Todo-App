import React from 'react'
import './todo.items.css'


const TodoItems = (props) => {
    if (!props.item) return null;
    return (
        <div className='container'>
            <li className="list">
                {props.item}
                <span className='icon'><i className="fa-regular fa-trash-can icon-delete"
                    onClick={e => {
                        props.deleteItem(props.index)
                    }}></i></span>
            </li>
        </div>
    )
}


export default TodoItems