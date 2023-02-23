import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import StartPage from "./pages/StartPage";

const TypingPage = () => {
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [errorCount, setErrorCount] = useState(0);
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const navigate = useNavigate();

    const mockData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    const handleKeyDown = (event: KeyboardEvent) => {
        const { key } = event;
        const currentChar = mockData[currentIndex];
        // 이상한 키를 눌렀을 때
        if (key !== currentChar) {
            if (key === 'Enter') {
            // 엔터 키 라면(결과페이지로 이동)
                localStorage.setItem("startTime", startTime);
                localStorage.setItem("endTime", endTime);
                navigate('/result', {
                    state: {
                        dataLength: mockData.length
                    }
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
        <div>
            <div style={{ fontSize: "14px" }}>
                {mockData.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            color: index < currentIndex ? "#000000" : "#bbbbbb",
                            fontSize: index === currentIndex ? "16px" : "14px",
                            fontWeight: index === currentIndex ? "bold" : ""
                        }}
                    >
            {char}
          </span>
                ))}
            </div>
        </div>
    );
};

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
            <div>분 당 글자수: {wpm}타</div>
            <div>정확도: {accuracy}%</div>
            <div>소요 시간: {timeElapsed}초</div>
            <button onClick={handleRestart}>다시 도전!</button>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/typing" element={<TypingPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </Router>
    );
};

export default App;