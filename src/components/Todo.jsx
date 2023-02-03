import { Box, useColorModeValue } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import theme from "../theme";
import { TodoItem } from "./TodoItem";
import { TodoFooter } from "./TodoFooter";

function Todo() {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const todos = useSelector((state) => state.todos.todos);

  // const allTodos = () => {
  //   setFilteredTodos(todos);
  // };

  // const activeTodos = () => {
  //   setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
  // };

  // const completedTodos = () => {
  //   setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
  // };

  // const clearCompleted = () => {
  //   setTodos(todos.filter((todo) => todo.isCompleted === false));
  // };

  // useEffect(() => {
  //   setFilteredTodos(todos);
  // }, [todos]);

  return (
    <Box
      bg={useColorModeValue(
        theme.colors.light.veryLightGray,
        theme.colors.dark.veryDarkDesaturatedBlue
      )}
      borderRadius={10}
    >
      <Reorder.Group
        axis="y"
        values={todos}
        onReorder={todos}
        // onReorder={setTodos}
        style={{ listStyle: "none", overflow: "hidden" }}
        layoutScroll
      >
        {todos?.map((todo) => {
          return (
            <Reorder.Item key={todo.id} value={todo}>
              <TodoItem
                key={todo.id}
                item={todo}
                id={todo.id}
                text={todo.text}
                isCompleted={todo.isCompleted}
              />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <TodoFooter
        todos={todos}
        // allTodos={allTodos}
        // activeTodos={activeTodos}
        // completedTodos={completedTodos}
        // clearCompleted={clearCompleted}
      />
    </Box>
  );
}

export { Todo };
