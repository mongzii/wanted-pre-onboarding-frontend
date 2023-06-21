import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import TodoList from "../Todo/TodoList";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  /* border: 10px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  border: 10px solid #1c1c1c;
  /* color: blue; */
  border-radius: 20px;
  width: 600px;
  height: 600px;
`;
const TitlePart = styled.div`
  /* border: 3px solid red; */
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 35px;
    font-weight: 500;
    color: #ffffff;
  }
`;
const InsertPart = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  flex-grow: 1;
  > button {
    background-color: #f94c85;
    color: #ffffff;
    width: 60px;
    height: 30px;
    margin-left: 5px;
    :hover {
      background-color: #f94c85;
      opacity: 0.65;
      cursor: pointer;
    }
  }
`;
const BodyPart = styled.div`
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  /* font-size: 20px; */
`;
// const ListStyle = styled.li`
//   list-style: none;
// `;
function authTokenExpired(authToken) {
  if (!authToken) {
    return true;
  }
  const decodedToken = decodeAuthToken(authToken);
  const expSeconds = decodedToken.exp;
  const nowSeconds = Math.floor(Date.now() / 1000);
  return expSeconds < nowSeconds;
}
function decodeAuthToken(authToken) {
  const payload = authToken.split(".")[1];
  const decodedPayload = atob(payload);
  const { exp } = JSON.parse(decodedPayload);
  return { exp };
}

function Todo() {
  const [addInput, setAddInput] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    axios
      .get(`${process.env.REACT_APP_API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
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
        setTodos([...todos, res.data]);
        setAddInput(" ");
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    if (!access_token || authTokenExpired(access_token)) {
      navigate("/signin");
      return;
    }
  });

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
            <TodoList todos={todos} setTodos={setTodos} />
          </BodyPart>
        </Container>
      </Body>
    </>
  );
}

export default Todo;
