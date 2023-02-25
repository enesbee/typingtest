import { Link } from 'react-router-dom';
import {MainParagraph, MainSection, MainSectionInner, MainTitle, NextButton } from './styles/Start.style';

function StartPage() {
    return (
        <MainSection>
            <MainSectionInner>
            <MainTitle>JSTyping</MainTitle>
            <MainParagraph>자바스크립트로 타자연습을 해봅시다.</MainParagraph>
            <Link to="/typing">
                <NextButton>Game Start</NextButton>
            </Link>
            </MainSectionInner>
        </MainSection>
    );
}

export default StartPage;