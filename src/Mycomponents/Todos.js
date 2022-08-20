import React from 'react'
import {TodoItem} from "../Mycomponents/TodoItem"

export const Todos = (props) => {
  
  return (
    <div className='container'>
      <h3>todoslist</h3>
      <TodoItem todo = {props.todos[0]}/>
    
      </div>
  )
}


