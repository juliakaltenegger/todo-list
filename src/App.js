import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Container = styled.div`
  margin-left: 20px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;
const Input = styled.input`
  font-size: 25px;
  padding: auto;
  width: 100%;
  display: flex;
  padding-left: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const H1 = styled.h1`
  color: #ff3381;
  font-size: 35px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const List = styled.div`
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

function App() {
  const [todoInput, setTodoInput] = useState({
    todoTitleForward: "",
    completed: false
  });
  const [newListItem, setNewListItem] = useState([]);
  const handleSubmit = evt => {
    evt.preventDefault();
    setNewListItem([todoInput, ...newListItem]);
    setTodoInput({ ...todoInput, todoTitleForward: "" });
    const handleChange = evt => {
      evt.preventDefault();
    };
  };
  // const [activated, deactivated] = useState(false);
  // const toggle = () => deactivated(!activated);

  return (
    <Container>
      <header>
        <img height="40px" src={logo} alt="UpLeveled Logo" />
        <form onSubmit={handleSubmit}>
          <H1>My ToDos</H1>
          <label>
            <Input
              type="text"
              placeholder="What needs to be done?"
              value={todoInput.todoTitleForward}
              onChange={event => {
                setTodoInput({
                  ...todoInput,
                  todoTitleForward: event.target.value
                });
              }}
            ></Input>
          </label>
        </form>
        <List>
          <ul>
            {newListItem.map((todo, key) => (
              <>
                {" "}
                <li>
                  {key} {todo.todoTitleForward}{" "}
                  {todo.completed ? "complete" : "incomplete"}
                </li>
                <button
                  onClick={() => {
                    const listClone = [...newListItem];
                    listClone[key].completed = !listClone[key].completed;
                    setNewListItem(listClone);
                  }}
                >
                  Complete
                </button>
              </>
            ))}
          </ul>
        </List>
      </header>
    </Container>
  );
}
export default App;
