import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ResultPage from './pages/ResultsPage';
import StartPage from './pages/StartPage';
import TypingPage from './pages/TypingPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='typing' element={<TypingPage />} />
					<Route path='result' element={<ResultPage />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;