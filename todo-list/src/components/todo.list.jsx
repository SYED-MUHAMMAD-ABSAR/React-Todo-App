// import { useState } from "react"
import React, { useState } from 'react'
import './todo.list.css'

function todoList(props) {
    const [inputText, setInputText] = useState('')
    return (
        <>
            <div className='container'>
                <input
                    type="text"
                    className='todo'
                    value={inputText}
                    placeholder='Enter Your Todo'
                    onChange={(e) => setInputText(e.target.value)} />
                <button className='btn' onClick={() => {
                    props.addList(inputText)
                    setInputText('')
                }}>+</button>
            </div>
        </>
    )
}

export default todoList