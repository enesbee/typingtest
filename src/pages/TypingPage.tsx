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
	const [currentRowIndex, setCurrentRowIndex] = useState(0);
	const [currentColIndex, setCurrentColIndex] = useState(0);
	const [errorCount, setErrorCount] = useState(0);
	const [startTime, setStartTime] = useState<string>('');
	const [endTime, setEndTime] = useState<string>('');
	const navigate = useNavigate();

	const mockData = [
		`import React, { useState, useEffect, useRef } from 'react';`,
		``,
		`interface Props {`,
		`  initialCount?: number;`,
		`}`,
		``,
		`const Counter: React.FC<Props> = ({ initialCount = 0 }) => {`,
		`  const [count, setCount] = useState<number>(initialCount);`,
		`  const countRef = useRef<number>(count);`,
		``,
		`  useEffect(() => {`,
		`    countRef.current = count;`,
		`  }, [count]);`,
		``,
		`  useEffect(() => {`,
		`    const timer = setInterval(() => {`,
		`      setCount((prevCount) => prevCount + 1);`,
		`    }, 1000);`,
		``,
		`    return () => {`,
		`      clearInterval(timer);`,
		`    };`,
		`  }, []);`,
		``,
		`  return (`,
		`    <div>`,
		`      <p>Count: {count}</p>`,
		`      <p>Previous Count: {countRef.current}</p>`,
		`    </div>`,
		`  );`,
		`};`,
		``,
		`export default Counter;`
	];


	// 데이터의 줄 수
	console.log(mockData.length)
	// 데이터 한줄의 갯수
console.log(mockData[currentRowIndex].length)
	// mockdata 배열의 마지막 항목 숫자
	console.log(mockData[mockData.length -1].length )
	// 한줄 그게 몇줄까지 내려왓나
	console.log(currentRowIndex)
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [currentRowIndex, currentColIndex]);

	const handleKeyDown = (event: KeyboardEvent) => {
		const { key } = event;
		const currentChar = mockData[currentRowIndex][currentColIndex];

		// 현재 입력한 키가 정확하면
		if (key === currentChar) {
			setCurrentColIndex(currentColIndex + 1);

			// 타이핑 시작 시간 저장
			if (currentColIndex + 1 === 1) {
				setStartTime(Date.now().toString());
			}

			// 모든 글자를 정확하게 입력하면 타이핑 종료 시간 저장
			if (currentColIndex + 1 === mockData[currentRowIndex].length) {
				setEndTime(Date.now().toString());
			}
		}

		// 현재 입력한 키가 올바르지 않은 경우
		else {
			// 엔터 키가 아닌 경우에만 에러 카운트 증가
			if (key !== 'Enter') {
				setErrorCount(errorCount + 1);
			}
			// 엔터 키를 누르면
			else if (mockData.length -1 === currentRowIndex && mockData[currentRowIndex].length === currentColIndex) {
				// 모든 글자를 정확하게 입력한 경우에만 이동
				// 타이핑 시작 시간과 종료 시간을 로컬 스토리지에 저장하고 결과 페이지로 이동
				localStorage.setItem('startTime', startTime);
				localStorage.setItem('endTime', endTime);
				navigate('/result', {
					state: {
						dataLength: mockData.length,
					},
				});
			} else if (currentColIndex === mockData[currentRowIndex].length){
				setCurrentRowIndex(currentRowIndex => currentRowIndex + 1);
				setCurrentColIndex(0);
			} else return;
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
									{mockData.map((line:string, idx:number)=> (
										<div key={idx} className={`${line.length === 0 ? 'isBlank' : ''}`}>
											{line.split('').map((char, index) => (
												<Keyword
													key={index}
													className={`${idx <= currentRowIndex && index < currentColIndex ? 'isComplete' : ''} ${idx < currentRowIndex?'isCompleted':''} ${idx === currentRowIndex && index=== currentColIndex ? 'isActive' : ''}`}>
													{char}
												</Keyword>
											))}
										</div>
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