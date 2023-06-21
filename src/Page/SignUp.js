import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Body = styled.div`
  //border: 3px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const TitlePart = styled.div`
  /* color: blue; */
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Container = styled.div`
  //border: 8px solid black;
  background-color: #1c1c1c;
  border-radius: 20px;
  /* color: red; */
  width: 600px;
  height: 500px;
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
  height: 45px;
  font-weight: 550;
  color: #ffffff;
  background-color: #f94c85;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  :hover {
    background-color: #f94c85;
    opacity: 0.65;
  }
`;
const SignConnect = styled.div`
  margin-top: 30px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  color: #ffffff;
  font-size: 18px;
`;
const Ddd = styled.div`
  display: flex;
  flex-direction: row;
  > p {
    width: 130px;
    color: #ffffff;
    margin-right: 5px;
  }
  > input {
    /* border: 5px solid red; */
    margin-bottom: 5px;
  }
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
  const handleRegister = (email, password) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => navigate("/signin"))
      .catch(err => console.error(err));
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
        <TitlePart>회원가입</TitlePart>
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
          <LoginBtn
            data-testid="signup-button"
            disabled={notAllow}
            onClick={() => handleRegister(email, password)}
          >
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
