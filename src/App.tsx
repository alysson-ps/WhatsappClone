import React from "react";

import Call from './pages/listCalls'
import Message from './pages/listMessages'
import Status from './pages/listStatus'

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
