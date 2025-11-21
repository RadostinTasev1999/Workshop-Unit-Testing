import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList(){

    const [todos, setTodos] = useState({
        "todo_1":{
            "_id": "todo_2",
            "text": "Do laundry",
            "isCompleted": true
        },
        "todo_2":{
            "_id": "todo_1",
            "text": "Grocery shopping",
            "isCompleted": false
        },
        "todo_3":{
            "_id": "todo_2",
            "text": "Do laundry",
            "isCompleted": true
        },
        "todo_4":{
            "_id": "todo_3",
            "text": "Finish presentation slides",
            "isCompleted": false
        },
        "todo_5":{
            "_id": "todo_4",
            "text": "Call the mechanic",
            "isCompleted": true
        },
        "todo_6":{
            "_id": "todo_5",
            "text": "Read chapter 5 of the book",
            "isCompleted": false
        }
        }
    )

    console.log('Object.values are:', Object.values(todos))

    return (
        <>
        <ul className="divide-y divide-gray-200 px-4">
            {Object.values(todos).map((obj) => <TodoItem {...obj} />)}
            
        </ul>
        </>
    );
}