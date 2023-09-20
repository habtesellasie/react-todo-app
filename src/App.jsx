import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Form from "./components/Form";
import Lists from "./components/Lists";
import { nanoid } from "nanoid";
import { BsArrowDownCircle } from "react-icons/bs";

function App() {
  const allTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [value, setValue] = useState("");
  const [todoValues, setTodoValues] = useState(allTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoValues));
  }, [todoValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { todoVal: value, id: nanoid() };
    setTodoValues((preValues) => [...preValues, newTodo]);
    setValue("");
  };

  const setChecked = (id) => {
    setTodoValues((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const newTodos = todoValues.filter((todo) => todo.id !== id);
    setTodoValues(newTodos);
  };

  const updateTodo = (id, newValue) => {
    setTodoValues((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, todoVal: newValue } : todo
      )
    );
  };

  return (
    <>
      <Header>
        <Form onSubmit={handleSubmit} value={value} setValue={setValue} />
      </Header>

      <Main>
        <ol>
          {todoValues.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              Todo lists you add apear here &nbsp;. . .
            </p>
          ) : (
            todoValues.map((todo) => {
              return (
                <Lists
                  key={todo.id}
                  {...todo}
                  setChecked={setChecked}
                  removeTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              );
            })
          )}
        </ol>
      </Main>
      {todoValues.length > 13 && (
        <div className="scrolldown-btn">
          <BsArrowDownCircle />
        </div>
      )}
    </>
  );
}

export default App;
