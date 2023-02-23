import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ResultPage from "./pages/ResultsPage";
import StartPage from "./pages/StartPage";
import TypingPage from "./pages/TypingPage";


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