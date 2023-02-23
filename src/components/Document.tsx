/*
## 2. `Document` 컴포넌트 만들기

이제 `Document` 컴포넌트를 만들어보겠습니다. `Document` 컴포넌트는 앱에서 따라 써야 할 문서를 보여주는 역할을 합니다.

`components` 폴더에 `Document.tsx` 파일을 만들고, 다음과 같은 코드를 입력합니다.
 */

import React, { Dispatch, SetStateAction } from 'react';
import { textData } from '../utils/textData';

type DocumentProps = {
    id: number;
    text: string;
    setText:Dispatch<SetStateAction<string>>;
};

const Document: React.FC<DocumentProps> = ({ id }) => {
    const [text, setText] = React.useState<string>('');

    React.useEffect(() => {
        setText(textData.find((data) => data.id === id)?.text || '');
    },[id]);

            const handleKeyDown = (e: KeyboardEvent) => {
// 타이핑한 문자열을 업데이트합니다.
            setText((prevText) => prevText + e.key);
                // 키보드 입력 방지합니다.
                e.preventDefault();
            };

        React.useEffect(() => {
// 키보드 이벤트 리스너를 추가합니다.
            window.addEventListener('keydown', handleKeyDown);
            // 컴포넌트가 언마운트될 때, 키보드 이벤트 리스너를 제거합니다.
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, []);

        return (
            <div>
                <h2>{textData[id].title}</h2>
                {textData[id].text.split('').map((word, index) => {
                    let color = '#bbb';
                    if (text.split('')[index]) {
                        if (text.split('')[index] === word) {
                            color = '#000';
                        } else {
                            color = 'red';
                        }
                    }

                    return (
                        <span key={index} style={{ color: color }}>
        {word}{''}
      </span>
                    );
                })}
            </div>
        );
    };

    export default Document;

    /*
    위 코드에서는 `Document` 컴포넌트를 만들고, `textData` 배열에서 `id`에 해당하는 객체의 `title`과 `text`를 보여줍니다.

`text` 상태값을 만들고, `handleKeyDown` 함수를 만들어 키보드 이벤트를 처리합니다. 키보드 이벤트가 발생할 때마다 `text` 상태값을 업데이트합니다.

`text`와 `textData`를 비교하여, `text`에 입력한 문자열과 일치하면 `color`를 `#fff`로 설정하고, 일치하지 않으면 `color`를 `red`로 설정합니다.

마지막으로, `span` 요소에 `backgroundColor` 스타일 속성을 설정하여 `color`값에 따라 배경색을 변경합니다.
     */