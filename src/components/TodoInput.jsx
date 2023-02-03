import { useState } from "react";
import { Box, InputGroup, Input, InputLeftElement } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <InputGroup py={4}>
      <InputLeftElement
        pt={7}
        children={<Box w={4} h={4} borderRadius="50%" border="1px" />}
      />
      <Input
        fontSize={["12px", "14px", "16px"]}
        variant="todo_input"
        placeholder="Create a new todo..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (!text) return;
          if (event.key === "Enter") {
            addTask();
          }
        }}
      />
    </InputGroup>
  );
}

export { TodoInput };
