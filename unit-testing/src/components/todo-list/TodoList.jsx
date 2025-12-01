import { useEffect, useState } from "react";
import TodoItem from "../todo-item/TodoItem";
import request from '../../utils/requester'

export default function TodoList(){

    const [todos, setTodos] = useState([])

    const URL = 'http://localhost:3030/data/todos'

    useEffect(() => {
        request.get(URL)
            .then((result) => {

                console.log('Result from server is:', Object.values(result))
                const todosResult = Object.values(result);

                setTodos(todosResult);
            } )
    },[])
    
    const handleChange = (_id) => {
        setTodos(state => state.map((todo) => todo._id === _id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    // console.log('Object.values are:', Object.values(todos))

    return (
        <>
        <ul className="divide-y divide-gray-200 px-4">
           {
           todos.length > 0
                ?
        todos.map((todo) => <TodoItem {...todo} key={todo._id} onToggle={handleChange} />)
                :
                ""
           }
            
        </ul>
        </>
    );
}