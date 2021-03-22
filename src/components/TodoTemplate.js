import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
	width: 512px;
	height: 630px;

	postion: relative;
	background: white;
	border-radius: 15px;
	box-shadow: 0 0 8px rgba(0,0,0, 0.04);

	margin: 0 auto;
	margin-top: 80px;
	margin-bottom: 30px;

	display: flex;
	flex-direction: column;
`;

function TodoTemplate({ children }) {
	return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;