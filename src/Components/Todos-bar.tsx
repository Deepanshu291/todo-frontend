
import {  useTodo } from '../context/TodoContext'
import { TodoType } from '../utils/types'

export const Todo = () => {

  const {todos,deleteTodo,editTodo} = useTodo()
  const handleDelete= (id:string) => {
      deleteTodo(id)
  }
  
  const handleEdit = (todo :TodoType) => {
    const newtodo:any=  prompt(`Edit \n${todo.title}`)
    editTodo(todo,newtodo)
           
          }
  return (
    <>
    <ul>
        {todos.map((todo)=>{
          
            return (
               <li key={todo.uuid}>
                    
                <label htmlFor={`todo=${todo.uuid}`}>{todo.title}</label>
                
                {!todo.Is_done && (
                    <>
                    <button type='button' onClick={() =>handleDelete(todo.uuid)} >Delete</button>
                    <button type='button' onClick={() => handleEdit(todo)} >Edit</button>
                    </>
                )}
                </li>
               
            )
        })}
    </ul>
    </>
  )
}

