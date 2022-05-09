import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { Header, RepoCard } from "../../components";
import api from "../../services/api";

interface Repositories {
	id: number;
	name: string;
	description: string;
}

const Component = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [repos, setRepos] = useState<Repositories[]>([]);

	useEffect(() => {
		const getRepos = async () => {
			const response = await api.get(`/users/${params.name}/repos`);
			setRepos(response.data);
		};

		getRepos();
	}, []);

	return (
		<Box bg="#fcfcfc" minH="100vh">
			<Header />
			<Button
				ml="5"
				mt="5"
				variant="ghost"
				colorScheme="gray"
				onClick={() => {
					navigate("/");
				}}
			>
				<BiChevronLeft size={20} /> Return
			</Button>
			<Flex justify="center" my="5">
				<Stack direction="row" spacing="5" align="center">
					<Avatar
						size="xl"
						src={`https://avatars.githubusercontent.com/u/${params.id}?v=4`}
						name={params.name}
					/>
					<Flex direction="column">
						<Text fontSize="2xl" fontWeight="bold">
							{params.name}
						</Text>
						<Text>{repos.length} Repositories</Text>
					</Flex>
				</Stack>
			</Flex>
			<Flex direction="row" wrap="wrap" mt="50" justify="center">
				{repos.length > 0 ? (
					repos.map((repo) => {
						return <RepoCard data={repo} />;
					})
				) : (
					<Flex justify="center" color="#ff0000">
						No repositories found!
					</Flex>
				)}
			</Flex>
		</Box>
	);
};

export default Component;
