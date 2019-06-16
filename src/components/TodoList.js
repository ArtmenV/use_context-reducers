import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
    const { state } = useContext(TodosContext)
    const title = state.todos.length > 0 
        ? `${state.todos.length} Todos` 
        :   "Nothing To Do!"


    return (
        <div className = "container mx-auto max-w-md text-center font-mono" >
           <h1 className="text-bold"><strong> {title}</strong> </h1>
            <ul className="list-reset text-white p0">
                {state.todos.map(todo => (
                    <li key={todo.id}
                        className=" bg-orane-dark orange border-black border-dashed border-2">
                       <span> {todo.text} </span>
                        </li>
                ))}
            </ul>
        </div>
    )
}