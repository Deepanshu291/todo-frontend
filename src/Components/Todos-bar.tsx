
import {  useTodo } from '../context/TodoContext'
import { TodoType } from '../utils/types'

export const Todo = () => {

  const {todos,deleteTodo,editTodo,ToggleIsDone} = useTodo()
  const handleDelete= (id:string) => {
      deleteTodo(id)
  }
  
  const handleEdit = (todo :TodoType) => {
    const newtodo:any=  prompt(`Edit \n${todo.todo}`)
    editTodo(todo,newtodo)
           
          }

  console.log(todos);
  
  return (
    <>
    <ul className='todos'>
        {todos.map((todo)=>{
          
            return (
               <li key={todo._id} className='todoitem'>
                <input type="checkbox" checked={todo.IsDone} onClick={()=> ToggleIsDone(todo._id)}  value={todo.todo}  />    
                <label htmlFor={`todo=${todo._id}`} >  
                {!todo.IsDone ?(todo.todo ):( 
                  <s>{todo.todo}</s>
                )} </label>

                    <div>
                    <button type='button' onClick={() =>handleDelete(todo._id)} >Delete</button>
                    <button type='button' onClick={() => handleEdit(todo)} >Edit</button>
                    </div>
                
                </li>
               
            )
        })}
    </ul>
    </>
  )
}

