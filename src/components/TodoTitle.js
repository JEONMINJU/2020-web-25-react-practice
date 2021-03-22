import React from 'react';
import styled from 'styled-components';

const TodoTitleBlock = styled.div`
	padding-top: 40px;
	padding-left: 32px;
	padding-right: 32px;
	padding-bottom: 40px;
	border-bottom: 1px solid #e9ecef;

	.title {
		font-size: 28px;
		text-align: center;
	}
`;

function TodoTitle() {
	return (
		<TodoTitleBlock>
			<div className="title">Todo App</div>
		</TodoTitleBlock>
	)
}
export default TodoTitle;