import { Container, Box, Image, useColorModeValue } from "@chakra-ui/react";

import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { Todo } from "./components/Todo";
import theme from "./theme";

function App() {
	return (
		<>
			<Box>
				<Image
					w="100%"
					h="15rem"
					fit="cover"
					src={useColorModeValue(
						theme.bg.lightDesktop,
						theme.bg.darkDesktop
					)}
				/>
			</Box>
			<Container
				maxW={["90%", "80%", "70%", "65%", "50%"]}
				variant="main"
				top={["50px"]}
				left="50%"
			>
				<Header />
				<TodoInput />
				<Todo />
			</Container>
		</>
	);
}

export default App;
