import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

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

export default TypingPage;