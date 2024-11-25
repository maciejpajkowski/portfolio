import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import {
    faReact,
    faJs,
    faHtml5,
    faCss3Alt,
    faMicrosoft,
    faPython,
    faGitSquare,
    faAngular,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../../styles/pages/AboutPage/Container";
import DisplayCase from "../../styles/pages/AboutPage/DisplayCase";
import DisplayCaseItem from "../../styles/pages/AboutPage/DisplayCaseItem";

const AboutPage = () => (
    <Container>
        <h2>My name is Maciej.</h2>
        <h4>I'm a self taught software developer from Warsaw, Poland.</h4>
        <p>
            I like to think of myself as a problem solver, a person that will always find a way to improve something,
            automate, speed up, optimize etc. - you name it. I like tinkering with stuff and undestanding how things
            work, so it's no wonder, that I became seriously interested in programming about 3 years ago. Since then, I
            always had a software project, something I'd work on (although there were quite a few couple-month-long
            breaks, when I'd just not code - work-life balance is important, right?).
        </p>
        <p>
            In fact, this very website is a library of such projects of mine, including this website itself. All of the
            data here is received via GitHub's GraphQL API, so every time I make a change in any of my repositories,
            this change will be visible here as well.
        </p>
        <p>
            Below is the list of most of the technologies and languages which I happened to use so far during my
            development as a... well, developer.
        </p>
        <DisplayCase>
            <DisplayCaseItem $icon={faHtml5}>
                <FontAwesomeIcon icon={faHtml5} />
                <span>HTML 5</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faCss3Alt}>
                <FontAwesomeIcon icon={faCss3Alt} />
                <span>CSS 3</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faJs}>
                <FontAwesomeIcon icon={faJs} />
                <span>JavaScript</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faAngular}>
                <FontAwesomeIcon icon={faAngular} />
                <span>Angular</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faReact}>
                <FontAwesomeIcon icon={faReact} />
                <span>React.js</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faMicrosoft}>
                <FontAwesomeIcon icon={faMicrosoft} />
                <span>C#</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faDatabase}>
                <FontAwesomeIcon icon={faDatabase} />
                <span>MS SQL</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faFileExcel}>
                <FontAwesomeIcon icon={faFileExcel} />
                <span>VBA</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faPython}>
                <FontAwesomeIcon icon={faPython} />
                <span>Python</span>
            </DisplayCaseItem>
            <DisplayCaseItem $icon={faGitSquare}>
                <FontAwesomeIcon icon={faGitSquare} />
                <span>GIT</span>
            </DisplayCaseItem>
        </DisplayCase>
    </Container>
);

export default AboutPage;
