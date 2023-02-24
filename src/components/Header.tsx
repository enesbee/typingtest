import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderContainer = styled.header`
  width:100%;
  min-width: 768px;
  box-sizing: border-box;
`;
const HeaderInner = styled.div``;
const HeaderNav = styled.nav``;

function Header() {
    return (
        <HeaderContainer>
            <HeaderInner>
                <HeaderNav>
                        <Link to='/'>처음</Link>
                        <Link to='/Result'>결과</Link>
                </HeaderNav>
            </HeaderInner>
        </HeaderContainer>
    );
}

export default Header;