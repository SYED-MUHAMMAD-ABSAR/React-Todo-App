import React, { useState } from 'react'
import './App.css'
import TodoList from './components/todo.list'
import TodoItems from './components/todo.items';

function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    setListTodo([...listTodo, inputText])
  }

  const deleteListItem = (key)=>{
    let newList = [...listTodo]
    newList.splice(key,1)
    setListTodo([...newList])
  }

  return (
    <>
      <TodoList addList={addList} />
      <TodoItems />
      <div className='m-container'>
        <div className='c-container'>
          <h1 className='a-heading'>TODO</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <TodoItems key={i} index ={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
