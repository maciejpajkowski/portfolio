import React from "react";
import Header from "../styles/Sidebar/Header";
import List from "../styles/Sidebar/List";
import PageLink from "../styles/Sidebar/PageLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faPaperPlane, faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact, faAngular, faJs, faHtml5, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Sidebar = ({ setSidebarOpen }) => (
    <div>
        <Header>GENERAL INFO</Header>
        <List>
            <Link href="/">
                <PageLink color="#3fd480" borderColor="#288550" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span>Home</span>
                </PageLink>
            </Link>
            <Link href="/about">
                <PageLink color="#3ec423" borderColor="#2e911a" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>About me</span>
                </PageLink>
            </Link>
            <Link href="/contact">
                <PageLink color="#ffc336" borderColor="#b58a24" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <span>Contact</span>
                </PageLink>
            </Link>
        </List>
        <Header>PROJECTS</Header>
        <List>
            <Link href="/projects/react">
                <PageLink color="#30b7ff" borderColor="#2282b5" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <span>React.js</span>
                </PageLink>
            </Link>
            <Link href="/projects/angular">
                <PageLink color="#dd1b16" borderColor="#a6120d" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faAngular} />
                    </div>
                    <span>Angular</span>
                </PageLink>
            </Link>
            <Link href="/projects/javascript">
                <PageLink color="#ffee03" borderColor="#bfb200" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <span>Vanilla JS & jQuery</span>
                </PageLink>
            </Link>
            <Link href="/projects/html">
                <PageLink color="#ff4900" borderColor="#ad3200" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <span>HTML & CSS</span>
                </PageLink>
            </Link>
            <Link href="/projects/dotnet">
                <PageLink color="#476cff" borderColor="#324db8" onClick={() => setSidebarOpen(false)}>
                    <div>
                        <FontAwesomeIcon icon={faMicrosoft} />
                    </div>
                    <span>C# (.NET)</span>
                </PageLink>
            </Link>
            <Link href="/projects/other">
                <PageLink color="#b247ff" borderColor="#7e33b5">
                    <div>
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <span>Other</span>
                </PageLink>
            </Link>
        </List>
    </div>
);

export default Sidebar;
