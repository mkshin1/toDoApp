import React from 'react'

//import componenets here 
import Todo from "./Todo"

// name it after the file
const TodoList = ({ todos, setTodos, filteredTodos }) => {
    // console.log(todos);
    // console.log(filteredTodos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
                ))}

            </ul>
        </div>
    );
}

// export component here
export default TodoList;