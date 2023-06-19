import axios from "axios";
import { useState } from "react";

// import { useParams } from "react-router-dom";
function TodoList({ todos, setTodos }) {
  const [updateInput, setUpdateInput] = useState(""); //수정시 input에 쓴게 여기 들어간다.
  const [editMode, setEditMode] = useState(true); //수정모드 상태에 따라 input창인지 todo가 보여질지 결정.

  // let { id } = useParams();
  // console.log(todos);

  const handleDelete = id => {
    const access_token = localStorage.getItem("access_token");
    axios
      .delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        // console.log(res);
        setTodos(todos.filter(obj => obj.id !== todos.id));
        window.location.reload();
      })
      .catch(err => console.error(err));
  };

  const handleUpdate = id => {
    // console.log(todos);
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
        console.log(res);
        //setUpdateInput 이게 값이 없어서 계속 에러가 난거다.
      })
      .catch(err => console.error(err));
  };
  const editHandle = id => {
    // setEditMode(!editMode);
    // console.log(editMode);
    // console.log(todos);
    const editThing = todos.find(el => el.id === id);
    editThing.todo = updateInput;
    console.log(editThing.todo);
    console.log(todos);
    setEditMode(!editMode);
    // 저 콘솔에 찍힌걸 updateInput로 대체하는 코드를 짜면 되지 않을까....

    // console.log(updateInput);
  };
  const editVersion = id => {
    // setEditMode(!todos.map(el => el.id === id).editMode);
    let copy = [...todos];
    copy.map(el => el.id === id);
    let aaa = copy.editMode;
    setEditMode(!aaa);
  };

  return (
    <div>
      {todos.map((el, i) => {
        return (
          <li key={i}>
            <label>
              <input type="checkbox" />
              {/* <span>{el.todo}</span> */}
            </label>
            {/* //일단 이렇게말고 수정버튼을 누르면 바뀐창으로 뜨고 거기서 제출을 클릭하면 저거 함수가 실행되게 해야겠다. */}
            {/* <button
              data-testid="modify-button"
              onClick={() => handleUpdate(el.id)}
            >
              수정
            </button> */}
            {/* <button>수정</button> */}
            {/* input때 안에 공백이게 하자. 그리고 입력한 값을  */}

            {editMode ? (
              <input onChange={e => setUpdateInput(e.target.value)}></input>
            ) : (
              <span>{el.todo}</span>
            )}
            {editMode ? (
              <button onClick={() => editHandle(el.id)}>제출</button>
            ) : (
              <button onClick={() => editVersion(el.id)}>수정</button>
            )}

            <button
              data-testid="delete-button"
              onClick={() => handleDelete(el.id)}
            >
              삭제
            </button>
          </li>
        );
      })}
      {/* <input onChange={e => setUpdateInput(e.target.value)}></input> */}
    </div>
  );
}

export default TodoList;
