import { FormEvent, useState } from 'react'
import { useTodo } from '../context/TodoContext';

export const AddTodo = () => {
  const [title, setTitle] = useState('')
  const {handleAddTodo,getTodo} = useTodo();
  // const [is_done, setIs_Done] = useState(false)

  const addtodohandle = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    // addTodo({
    //   title,
    //   is_done:false
    // }
    // )
    // console.log(title);
    handleAddTodo(title)
    getTodo()
  }

  
  
    return (
    <>
    <form onSubmit={addtodohandle}>
    <input type="text" placeholder='Enter Todo ' onChange={e => setTitle(e.target.value)} />
    <button type="submit">Submit</button>
    </form>
    </>
  )
}
