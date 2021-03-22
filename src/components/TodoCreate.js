import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
	background: #d27b79;
	&:hover {
		background: #e5b4b3;
	}
	&:active {
		background: #4d1b19;
	}

	z-index: 5;
	cursor: pointer;
	width: 80px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	left: 50%;
	bottom: 0px;
	transform: translate(-50%, 50%);

	font-size: 60px;
	color: white;
	border-radius: 40px;

	border: none;
	outline: none;
`;

function TodoCreate() {
	return (
		<CircleButton>
			<MdAdd />
		</CircleButton>
	);
}

export default TodoCreate;