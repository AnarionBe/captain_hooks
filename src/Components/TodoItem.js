import React from "react";

export default props => {
    const getStyle = () => {
        return {
            background: "#c4c4c4",
            padding: "10px",
            borderBottom: "1px #000 dotted",
            textDecoration: props.todo.completed ? "line-through" : "none"
        };
    };

    const btnStyle = {
        background: "#ff0000",
        color: "#fff",
        border: "none",
        paddinng: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    };

    return (
        <div style={getStyle()}>
            <p>
                <input
                    type="checkbox"
                    onChange={e => {
                        props.toggleCompletion(props.todo.id);
                    }}
                    defaultChecked={props.todo.completed}
                />{" "}
                {props.todo.title}
                <button
                    onClick={e => {
                        props.delTodo(props.todo.id);
                    }}
                    style={btnStyle}
                >
                    x
                </button>
            </p>
        </div>
    );
};
