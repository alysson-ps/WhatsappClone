import React from "react";
import { View } from "react-native";

import Call from './pages/calls'
import Message from './pages/messages'
import Status from './pages/status'

import styled from 'styled-components/native';

const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex:1;
`

export default function App() {
	return (
		<Container>
			<Call/>
		</Container>
	);
}
