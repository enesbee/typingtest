import styled from 'styled-components';

export const ResultsSection = styled.section`
	display: flex;
	padding: 20px;
	width: 100%;
`;
export const ResultsSectionInner = styled.div`
	display: inherit;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 70vh;
	flex-direction: column;
`;

export const ResultBox = styled.div`
	display: inherit;
	flex-direction: column;
	margin-bottom: 8rem;

	p {
		font-size: 22px;
		margin: 1rem 0;

		span {
			font-size: 24px;
			font-weight: 600;
		}
	}
`;

export const NextButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 3.5rem;
	background-color: #fff;
	border-radius: 1rem;
	height: 4.5rem;
	font-size: 1.5rem;
	box-shadow: 0 1px 2px;
	opacity: 0.75;
	transition: opacity 0.3s;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;