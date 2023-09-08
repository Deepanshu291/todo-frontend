import { ReactNode } from "react";

export type TodoType = {
    todo: string;
    _id: string;
    IsDone: boolean;
    createdAt: Date;
  };
  
  export type todoContext = {
    todos: TodoType[];
    getTodo: () => void;
    handleAddTodo: (task: string) => void;
    editTodo: (todo: TodoType, newTodo: string) => void;
    deleteTodo: (id: string) => void;
    ToggleIsDone:(id:string)=> void;
  };

  export type Auth ={
    id:string,
    username:string,
    email:string,
    password:string,
}

export type Token = {
    refreshkey:string,
    accesskey:string
} | undefined

export type authContext = {
    Authenticate: boolean ;
    token:string | null;
    loginuser:(username:string,password:string) =>void;
    registeruser:(username:string,password:string) =>void;
    logout:() => void;

}


export interface Props{
    children:ReactNode
}