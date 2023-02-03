import { Box, Text, Flex, Grid, Button } from "@chakra-ui/react";
import { useState } from "react";

export function TodoFooter(props) {
  const { todos, allTodos, activeTodos, completedTodos, clearCompleted } =
    props;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box py={3} px={5}>
      <Grid
        gridTemplateColumns={{
          base: "2fr 1fr",
          sm: "3fr 1fr",
          md: "1fr 3fr 1fr",
        }}
        gridTemplateRows={{
          base: "auto",
          md: "auto",
        }}
        gridTemplateAreas={{
          base: `'num clear' 'buttons buttons'`,
          md: `'num buttons clear'`,
        }}
      >
        <Text gridArea="num" fontSize={["12px", "14px", "16px"]} m="auto 0">
          {todos.length} items left
        </Text>
        <Flex gridArea="buttons" justifyContent="center">
          <Button
            fontSize={["12px", "14px", "16px"]}
            isActive={activeIndex === 0 ? true : false}
            onClick={() => {
              allTodos();
              setActiveIndex(0);
            }}
          >
            All
          </Button>
          <Button
            fontSize={["12px", "14px", "16px"]}
            isActive={activeIndex === 1 ? true : false}
            onClick={() => {
              activeTodos();
              setActiveIndex(1);
            }}
          >
            Active
          </Button>
          <Button
            fontSize={["12px", "14px", "16px"]}
            isActive={activeIndex === 2 ? true : false}
            onClick={() => {
              completedTodos();
              setActiveIndex(2);
            }}
          >
            Completed
          </Button>
        </Flex>
        <Button
          gridArea="clear"
          fontSize={["12px", "14px", "16px"]}
          onClick={clearCompleted}
        >
          Clear Completed
        </Button>
      </Grid>
    </Box>
  );
}
