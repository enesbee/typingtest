import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  padding: 20px;
  width: 100%;
`;
export const MainSectionInner = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height:70vh;
  flex-direction: column;
`;

export const MainTitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 3rem;
`;
export const MainParagraph = styled.p`
  font-size: 2.5rem;
  margin-bottom: 8rem;
`;
export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3.5rem;
  background-color: #fff;
  border-radius: 1rem;
  height:4.5rem;
  font-size: 1.5rem;
  box-shadow: 0 1px 2px;
  opacity: .75;
  transition: opacity .3s;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;