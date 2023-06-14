import styled from "styled-components";

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
`;
const BodyPart = styled.div`
  border: 3px solid green;
`;
const ListStyle = styled.li`
  list-style: none;
`;

function Todo() {
  return (
    <>
      <Body>
        <Container>
          <TitlePart>
            <p>Todo List</p>
            <InsertPart>
              <input type="text"></input>
              <button>추가</button>
            </InsertPart>
          </TitlePart>
          <BodyPart>
            <ListStyle>
              <label>
                <input type="checkbox" />
                <span>밥먹기</span>
              </label>
              <button>수정</button>
              <button>삭제</button>
            </ListStyle>
            <ListStyle>
              <label>
                <input type="checkbox" />
                <span>산책하기</span>
              </label>
              <button>수정</button>
              <button>삭제</button>
            </ListStyle>
            <ListStyle>
              <label>
                <input type="checkbox" />
                <span>공부하기</span>
              </label>
              <button>수정</button>
              <button>삭제</button>
            </ListStyle>
          </BodyPart>
        </Container>
      </Body>
    </>
  );
}

export default Todo;
