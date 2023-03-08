import styled, { keyframes } from 'styled-components';

export const TypingSection = styled.section`
	display: flex;
	padding: 20px;
	width: 100%;
`;
export const TypingSectionInner = styled.div`
	display: inherit;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 70vh;
	flex-direction: column;
`;

const flashCursor = keyframes`
	0% {opacity:0}
`;
export const Keyword = styled.span`
	color: #bbb;
	font-size: 16px;
	font-weight: normal;
	line-height: 24px;

	&.isActive {
		font-size: 18px;
		position: relative;
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: -1px;
			display: inline-block;
			vertical-align: middle;
			background-color: #fff;
			width: 2px;
			height: 22px;
			animation: ${flashCursor} 1.5s steps(2) infinite;
		}
	}
	&.isComplete,
	&.isCompleted {
		color: #888;
	}
`;

export const TypingBox = styled.div`
	margin: 0;
	padding: 0;
	outline: 0;
	list-style: none;
	min-width: 65%;
	max-width: 80%;
	max-height: 60vh;
	overflow: hidden;
	border-radius: 1rem;
	background: transparent;
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
	border: 1px solid #ffffff34;
	animation: zoom-out 0.3s;
	z-index: 10;
	touch-action: none;
	transition: 110ms;
	position: relative;
	display: block;
`;

export const TypingBoxTaskBar = styled.div`
	height: 35px;
	display: flex;
	justify-content: space-between;
	padding: 0 16px;
	background-color: rgb(252, 255, 251);
`;

export const TypingBoxTaskBarButtons = styled.div`
	display: flex;
	align-items: center;

	span {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0.8rem;
		height: 0.8rem;
		padding: 8px;
		border-radius: 50%;
		transition: 0.4s;

		&:nth-child(1) {
			background-color: #ff5f56;
			box-shadow: 0 0 0 0.5px #e0443e;
		}
		&:nth-child(2) {
			background-color: #ffbd2e;
			box-shadow: 0 0 0 0.5px #dea123;
		}
		&:nth-child(3) {
			background-color: #27c93f;
			box-shadow: 0 0 0 0.5px #1aab29;
		}
		&:not(:last-child) {
			margin-right: 8px;
		}
	}
`;

export const TypingBoxTaskBarTitle = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	overflow: hidden;

	h2 {
		line-height: 24px;
		font-size: 16px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const TypingBoxContent = styled.div`
	width: 100%;
	height: 91%;
	overflow-y: auto;
	background-color: rgba(5, 5, 99, 0.63);
	backdrop-filter: blur(12px);
	color: rgb(235, 235, 235);
`;

export const TypingEditorBox = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
`;
export const TypingEditorSplitView = styled.div`
	width: 48px;
	height: 100%;
	flex-shrink: 0;
	background-color: rgb(51, 51, 51);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all 0.2s ease;

	@media screen and (max-width: 768px) {
		& {
			width: 0;
		}
	}

	> div:not(:first-child) {
		display: flex;
		flex-direction: column;

		&:nth-child(2) {
			margin-bottom: auto;
		}

		> div {
			color: rgba(255, 255, 255, 0.4);
			display: flex !important;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			white-space: nowrap;
			outline: 0;
			font-size: 20px;
			height: 36px;
		}
	}
	.codicon-menu {
		display: inherit;
		height: 35px;
		font-size: 16px;
		justify-content: center;
		align-items: center;
	}
`;

export const TypingEditorContents = styled.div`
	flex-grow: 1;
	width: 100%;
	height: 100%;
	display: flex;
	background-color: rgb(37, 37, 38);
	flex-direction: column;
`;

export const TypingEditorContentsTop = styled.div`
	display: flex;
	height: 35px;
	width: 120px;
	min-width: fit-content;
	flex-shrink: 0;
	background-color: rgb(30, 30, 30);
	justify-content: space-between;

	span {
		display: inherit !important;
		align-items: center;
		min-width: 16px;
		line-height: 16px;
		margin: 0 6px;
		font-size: 13px;
	}
`;
export const TypingEditor = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 1rem 1rem 1rem 2rem;
	white-space: pre;
	overflow-x: auto;
	overflow-y: scroll;
	/* ===== Scrollbar CSS ===== */
	/* Firefox */
	& {
		scrollbar-width: auto;
		scrollbar-color: ${(props) => props.theme.colors.dark}
			${(props) => props.theme.colors.secondary};
	}

	/* Chrome, Edge, and Safari */
	&::-webkit-scrollbar {
		width: 7px;
		height: 7px;
	}

	&::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.secondary};
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.dark};
		border-radius: 5px;
		border: 0px none transparent;
	}

	> div.isBlank {
		height: 20px;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.2);
	}
`;
