import React from "react";
import Header from "./Components/layout/Header";
import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import uuid from "uuid";
import "./App.css";

export default () => {
    const [s_todos, s_setTodos] = React.useState([
        {
            id: uuid.v4(),
            title: "préparer un workshop",
            completed: true
        },
        {
            id: uuid.v4(),
            title: "dormir",
            completed: false
        },
        {
            id: uuid.v4(),
            title: "Oublier de me lever",
            completed: false
        }
    ]);

    const addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        s_setTodos([...s_todos, newTodo]);
    };

    const toggleCompletion = id => {
        s_setTodos(
            s_todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const delTodo = id => {
        s_setTodos([...s_todos.filter(todo => todo.id !== id)]);
    };

    return (
        <div className="App">
            <div className="container">
                <Header />
                <AddTodo addTodo={addTodo} />
                <Todos
                    todos={s_todos}
                    toggleCompletion={toggleCompletion}
                    delTodo={delTodo}
                />
            </div>
        </div>
    );
};
