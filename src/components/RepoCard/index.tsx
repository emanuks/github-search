import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type RepoCardProps = {
	data: {
		id: number;
		name: string;
		description: string;
	};
};

const Component = ({ data }: RepoCardProps) => {
	return (
		<Flex
			key={data.id}
			mb="10"
			mx={2}
			align="center"
			p="3"
			w="300px"
			borderWidth="1px"
			borderRadius="lg"
		>
			<Box p="4">
				<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
					<Text fontWeight="bold" fontSize="md" color="#333333">
						{data.name}
					</Text>
					<Text fontSize="xs" fontWeight="normal">
						{data.description}
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default Component;
