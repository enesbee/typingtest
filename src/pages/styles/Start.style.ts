import styled from 'styled-components';

export const MainSection = styled.section`
	display: flex;
	padding: 20px;
	width: 100%;
`;
export const MainSectionInner = styled.div`
	display: inherit;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 70vh;
	flex-direction: column;
`;

export const MainTitle = styled.h2`
	/* font-size: 5rem; */
	margin-bottom: 3rem;
`;
export const MainParagraph = styled.p`
	/* font-size: 2.5rem; */
	margin-bottom: 8rem;
`;
export const NextButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s;
	cursor: pointer;
	color: ${(props) => props.theme.button.default.color};
	background-color: ${(props) => props.theme.button.default.backgroundColor};
	border: 1px solid ${(props) => props.theme.button.default.borderColor};
	padding: ${(props) => props.theme.button.default.padding};
	border-radius: ${(props) => props.theme.button.default.borderRadius};
	font-size: ${(props) => props.theme.button.default.fontSize};
	line-height: ${(props) => props.theme.button.default.lineHeight};

	&:hover {
		color: ${(props) => props.theme.button.default.backgroundColor};
		background-color: ${(props) => props.theme.button.default.color};
		border-color: ${(props) => props.theme.button.default.borderColor};
		box-shadow: 0 2px 4px;
		transform: translate(-1px, -2px);
	}
`;
