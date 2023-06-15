import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TodoList from "../Todo/TodoList";

const Body = styled.div`
  border: 10px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  border: 10px solid blue;
  /* color: blue; */
  width: 600px;
  height: 600px;
`;
const TitlePart = styled.div`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 30px;
    font-weight: 500;
  }
`;
const InsertPart = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
`;
const BodyPart = styled.div`
  border: 3px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
`;
// const ListStyle = styled.li`
//   list-style: none;
// `;

function Todo() {
  const [addInput, setAddInput] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(todos);
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        // console.log(res.data);
        setTodos(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleAdd = () => {
    const access_token = localStorage.getItem("access_token");
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/todos`,
        {
          id: todos.length + 1,
          todo: addInput,
          isCompleted: false,
          userId: todos.length + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        // console.log(res);
        setTodos([...todos, res.data]);
      })
      .catch(err => console.error(err));
  };
  // const handleAdd = () => {
  //   // setInput(e.target.value);
  //   //추가버튼 누르면 기존이 todo에 addInput이 추가된다.
  // };
  // console.log(todos[0]);
  return (
    <>
      <Body>
        <Container>
          <TitlePart>
            <p>Todo List</p>
            <InsertPart>
              <input
                type="text"
                data-testid="new-todo-input"
                onChange={e => setAddInput(e.target.value)}
              ></input>
              <button
                data-testid="new-todo-add-button"
                onClick={() => handleAdd()}
              >
                추가
              </button>
            </InsertPart>
          </TitlePart>
          <BodyPart>
            <TodoList todos={todos} />
          </BodyPart>
        </Container>
      </Body>
    </>
  );
}

export default Todo;
