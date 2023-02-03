import { Box, useColorModeValue } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";

import theme from "../theme";
import { TodoItem } from "./TodoItem";
import { TodoFooter } from "./TodoFooter";

function Todo(props) {
  const { todos, setTodos, toggleTodo, removeTodo } = props;

  const [filteredTodos, setFilteredTodos] = useState([]);

  const allTodos = () => {
    setFilteredTodos(todos);
  };

  const activeTodos = () => {
    setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const completedTodos = () => {
    setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

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
        onReorder={setTodos}
        style={{ listStyle: "none", overflow: "hidden" }}
        layoutScroll
      >
        {filteredTodos?.map((todo) => {
          return (
            <Reorder.Item key={todo.id} value={todo}>
              <TodoItem
                key={todo.id}
                item={todo}
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
              />
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
      <TodoFooter
        todos={filteredTodos}
        allTodos={allTodos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        clearCompleted={clearCompleted}
      />
    </Box>
  );
}

export { Todo };
