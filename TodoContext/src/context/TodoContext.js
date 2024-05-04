import react from "react";

import { createContext,useContext } from "react";

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      todo:"some message",
      completed:"false",

    }
  ],

  addTodo:(todo) =>{},
  updatedTodo:(id,todo)=>{},
  deleteTodo:(id)=>{},
  toggleComplete:(id)=>{}


})

export const useTodo=()=>{
  return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider
