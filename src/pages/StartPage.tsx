import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <div>
            <h1>JSTyping</h1>
            <p>자바스크립트로 타자연습을 해봅시다.</p>
            <Link to="/typing">
                <button style={{ fontSize: '20px', padding: '10px' }}>Game Start</button>
            </Link>
        </div>
    );
}

export default StartPage;