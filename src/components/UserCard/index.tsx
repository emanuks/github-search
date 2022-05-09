import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type UserCardProps = {
	data: {
		id: number;
		avatar_url: string;
		login: string;
	};
};

const Component = ({ data }: UserCardProps) => {
	const navigate = useNavigate();
	return (
		<Flex
			key={data.id}
			mb="10"
			align="center"
			p="3"
			w="300px"
			borderWidth="1px"
			borderRadius="lg"
		>
			<Avatar src={data.avatar_url} name={data.login} />
			<Box p="6">
				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					<Link
						onClick={() => {
							navigate(`/repositories/${data.login}/${data.id}`);
						}}
					>
						{data.login}
					</Link>
				</Box>
			</Box>
		</Flex>
	);
};

export default Component;
