import React from "react";

export default props => {
    const [s_title, s_setTitle] = React.useState("");

    const onSubmit = e => {
        e.preventDefault();
        props.addTodo(s_title);
        s_setTitle("");
    };

    const onChange = e => {
        s_setTitle(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} style={{ display: "flex" }}>
            <input
                type="text"
                name="title"
                style={{ flex: "10", padding: "5px" }}
                placeholder="Add todo..."
                value={s_title}
                onChange={onChange}
            />
            <input
                type="submit"
                value="submit"
                className="btn"
                style={{ flex: "1" }}
            />
        </form>
    );
};
