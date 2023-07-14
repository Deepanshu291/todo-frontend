

import { AddTodo } from '../Components/add-todo'
import { Todo } from '../Components/Todos-bar'
// import { TodosBar } from '../Components/Todos-bar'





export const Homepage = () => (
    

    <>
        <h1>Todo App</h1>
        <p>
            This is App Is Build on Django rest Framework Api + React with TypeSsript
        </p>
        <AddTodo />
        <Todo />
        {/* <TodosBar /> */}
    </>
)
