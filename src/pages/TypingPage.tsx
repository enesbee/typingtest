import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Keyword, TypingSection, TypingSectionInner } from './styles/Typing.style';

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
        <TypingSection>
            <TypingSectionInner>
            <div>
                {mockData.split("").map((char, index) => (
                    <Keyword
                        key={index}
                        className={`${index < currentIndex ? 'isComplete' : '' } ${ index === currentIndex ? 'isActive' : ''}`}
                    >
            {char}
          </Keyword>
                ))}
            </div>
            </TypingSectionInner>

            <div className="window terminal ui-draggable ui-draggable-handle"
                 style="position: relative; display: block; left: -375px; top: -233px;">
                <div className="window__taskbar">
                    <div className="window__taskbar--actions">
                        <button className="close"></button>
                        <button className="backfull"></button>
                        <button className="full"></button>
                    </div>
                    <div className="window__taskbar--content">
                        <h2>Terminal</h2>
                    </div>
                </div>
                <div className="terminal_content">
                    <p>Last Login : Yesterday on console</p>

                    <!--    Oh My Zsh bash      -->
                    <div className="terminal_line">
                        <p>
                            <span className="color_green">➜</span>&nbsp;&nbsp;
                            <span className="color_blue">~</span>&nbsp;
                            <span contentEditable="true" className="cursor"></span>
                        </p>
                    </div>

                    <!--    MacOs Default bash                                 -->
                    <!--          <div class="terminal_line">                            -->
                    <!--            <p>MacBook-Pro:~ root$&nbsp;                         -->
                    <!--              <span contenteditable="true" class="cursor"></span>-->
                    <!--            </p>                                                 -->
                    <!--          </div>                                                 -->
                </div>
            </div>
        </TypingSection>
    );
};

export default TypingPage;