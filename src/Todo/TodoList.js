import axios from "axios";
import { useState } from "react";
import TodoItem from "./TodoItem";

// import { useParams } from "react-router-dom";
function TodoList({ todos, setTodos }) {
  const [updateInput, setUpdateInput] = useState(""); //수정시 input에 쓴게 여기 들어간다.

  // const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState([]);

  // const handleDelete = id => {
  //   const access_token = localStorage.getItem("access_token");
  //   axios
  //     .delete(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     })
  //     .then(res => {
  //       // console.log(res);
  //       setTodos(todos.filter(obj => obj.id !== todos.id));
  //       window.location.reload();
  //     })
  //     .catch(err => console.error(err));
  // };

  // const handleUpdate = id => {
  //   // console.log(todos);
  //   const access_token = localStorage.getItem("access_token");

  //   axios
  //     .put(
  //       `${process.env.REACT_APP_API_URL}/todos/${id}`,
  //       {
  //         todo: updateInput,
  //         isCompleted: false,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${access_token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then(res => {
  //       console.log(res);
  //       //setUpdateInput 이게 값이 없어서 계속 에러가 난거다.
  //     })
  //     .catch(err => console.error(err));
  // };

  return (
    <div>
      {todos.map(todo => {
        return <TodoItem todo={todo} setTodo={setTodo} key={todo.id} />;
      })}
      {/* <input onChange={e => setUpdateInput(e.target.value)}></input> */}
    </div>
  );
}
/*---------------다시짠코드-------------------*/
//   const [isEditing, setIsEditing] = useState(false);
//   const changeHandle = () => {
//     console.log("dfdf");
//     setIsEditing(true);
//   };

//   return (
//     <>
//       <li>
//         <span>밥먹기</span>
//         {isEditing ? (
//           <button onClick={() => setIsEditing(false)}>제출</button>
//         ) : (
//           <button onClick={() => setIsEditing(true)}>수정</button>
//         )}
//       </li>
//       <li>
//         <span>잠자기</span>
//       </li>
//     </>
//   );
// }

export default TodoList;
