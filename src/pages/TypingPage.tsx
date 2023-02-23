import React, { useState, useEffect } from 'react';

type TypingPageProps = {
    text: string;
    onTypingFinish: (startTime: number, endTime: number, inputText: string) => void;
};

const TypingPage = ({ text, onTypingFinish }: TypingPageProps) => {
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [endTime, setEndTime] = useState<number | null>(null);

    useEffect(() => {
        if (inputText.length === 1) {
            setStartTime(Date.now());
        }
        if (inputText === text) {
            setEndTime(Date.now());
        }
    }, [inputText, text]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const keyPressed = event.key;
        if (keyPressed === 'Shift') {
            return;
        }
        if (keyPressed === 'Enter') {
            if (inputText === text) {
                onTypingFinish(startTime!, endTime!, inputText);
            }
            return;
        }
        if (keyPressed === 'Backspace') {
            setInputText(inputText.slice(0, -1));
            return;
        }
        const expectedChar = text.charAt(inputText.length);
        if (keyPressed === expectedChar) {
            setInputText(inputText + keyPressed);
        }
    };

    const getTypedCharColor = (index: number) => {
        if (inputText.length > index) {
            return inputText[index] === text[index] ? '#fff' : '#f44336';
        }
        return '#bbbbbb';
    };

    return (
        <div className="container">
            <div className="text">{text.split('').map((char, index) => (
                <span key={index} style={{ color: getTypedCharColor(index), fontSize: '16px' }}>
          {char}
        </span>
            ))}
            </div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                style={{ fontSize: '16px' }}
            />
        </div>
    );
};

export default TypingPage;