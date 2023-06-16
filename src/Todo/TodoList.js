import axios from "axios";
// import { useParams } from "react-router-dom";
function TodoList({ todos, setTodos }) {
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

  return (
    <div>
      {todos.map((el, i) => {
        return (
          <li key={i}>
            <label>
              <input type="checkbox" />
              <span>{el.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button
              data-testid="delete-button"
              onClick={() => handleDelete(el.id)}
            >
              삭제
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
