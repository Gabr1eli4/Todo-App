import { Box, Text, Flex, Grid, Button } from "@chakra-ui/react";
import { useState } from "react";
import { clearCompleted } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { filterBy, filters } from "../store/todoSlice";

export function TodoFooter(props) {
	const { todos } = props;

	const [activeIndex, setActiveIndex] = useState(0);
	const dispatch = useDispatch();

	const handleActive = (value) => {
		return activeIndex === value ? true : false;
	};

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
				<Text
					gridArea="num"
					fontSize={["12px", "14px", "16px"]}
					m="auto 0"
				>
					{todos.length} items left
				</Text>
				<Flex gridArea="buttons" justifyContent="center">
					<Button
						fontSize={["12px", "14px", "16px"]}
						isActive={() => handleActive(0)}
						onClick={() => {
							dispatch(filterBy(filters.ALL));
							setActiveIndex(0);
						}}
					>
						All
					</Button>
					<Button
						fontSize={["12px", "14px", "16px"]}
						isActive={() => handleActive(1)}
						onClick={() => {
							dispatch(filterBy(filters.NOT_COMPLETED));
							setActiveIndex(1);
						}}
					>
						Active
					</Button>
					<Button
						fontSize={["12px", "14px", "16px"]}
						isActive={() => handleActive(2)}
						onClick={() => {
							dispatch(filterBy(filters.COMPLETED));
							setActiveIndex(2);
						}}
					>
						Completed
					</Button>
				</Flex>
				<Button
					gridArea="clear"
					fontSize={["12px", "14px", "16px"]}
					onClick={() => dispatch(clearCompleted(false))}
				>
					Clear Completed
				</Button>
			</Grid>
		</Box>
	);
}
