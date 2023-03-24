import { Text, Grid, Divider, Box, useColorModeValue } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/todoSlice";

function TodoItem(props) {
	const { id, text, isCompleted } = props;
	const dispatch = useDispatch();

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
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
							<CheckIcon fontSize={12} />
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
		</motion.div>
	);
}

export { TodoItem };
