function TodoList({ todos }) {
  // console.log(todos);

  return (
    <div>
      {todos.map((el, i) => {
        return (
          <li key={i}>
            <label>
              <input type="checkbox" />
              <span>{el.todo}</span>
            </label>
            <button>수정</button>
            <button>삭제</button>
          </li>
        );
      })}
    </div>
  );
}

export default TodoList;
