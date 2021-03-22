import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
	width: 32px;
	height: 32px;
	border-radius: 16px;
	border: 1px solid #862f2d;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	cursor: pointer;
	${props => 
		props.done && 
		css`
			border: 1px solid #e5b4b3;
			color: #e5b4b3;
	`}
`;

const Text = styled.div`
	flex: 1;
	font-size: 21px;
	color: #4d1b19;
	${props => 
		props.done &&
		css`
		color: #d27b79;
		`}
`;

const Remove = styled.div`
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #e5b4b3;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		color: #bf4340;
	}
`;
const TodoItemBlock = styled.div`
	display: flex;
	align-items: center;
	padding-top: 12px;
	padding-bottom: 12px;
	&:hover {
		${Remove} {
			opacity: 1;
		}
	}
`;

function TodoItem({ id, done, text }) {
	return (
		<TodoItemBlock>
			<CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
			<Text done={done}>{text}</Text>
			<Remove>
				<MdDelete />
			</Remove>
		</TodoItemBlock>
	)
}

export default TodoItem;