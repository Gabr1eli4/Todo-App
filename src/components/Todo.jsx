import { Box, useColorModeValue } from "@chakra-ui/react";
import { Reorder } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import theme from "../theme";
import { TodoItem } from "./TodoItem";
import { TodoFooter } from "./TodoFooter";
import { filters } from "../store/todoSlice";

function Todo() {
	const [filteredTodos, setFilteredTodos] = useState([]);
	const todos = useSelector((state) => state.todos.todos);
	const filter = useSelector((state) => state.todos.filterBy);

	const filteredTodo = () => {
		if (filter === filters.COMPLETED) {
			return todos.filter((todo) => todo.isComplted);
		}
		if (filter === filters.NOT_COMPLETED) {
			return todos.filter((todo) => !todo.isCompleted);
		}
		return todos;
	};

	useEffect(() => {
		setFilteredTodos(() => filteredTodo());
		console.log(filteredTodos);
	}, [todos, filter]);

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
				values={filteredTodos}
				onReorder={setFilteredTodos}
				style={{ listStyle: "none", overflow: "hidden" }}
				layoutScroll
			>
				{filteredTodos?.map((todo) => {
					return (
						<Reorder.Item key={todo.id} value={todo}>
							<TodoItem
								key={todo.id}
								id={todo.id}
								text={todo.text}
								isCompleted={todo.isCompleted}
							/>
						</Reorder.Item>
					);
				})}
			</Reorder.Group>
			<TodoFooter todos={todos} />
		</Box>
	);
}

export { Todo };
