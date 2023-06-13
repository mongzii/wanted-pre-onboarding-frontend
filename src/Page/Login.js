import styled from "styled-components";

const Body = styled.div`
  //border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Container = styled.div`
  border: 3px solid black;
  width: 650px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxStyle = styled.div`
  //border: 5px solid red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  > p {
    //border: 1px solid red;
    width: 100px;
    font-weight: 600;
  }
  > input {
    outline: 2px solid black;
    height: 35px;
    width: 150px;
  }
`;
const LoginBtn = styled.button`
  /* border: 1px solid blue; */
  margin-top: 20px;
  width: 150px;
  height: 35px;
  font-weight: 500;
  cursor: pointer;
`;
const SignConnect = styled.div`
  margin-top: 30px;
  cursor: pointer;
  font-weight: 500;
`;

function Login() {
  return (
    <>
      <Body>
        <Container>
          <BoxStyle>
            <p>이메일</p>
            <input type="text" data-testid="email-input"></input>
          </BoxStyle>
          <BoxStyle>
            <p>비밀번호</p>
            <input type="password" data-testid="password-input"></input>
          </BoxStyle>
          <LoginBtn data-testid="signin-button">로그인</LoginBtn>
          <SignConnect>회원가입하기</SignConnect>
        </Container>
      </Body>
    </>
  );
}

export default Login;
