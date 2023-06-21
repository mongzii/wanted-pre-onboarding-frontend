import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  const [todo, setTodo] = useState([]);

  return (
    <div>
      {todos.map(todo => {
        return <TodoItem todo={todo} setTodo={setTodo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
