import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  /* border: 10px solid black; */
  /* background-color: #1c1c1c; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container1 = styled.p`
  /* color: #ffffff; */
  color: blue;
  font-weight: 600;
  font-size: 25px;
`;
const Container2 = styled.div`
  /* border: 10px solid blue; */
  background-color: #1c1c1c;
  border-radius: 20px;
  /* color: blue; */
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  > button {
    width: 280px;
    height: 5rem;
    font-size: 18px;
    /* color: #ffffff;
    border-radius: 10px;
    background-color: #504e54;
    font-size: 18px; */
    background-image: linear-gradient(
      to right,
      #ff6e7f 0%,
      #bfe9ff 51%,
      #ff6e7f 100%
    );
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.7s;
    background-size: 200% auto;
    color: #ffffff;
    box-shadow: 0 0 15px #eee;
    border-radius: 10px;
    display: block;
  }
  > button:hover {
    /* background-color: #a06ef2;
    cursor: pointer; */
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Body>
        <Container1>
          <p>하루를 관리하세요</p>
        </Container1>
        <Container2>
          <button onClick={() => navigate("/todo")}>투두리스트확인하기</button>
          <button onClick={() => navigate("/signin")}>로그인하러가기</button>
        </Container2>
      </Body>
    </div>
  );
}

export default Home;
