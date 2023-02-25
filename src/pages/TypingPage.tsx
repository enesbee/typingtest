import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Keyword,
	TypingBox,
	TypingBoxContent,
	TypingBoxTaskBar,
	TypingBoxTaskBarButtons,
	TypingBoxTaskBarTitle,
	TypingEditor,
	TypingEditorBox,
	TypingEditorContents,
	TypingEditorContentsTop,
	TypingEditorSplitView,
	TypingSection,
	TypingSectionInner,
} from './styles/Typing.style';

const TypingPage = () => {
	const [text, setText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [errorCount, setErrorCount] = useState(0);
	const [startTime, setStartTime] = useState<string>('');
	const [endTime, setEndTime] = useState<string>('');
	const navigate = useNavigate();

	const mockData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentIndex]);

	const handleKeyDown = (event: KeyboardEvent) => {
		const { key } = event;
		const currentChar = mockData[currentIndex];
		// 이상한 키를 눌렀을 때
		if (key !== currentChar) {
			if (key === 'Enter') {
				// 엔터 키 라면(결과페이지로 이동)
				localStorage.setItem('startTime', startTime);
				localStorage.setItem('endTime', endTime);
				navigate('/result', {
					state: {
						dataLength: mockData.length,
					},
				});
			} else {
				//아니라면
				let newErrorCount = errorCount + 1;
				setErrorCount(newErrorCount);
			}
		} else {
			let newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			if (newIndex === 1) {
				setStartTime(Date.now().toString());
			}
			if (newIndex === mockData.length) {
				setEndTime(Date.now().toString());
			}
		}
	};

	return (
		<TypingSection>
			<TypingSectionInner>
				<TypingBox>
					<TypingBoxTaskBar>
						<TypingBoxTaskBarButtons>
							<span></span>
							<span></span>
							<span></span>
						</TypingBoxTaskBarButtons>
						<TypingBoxTaskBarTitle>
							<h2>Visual Studio Code</h2>
						</TypingBoxTaskBarTitle>
					</TypingBoxTaskBar>
					<TypingBoxContent>
						<TypingEditorBox>
							<TypingEditorSplitView>
								<div className='codicon codicon-menu'></div>
								<div>
									<div className='codicon codicon-files'></div>
									<div className='codicon codicon-search'></div>
									<div className='codicon codicon-source-control'></div>
									<div className='codicon codicon-debug-alt'></div>
									<div className='codicon codicon-extensions'></div>
								</div>
								<div>
									<div className='codicon codicon-account'></div>
									<div className='codicon codicon-settings-gear'></div>
								</div>
							</TypingEditorSplitView>
							<TypingEditorContents>
								<TypingEditorContentsTop>
									<span>App.js</span>
									<span className='codicon codicon-close'></span>
								</TypingEditorContentsTop>
								<TypingEditor>
                                        {mockData.split('').map((char, index) => (
                                            <Keyword
                                                key={index}
                                                className={`${index < currentIndex ? 'isComplete' : ''} ${
                                                    index === currentIndex ? 'isActive' : ''
                                                }`}>
                                                {char}
                                            </Keyword>
                                        ))}
                                </TypingEditor>
							</TypingEditorContents>
						</TypingEditorBox>
					</TypingBoxContent>
				</TypingBox>
			</TypingSectionInner>
		</TypingSection>
	);
};

export default TypingPage;