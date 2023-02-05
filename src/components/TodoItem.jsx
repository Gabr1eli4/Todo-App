import { Text, Grid, Divider, Box, useColorModeValue } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

function TodoItem(props) {
	const { id, text, isCompleted } = props;
	const dispatch = useDispatch();

	return (
		<>
			<Box borderTopRadius={10} py={3} px={4}>
				<Grid gridTemplateColumns="30px 1fr 30px" alignItems="center">
					{isCompleted ? (
						<Box
							bg={"linear-gradient(#57ddff, #c058f3)"}
							borderRadius="50%"
							w={6}
							h={6}
							display="flex"
							justifyContent="center"
							alignItems="center"
							onClick={() => dispatch(toggleTodo({ id }))}
						>
							<CheckIcon
								fontSize={12}
								// color={useColorModeValue("white", "black")}
							/>
						</Box>
					) : (
						<Box
							border="1px solid black"
							w={6}
							h={6}
							borderRadius="50%"
							onClick={() => dispatch(toggleTodo({ id }))}
						/>
					)}
					<Text
						alignSelf="flex-start"
						px={4}
						margin="auto 0"
						fontSize={["12px", "14px", "16px"]}
					>
						{text}
					</Text>
					<CloseIcon onClick={() => dispatch(removeTodo({ id }))} />
				</Grid>
			</Box>
			<Divider />
		</>
	);
}

export { TodoItem };
