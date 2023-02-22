/*
## 3. `App` 컴포넌트 만들기

이제 `App` 컴포넌트를 만들어보겠습니다. `App` 컴포넌트는 앱의 라우팅을 처리하고, 문서 따라 쓰기 연습을 할 수 있도록 준비합니다.

`components` 폴더에 `App.tsx` 파일을 만들고, 다음과 같은 코드를 입력합니다.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Document from './components/Document';
import Result from './components/Result';
import { textData } from './utils/textData';

const App: React.FC = () => {
  const [id, setId] = React.useState<number>(0);
  const [startTime, setStartTime] = React.useState<number>(0);
  const [endTime, setEndTime] = React.useState<number>(0);
  const [text, setText] = React.useState<string>('');

  const handleStart = () => {
    // 시작 시간을 설정합니다.
    setStartTime(Date.now());
  };
  // 결과 페이지로 이동합니다.
  const handleFinish = () => {
// 종료 시간을 설정합니다.
    setEndTime(Date.now());
  };

// 현재 문서를 완료한 경우, 다음 문서로 이동합니다.
  React.useEffect(() => {
    if (text === textData[id].text) {
// 다음 문서로 이동합니다.
      setId((prevId) => prevId + 1);
      // 타이핑한 문자열을 초기화합니다.
      setText('');
    }
  }, [text, id]);

// 결과 페이지에서 다시 시작하는 경우, 시작 시간과 종료 시간을 초기화합니다.
  const handleRestart = () => {
    setStartTime(0);
    setEndTime(0);
  };

// 현재까지 타이핑한 문자열의 길이와 소요 시간을 계산합니다.
  const typedLength = text.length;
  const timeElapsed = endTime ? (endTime - startTime) / 1000 : 0;

// Words Per Minute (WPM)을 계산합니다.
  const wpm = Math.round((typedLength / 5 / timeElapsed) * 60);

// Accuracy를 계산합니다.
  const accuracy =
      Math.round((1 - (text.length - id) / textData[id].text.length) * 100) || 0;

  return (
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/document">Document</Link>
              </li>
              <li>
                <Link to="/result">Result</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={
              <div>
                <h2>Welcome to Typing Practice App</h2>
                <button onClick={handleStart}>Start</button>
              </div>
            }/>

            <Route path="/document" element={
              <Document id={id} text={text} setText={setText} />
            } />
            <Route path="/result" element={
              <Result
                  wpm={wpm}
                  accuracy={accuracy}
                  timeElapsed={timeElapsed}
                  handleRestart={handleRestart}
              />
            } />
          </Routes>
        </Router>
      </div>
  );
};

export default App;

/*
위 코드에서는 `App` 컴포넌트를 만들고, 라우팅을 처리합니다.

`id`, `startTime`, `endTime`, `text` 상태값을 만들어 타자 연습에 필요한 정보를 관리합니다. `handleStart`, `handleFinish`, `handleRestart` 함수를 만들어 버튼 클릭에 따라 상태값을 업데이트합니다.

`React.useEffect`를 사용하여, `text` 상태값이 변경될 때마다 문서를 완료한 경우 다음 문서로 이동하도록 합니다.

`Result` 컴포넌트에서는 `wpm`, `accuracy`, `timeElapsed`, `handleRestart` 함수를 전달받아 결과를 보여줍니다.

마지막으로, `Router`, `Link`, `Routes`, `Route` 컴포넌트를 사용하여 라우팅을 구현합니다.
 */