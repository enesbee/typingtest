/*
## 4. `Result` 컴포넌트
이제 마지막으로 Result 컴포넌트를 작성해보겠습니다. Result 컴포넌트에서는 타자 연습 결과를 보여줍니다.
 */

import React from 'react';
import { Link } from 'react-router-dom';

type ResultProps = {
    wpm: number;
    accuracy: number;
    timeElapsed: number;
    handleRestart: () => void;
};

const Result: React.FC<ResultProps> = ({
                                           wpm,
                                           accuracy,
                                           timeElapsed,
                                           handleRestart,
                                       }) => {
    return (
        <div>
            <h2>Result</h2>
            <p>Words Per Minute: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
            <p>Time Elapsed: {timeElapsed}s</p>
            <button onClick={handleRestart}>Restart</button>
            <br />
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default Result;

/*
Result 컴포넌트에서는 wpm, accuracy, timeElapsed, handleRestart를 props로 전달받습니다.

그리고 h2 요소를 사용하여 결과 페이지임을 표시하고, p 요소를 사용하여 결과를 보여줍니다. handleRestart 함수를 호출하는 버튼과 Home으로 돌아가는 링크를 추가합니다.

이제 App, Document, Result 컴포넌트가 모두 작성되었습니다. 이제 타자 연습 앱을 실행해보세요.
 */