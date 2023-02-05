import { createSlice } from "@reduxjs/toolkit";

export const filters = {
	ALL: "ALL",
	COMPLETED: "COMPLETED",
	NOT_COMPLETED: "NOT_COMPLETED",
};

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [],
		filterBy: filters.ALL,
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload.text,
				isCompleted: false,
			});
		},

		removeTodo(state, action) {
			state.todos.filter((todo) => todo.id !== action.payload.id);
		},

		toggleTodo(state, action) {
			const toggledTodo = state.todos.find(
				(todo) => todo.id === action.payload.id
			);
			toggledTodo.isCompleted = !toggleTodo.isCompleted;
		},

		filterBy(state, action) {
			console.log(action.payload);
			state.filterBy = action.payload;
		},

		clearCompleted(state, action) {
			state.todos.filter((todo) => todo.isCompleted === action.payload);
		},
	},
});

export const { addTodo, removeTodo, toggleTodo, filterBy, clearCompleted } =
	todoSlice.actions;

export default todoSlice.reducer;
