import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width:100%;
display: flex;
  background-color: #b799e5;
  padding:0 20px;
`;
export const HeaderInner = styled.div`
  display: inherit;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const HeaderNav = styled.nav`
  display:flex; 
  height:2.5rem;
  justify-content: space-between;
  a {
    display: inherit;
    justify-content: center;
    align-items: center;
    color:rgba(255, 255, 255, .8);
    padding: 0 0.5rem;
    min-width: 3.5rem;
    
    &:hover {
      color: #fff;
    }
  }
`;