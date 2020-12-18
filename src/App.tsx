import React from "react";
import { View } from "react-native";

import Call from './pages/calls'
import Message from './pages/messages'
import Status from './pages/status'

import { Container } from './App.css';

export default function App() {
	return (
		<Container>
			<Call/>
		</Container>
	);
}
