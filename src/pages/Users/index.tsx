import { Flex, Input, Stack, Button, Box, FormControl } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

import api from "../../services/api";
import { Header, UserCard } from "../../components";

interface Users {
	id: number;
	login: string;
	avatar_url: string;
}

interface MyFormValues {
	name: string;
}

const Component = () => {
	const [users, setUsers] = useState<Users[]>([]);
	const [name, setName] = useState("");
	const navigate = useNavigate();
	const initialValues: MyFormValues = { name: "" };

	const handleSearch = () => {
		const getUser = async () => {
			try {
				const response = await api.get(`/users/${name}`);
				navigate(`/repositories/${response.data.login}/${response.data.id}`);
			} catch (error) {
				setUsers([]);
			}
		};

		getUser();
	};

	useEffect(() => {
		const getUsers = async () => {
			const response = await api.get("/users");
			setUsers(response.data);
		};

		getUsers();
	}, []);

	return (
		<Box bg="#fcfcfc" minH="100vh">
			<Header />
			<Flex justify="center" my="5">
				<Stack direction="row">
					<Formik onSubmit={handleSearch} initialValues={initialValues}>
						<Form>
							<Input
								placeholder="Search User..."
								width="300px"
								value={name}
                                mr='3'
								onChange={(e) => setName(e.target.value)}
							/>
							<Button onSubmit={handleSearch} variant="ghost" type="submit">
								<BiSearch size={24} />
							</Button>
						</Form>
					</Formik>
				</Stack>
			</Flex>
			<Flex direction="row" wrap="wrap" mt="50" justify="space-evenly">
				{users.length > 0 ? (
					users.map((user) => {
						return <UserCard data={user} />;
					})
				) : (
					<Flex justify="center" color="#ff0000">
						User not found!
					</Flex>
				)}
			</Flex>
		</Box>
	);
};

export default Component;
