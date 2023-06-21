import axios from "axios";
import { useState } from "react";

function TodoItem({ todo, setTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [updateInput, setUpdateInput] = useState("");

  //   console.log(todo);

  const handleDelete = id => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  const handleUpdate = id => {
    const access_token = localStorage.getItem("access_token");

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/todos/${id}`,
        {
          todo: updateInput,
          isCompleted: false,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        // console.log(res.data);

        setUpdateInput(updateInput);

        setEditMode(false);
        window.location.reload();
        // setTodo(todo => (todo.id === id ? console.log("a") : console.log("b")));

        //setUpdateInput 이게 값이 없어서 계속 에러가 난거다.
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <li>
        <label>
          <input type="checkbox" />
        </label>

        {editMode ? (
          <>
            <input onChange={e => setUpdateInput(e.target.value)}></input>
            <button onClick={() => handleUpdate(todo.id)}>제출</button>
            <button onClick={() => setEditMode(false)}>취소</button>
          </>
        ) : (
          <>
            <span>{todo.todo}</span>
            <button onClick={() => setEditMode(true)}>수정</button>
            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </>
        )}
      </li>
    </>
  );
}

export default TodoItem;
