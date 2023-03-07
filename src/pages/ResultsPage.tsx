import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	NextButton,
	ResultBox,
	ResultsSection,
	ResultsSectionInner,
} from './styles/Results.style';

const ResultPage = () => {
	const [wpm, setWpm] = useState<number | null>(null);
	const [accuracy, setAccuracy] = useState<number | null>(null);
	const [timeElapsed, setTimeElapsed] = useState<number | null>(null);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const startTimeString = localStorage.getItem('startTime');
		const endTimeString = localStorage.getItem('endTime');
		if (startTimeString && endTimeString) {
			const startTime = parseInt(startTimeString);
			const endTime = parseInt(endTimeString);
			const timeElapsed = (endTime - startTime) / 1000;
			setTimeElapsed(timeElapsed);
			const wordCount = location.state.dataLength; // example value, should be calculated from mockData
			const wpm = Math.round((wordCount / (timeElapsed / 60)) * 100) / 100;
			setWpm(wpm);
			const accuracy = 100; // example value, should be calculated based on user input
			setAccuracy(accuracy);
		}
	}, []);

	console.log(location.state);
	const handleRestart = () => {
		navigate('/typingtest');
	};

	return (
		<ResultsSection>
			<ResultsSectionInner>
				{location.state == null ? (
					<p>아직 기록이 없어요.</p>
				) : (
					<>
						<ResultBox>
							<p>
								분 당 글자수: <span>{wpm?.toFixed(2)}</span>타
							</p>
							{/*<p>정확도: <span>{accuracy}</span>%</p>*/}
							<p>
								소요 시간: <span>{timeElapsed?.toFixed(1)}</span>초
							</p>
						</ResultBox>
						<NextButton onClick={handleRestart}>다시 도전!</NextButton>
					</>
				)}
			</ResultsSectionInner>
		</ResultsSection>
	);
};

export default ResultPage;
