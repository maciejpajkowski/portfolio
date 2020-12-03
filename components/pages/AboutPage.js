import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faJs, faHtml5, faCss3Alt, faMicrosoft, faPython, faGitSquare } from '@fortawesome/free-brands-svg-icons';

const StyledAboutPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    overflow: scroll;

    @media (max-width: 768px) {
        margin-top: 2em;

        h2, p {
            margin: 0.6em 0;
        }

        h4 {
            margin: 0.2em 0;
        }
    }
`;

const StyledTechnologiesDisplayCase = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

const StyledTechDisplayCaseItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    width: 10rem;
    text-align: center;

    svg {
        font-size: 4rem;
        margin-bottom: 0.5rem;
        color: #1ac966;
        transition: all 0.3s;

        &:hover {
            color: ${props => {
                switch(props.icon) {
                    case faHtml5:
                        return "#ff4900";
                    case faCss3Alt:
                        return "#038cfc";
                    case faJs:
                        return "#ffee03";
                    case faNodeJs:
                        return "#29a600";
                    case faReact:
                        return "#30b7ff";
                    case faMicrosoft:
                        return "#476cff";
                    case faDatabase:
                        return "#ccc";
                    case faFileExcel:
                        return "#2e8c38";
                    case faPython:
                        return "#ffe873";
                    case faGitSquare:
                        return "#f1502f";
                }
            }}
        }

        @media (max-width: 600px) {
            font-size: 3em;
        }
    }

    @media (max-width: 600px) {
        width: 8em;
        padding: 0.5em;
    }
`;


const AboutPage = () => (
    <StyledAboutPageContainer>
        <h2>My name is Maciej.</h2>
        <h4>I'm a self taught software developer from Warsaw, Poland.</h4>
        <p>I like to think of myself as a problem solver, a person that will always find a way to improve something, automate,
        speed up, optimize etc. - you name it. I like tinkering with stuff and undestanding how things work, so it's no wonder, 
        that I became seriously interested in programming about 3 years ago. Since then, I always had a software project, 
        something I'd work on (although there were quite a few couple-month-long breaks, when I'd just not code - work-life balance
        is important, right?).</p>
        <p>In fact, this very website is a library of such projects of mine, including this website itself. 
        All of the data here is received via GitHub's GraphQL API, so every time I make a change in any of my repositories, 
        this change will be visible here as well.</p>
        <p>Below is the list of most of the technologies and languages which I happened to use so far 
        during my development as a... well, developer.</p>
        <StyledTechnologiesDisplayCase>
            <StyledTechDisplayCaseItem icon={faHtml5}>
                <FontAwesomeIcon icon={faHtml5} />
                <span>HTML 5</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faCss3Alt}>
                <FontAwesomeIcon icon={faCss3Alt} />
                <span>CSS 3</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faJs}>
                <FontAwesomeIcon icon={faJs} />
                <span>JavaScript (ES6+)</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faNodeJs}>
                <FontAwesomeIcon icon={faNodeJs} />
                <span>Node.js</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faReact}>
                <FontAwesomeIcon icon={faReact} />
                <span>React.js</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faMicrosoft}>
                <FontAwesomeIcon icon={faMicrosoft} />
                <span>C#</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faDatabase}>
                <FontAwesomeIcon icon={faDatabase} />
                <span>MS SQL</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faFileExcel}>
                <FontAwesomeIcon icon={faFileExcel} />
                <span>VBA</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faPython}>
                <FontAwesomeIcon icon={faPython} />
                <span>Python</span>
            </StyledTechDisplayCaseItem>
            <StyledTechDisplayCaseItem icon={faGitSquare}>
                <FontAwesomeIcon icon={faGitSquare} />
                <span>GIT</span>
            </StyledTechDisplayCaseItem>
        </StyledTechnologiesDisplayCase>
    </StyledAboutPageContainer>
);

export default AboutPage;
