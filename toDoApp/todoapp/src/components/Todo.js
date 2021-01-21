import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // use filter to find a match on the elemnt that is clicked on
        console.log(todo)
        // this will log the object that is being clicked on.
    }

    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <li className="fas fa-check"></li>
            </button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i>
            </button>
        </div>


    );
}

export default Todo;