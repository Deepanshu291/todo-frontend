"use client";
import axios from "axios";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TodoType, todoContext } from "../utils/types";
import { api } from "../utils/common";



export const TodoContext = createContext<todoContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const url = "http://127.0.0.1:5500/api/";
    
    useEffect(() => {
        getTodo()
    },[])

    
  
    const getTodo = async () =>{
     
      try {
        await api.get("api/").then((res)=>{
           setTodos(res.data)
           
        })
      } catch (error) {
          console.log(error);
      }
   
    } 

    
    
    const handleAddTodo = async (newTodo:string) =>{
      try { 
        await api.post("api/",{
          todo:newTodo
        })
        getTodo()
      } catch (error) {
        console.log(error);
      }
    }

    const ToggleIsDone =async (id:string) => {
        try {
          await axios.patch(url+id)
          getTodo()
        } catch (error) {
          console.log(error);
          
        }
    }
  
    const editTodo = async (todo:TodoType,newTodo: any) =>{
      try { 
        await axios.put(url + todo._id ,{
          todo:newTodo
        } )
        getTodo()
      } catch (error) {
        console.log(error);
      }
    }
  
    const deleteTodo = async (id:String)=>{
      try {
        await axios.delete(url + id);
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
        getTodo,
        ToggleIsDone
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
