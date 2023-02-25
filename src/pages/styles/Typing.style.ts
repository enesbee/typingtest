import styled from "styled-components";

export const TypingSection = styled.section`
  display: flex;
  padding: 20px;
  width: 100%;
`;
export const TypingSectionInner = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height:70vh;
  flex-direction: column;
  font-family: 'D2Coding', sans-serif;
`;

export const Keyword = styled.span`
  color:#bbb;
  font-size: 28px;
  font-weight: normal;

    &.isActive {
      font-size: 32px;
      font-weight: bold;
    }
    &.isComplete {
      color:#888;
    }
`;