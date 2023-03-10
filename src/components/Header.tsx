import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderInner, HeaderNav } from './styles/Header.style';

function Header() {
	return (
		<HeaderContainer>
			<HeaderInner>
				<HeaderNav>
					<Link to='/typingtest'>홈</Link>
					<Link to='/typingtest/result'>결과</Link>
				</HeaderNav>
			</HeaderInner>
		</HeaderContainer>
	);
}

export default Header;
