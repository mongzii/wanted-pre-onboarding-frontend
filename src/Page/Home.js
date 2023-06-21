import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  color: blue;
`;

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Container>홈입니다</Container>
      <button onClick={() => navigate("/todo")}>투두리스트</button>
      <button onClick={() => navigate("/signin")}>로그인하러가기</button>
    </div>
  );
}

export default Home;
