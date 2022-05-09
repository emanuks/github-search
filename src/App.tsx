import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

import { Users, Repositories } from "./pages";
import theme from "./styles/theme";

function App() {
	return (
		<ChakraProvider theme={theme} resetCSS>
			<Router>
				<Routes>
					<Route element={<Users />} path="/" />
					<Route element={<Repositories />} path="/repositories/:name/:id" />
				</Routes>
			</Router>
		</ChakraProvider>
	);
}

export default App;
