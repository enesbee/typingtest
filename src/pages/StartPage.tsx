import { Link } from 'react-router-dom';

function StartPage() {
    return (
        <div>
            <h1>Typing Practice App</h1>
            <p>Welcome to the Typing Practice App! Click the button below to start typing.</p>
            <Link to="/typing">
                <button style={{ fontSize: '20px', padding: '10px' }}>Game Start</button>
            </Link>
        </div>
    );
}

export default StartPage;