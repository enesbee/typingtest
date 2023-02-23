import { Link } from 'react-router-dom';

interface Results {
    wpm: number;
    accuracy: number;
    timeElapsed: number;
}

function ResultsPage() {
    const wpm = localStorage.getItem('wpm');
    const accuracy = localStorage.getItem('accuracy');
    const timeElapsed = localStorage.getItem('timeElapsed');
    const results: Results[] = JSON.parse(localStorage.getItem('results') || '[]');

    if (wpm && accuracy && timeElapsed) {
        const newResult = {
            wpm: parseFloat(wpm),
            accuracy: parseFloat(accuracy),
            timeElapsed: parseInt(timeElapsed),
        };
        localStorage.setItem('results', JSON.stringify([...results, newResult]));
    }

    return (
        <div>
            <h1>Results</h1>
            {wpm && accuracy && timeElapsed ? (
                <div>
                    <p>Words Per Minute: {wpm}</p>
                    <p>Accuracy: {accuracy}%</p>
                    <p>Time Elapsed: {Math.round(+timeElapsed / 1000)} seconds</p>
                </div>
            ) : (
                <p>No results to display.</p>
            )}
            <h2>Previous Results</h2>
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            WPM: {result.wpm} - Accuracy: {result.accuracy}% - Time Elapsed:{' '}
                            {Math.round(result.timeElapsed / 1000)} seconds
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No previous results to display.</p>
            )}
            <Link to="/">Play Again</Link>
        </div>
    );
}

export default ResultsPage;