"use client";
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TodoType, todoContext } from "../utils/types";



export const TodoContext = createContext<todoContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState([])
    const url = 'https://todoapi29.pythonanywhere.com/'
    const token = `Bearer ${localStorage.getItem('access-token')}`
   
    useEffect(() => {
        getTodo()
    }, [])

    
  
    const getTodo = async () =>{
      console.log(todos);
     
      try {
        await axios.get(url+"api/todo/",{
          headers:{
              'Authorization': token
          }
        })
        .then((res) => {
            setTodos(res.data)
        })
      } catch (error) {
          console.log(error);
          if (!token) {
            getTodo()
          }
        //   getTodo()
      }
   
    } 
    
    const handleAddTodo = async (newTodo:string) =>{
      try { 
        await axios.post(url+`api/todo/`,{
          title:newTodo
        },{
          headers:{
              'Authorization': token
          },
        },
        )
        getTodo()
      } catch (error) {
        console.log(error);
      }
    }
  
    const editTodo = async (todo:TodoType,newTodo: any) =>{
      try { 
        await axios.patch(url+`api/todo/${todo.uuid}/`,{
          title:newTodo
        },{
          headers:{
              'Authorization': token
          },
        },
        )
        getTodo()
      } catch (error) {
        console.log(error);
      }
    }
  
    const deleteTodo = async (id:String)=>{
      try {
        await axios.delete(url+`api/todo/${id}/`,{
          headers:{
              'Authorization': token
          }
        })
        getTodo()
      } catch (error) {
        console.log(error);
      }
    }
  
    const context = {
        todos,
        editTodo,
        deleteTodo,
        handleAddTodo,
        getTodo
    }


  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  );
};

export function useTodo() {
  const todocontextvalue = useContext(TodoContext);
  if (!todocontextvalue) {
    throw new Error("useTodos used outside of provider");
  }

  return todocontextvalue;
}
