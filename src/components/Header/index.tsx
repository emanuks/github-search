import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Component = () => {
	return (
		<Flex justify="center" align="center" h="60px" bg="#e0e0e0">
			<img
				src="https://logos-marques.com/wp-content/uploads/2021/03/GitHub-Embleme-500x283.png"
				width="50"
				height="50"
				alt="Logo"
			/>
			<Text fontSize="lg" fontWeight="bold">
				Github Search
			</Text>
		</Flex>
	);
};

export default Component;
