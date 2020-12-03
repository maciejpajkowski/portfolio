import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPaperPlane, faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faHtml5, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const StyledSidebar = styled.div`
    background: #292929;
`;

const StyledSidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #292929;
    height: 3rem;
`;

const StyledSidebarList = styled.ul`
    margin: 0;
    padding: 0;
    background: #333;
    
    li {
        display: flex;
        align-items: center;
        height: 3rem;
        text-decoration: none;
        list-style: none;
        border-bottom: 1px solid #222;
        padding: 0 2rem;
        transition: all 0.3s;

        div {
            margin-right: 1rem;
            font-size: 22px;
            width: 2rem;
            text-align: center;
        }

        div, span {
            filter: drop-shadow(0px -1px 0px rgba(0,0,0,.7));
        }

        &:hover {
            cursor: pointer;
        }

        @media (max-height: 768px) {
            height: 2.5em;
        }
    }
`;

const StyledPageLink = styled.li`
    div {
        color: #1ac966 /*${props => props.color}*/
    }

    &:hover {
        border-bottom: 5px solid ${props => props.borderColor};
        background: ${props => props.color};

        div, span {
            color: ${props => props.borderColor};
        }
    }
`;

const Sidebar = ({ setSidebarOpen }) => (
    <StyledSidebar>
        <StyledSidebarHeader>
            GENERAL INFO
        </StyledSidebarHeader>
        <StyledSidebarList>
            <Link href="/" >
                <StyledPageLink color="#3fd480" borderColor="#288550" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span>Home</span>
                </StyledPageLink>
            </Link>
            <Link href="/about">
                <StyledPageLink color="#3ec423" borderColor="#2e911a" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>About me</span>
                </StyledPageLink>
            </Link>
            <Link href="/contact">
                <StyledPageLink color="#ffc336" borderColor="#b58a24" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <span>Contact</span>
                </StyledPageLink>
            </Link>
        </StyledSidebarList>
        <StyledSidebarHeader>
            PROJECTS
        </StyledSidebarHeader>
        <StyledSidebarList>
            <Link href="/projects/react">
                <StyledPageLink color="#30b7ff" borderColor="#2282b5" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <span>React.js</span>
                </StyledPageLink>
            </Link>
            <Link href="/projects/javascript">
                <StyledPageLink color="#ffee03" borderColor="#bfb200" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <span>Vanilla JS & jQuery</span>
                </StyledPageLink>
            </Link>
            <Link href="/projects/html">
                <StyledPageLink color="#ff4900" borderColor="#ad3200" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <span>HTML & CSS</span>
                </StyledPageLink>
            </Link>
            <Link href="/projects/dotnet">
                <StyledPageLink color="#476cff" borderColor="#324db8" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faMicrosoft} />
                    </div>
                    <span>C# (.NET)</span>
                </StyledPageLink>
            </Link>
            <Link href="/projects/other">
                <StyledPageLink color="#b247ff" borderColor="#7e33b5">
                    <div>
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <span>Other</span>
                </StyledPageLink>
            </Link>
        </StyledSidebarList>
    </StyledSidebar>
);

export default Sidebar;