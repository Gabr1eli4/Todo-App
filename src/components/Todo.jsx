import { Box, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

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
			return todos.filter((todo) => todo.isCompleted);
		}
		if (filter === filters.NOT_COMPLETED) {
			return todos.filter((todo) => !todo.isCompleted);
		}
		return todos;
	};

	useEffect(() => {
		setFilteredTodos(() => filteredTodo());
	}, [todos, filter]);

	return (
		<Box
			bg={useColorModeValue(
				theme.colors.light.veryLightGray,
				theme.colors.dark.veryDarkDesaturatedBlue
			)}
			borderRadius={10}
		>
			<AnimatePresence>
				{filteredTodos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
							isCompleted={todo.isCompleted}
						/>
					);
				})}
			</AnimatePresence>
			<TodoFooter todos={todos} />
		</Box>
	);
}

export { Todo };
