import { useState } from "react";
import axios from "axios";

// import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";

// const ListStyle = styled.li`
//   list-style: none;
// `;

function TodoItem({ todo, setTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [updateInput, setUpdateInput] = useState("");
  const [checkMode, setCheckMode] = useState(todo.isCompleted);

  //   console.log(todo.isCompleted);
  //   const handleCheck = () => {
  //     console.log(todo);
  //   };

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
        setUpdateInput(updateInput);
        setEditMode(false);
        window.location.reload();
      })
      .catch(err => console.error(err));
  };
  const cancleMode = () => {
    setEditMode(false);
  };

  return (
    <>
      <li>
        <label>
          <input type="checkbox" onClick={() => setCheckMode(!checkMode)} />
          {/* {checkMode ? <BiCheckboxChecked /> : <BiCheckbox />} */}
        </label>
        {/* {console.log(checkMode)} */}
        {editMode ? (
          <>
            <input
              data-testid="modify-input"
              onChange={e => setUpdateInput(e.target.value)}
            ></input>
            <button
              data-testid="submit-button"
              onClick={() => handleUpdate(todo.id)}
            >
              제출
            </button>
            <button data-testid="cancel-button" onClick={cancleMode}>
              취소
            </button>
          </>
        ) : (
          <>
            <span>{todo.todo}</span>
            <button
              data-testid="modify-button"
              onClick={() => setEditMode(true)}
            >
              수정
            </button>
            <button
              data-testid="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              삭제
            </button>
          </>
        )}
      </li>
    </>
  );
}

export default TodoItem;
