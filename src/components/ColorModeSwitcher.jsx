import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = (props) => {
	const { toggleColorMode } = useColorMode();
	const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

	return (
		<IconButton
			size="md"
			fontSize="lg"
			variant="ghost"
			color="current"
			bg="none"
			_hover={{
				bg: "rgba(255, 255, 255, 0.16)",
			}}
			_active={{
				bg: "rgba(255, 255, 255, 0.16)",
			}}
			onClick={toggleColorMode}
			icon={<SwitchIcon color="white" />}
			{...props}
		/>
	);
};

export { ColorModeSwitcher };
