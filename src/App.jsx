import { Container, Box, Image, useColorModeValue } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { Todo } from "./components/Todo";
import theme from "./theme";

import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        text,
        isCompleted: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, isCompleted: !todo.isCompleted };
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Box>
        <Image
          w="100%"
          h="15rem"
          fit="cover"
          src={useColorModeValue(theme.bg.lightDesktop, theme.bg.darkDesktop)}
        />
      </Box>
      <Container
        maxW={["90%", "80%", "70%", "65%", "50%"]}
        variant="main"
        top={["50px"]}
        left="50%"
      >
        <Header />
        <TodoInput addTodo={addTodo} />
        <Todo
          todos={todos}
          setTodos={setTodos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      </Container>
    </>
  );
}

export default App;
