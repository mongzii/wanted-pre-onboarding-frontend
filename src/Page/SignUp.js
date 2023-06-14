import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  //border: 3px solid black;
  display: flex;
  flex-direction: column;
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
  /* border: 5px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  > p {
    width: 100px;
    font-weight: 600;
  }
  > input {
    width: 200px;
    height: 25px;
  }
`;
const LoginBtn = styled.button`
  /* border: 1px solid blue; */
  margin-top: 20px;
  width: 200px;
  height: 35px;
  font-weight: 500;
  cursor: pointer;
`;
const SignConnect = styled.div`
  margin-top: 30px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  color: blue;
`;
const Ddd = styled.div`
  display: flex;
  flex-direction: row;
`;
const Fff = styled.div`
  display: flex;
  flex-direction: column;
`;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  const handleEmail = e => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePW = e => {
    setPassword(e.target.value);
    const regex = /^[a-zA-Z0-9]{7,25}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);
  return (
    <>
      <Body>
        <div>회원가입</div>
        <Container>
          <BoxStyle>
            <Ddd>
              <p>이메일</p>
              <input
                type="text"
                data-testid="email-input"
                value={email}
                onChange={handleEmail}
              ></input>
            </Ddd>
            <Fff>
              {emailValid === false && (
                <div>The email is not a valid email address.</div>
              )}
            </Fff>
          </BoxStyle>
          <BoxStyle>
            <Ddd>
              <p>비밀번호</p>
              <input
                type="password"
                data-testid="password-input"
                value={password}
                onChange={handlePW}
              ></input>
            </Ddd>
            <Fff>
              {passwordValid === false && password.length > 0 && (
                <div>8자 이상 입력해주세요.</div>
              )}
            </Fff>
          </BoxStyle>
          <LoginBtn data-testid="signup-button" disabled={notAllow}>
            회원가입
          </LoginBtn>
          <SignConnect onClick={() => navigate("/signin")}>
            이미회원이에요
          </SignConnect>
        </Container>
      </Body>
    </>
  );
}

export default Signup;
//0614 14:32
