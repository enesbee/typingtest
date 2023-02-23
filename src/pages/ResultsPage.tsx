import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const ResultPage = () => {
    const [wpm, setWpm] = useState<number | null>(null);
    const [accuracy, setAccuracy] = useState<number | null>(null);
    const [timeElapsed, setTimeElapsed] = useState<number | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const startTimeString = localStorage.getItem("startTime");
        const endTimeString = localStorage.getItem("endTime");
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

    const handleRestart = () => {
        navigate("/");
    };

    return (
        <div>
            <div>분 당 글자수: {wpm?.toFixed(2)}타</div>
            <div>정확도: {accuracy}%</div>
            <div>소요 시간: {timeElapsed?.toFixed(1)}초</div>
            <button onClick={handleRestart}>다시 도전!</button>
        </div>
    );
};

export default ResultPage;