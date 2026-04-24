import React from "react";
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import jsLogo from '../assets/js-logo.svg';
import bootstrapLogo from '../assets/bootstrap-logo.svg';
import nodeJsLogo from '../assets/nodejs-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import expressJsLogo from '../assets/expressjs-logo.svg';
import sqlLogo from '../assets/sql-logo.svg';
import postgreSqlLogo from '../assets/postgresql-logo.svg';
import gitLogo from '../assets/git-logo.svg';
import githubLogo from '../assets/github-logo.svg';
import vsCodeLogo from '../assets/vscode-logo.svg';
import antigravityLogo from '../assets/antigravity-logo.svg';
import vercelLogo from '../assets/vercel-logo.svg';
import postmanLogo from '../assets/postman-logo.svg';
import canvaLogo from '../assets/canva-logo.svg';
import lightroomLogo from '../assets/lightroomclassic-logo.svg';


function BentoBox() {
    return(
        <div className="bento-reveal">
            <div className="bento-container">

                <div className="bento-item magic-bento-card">
                    <p className="bento-title">Frontend</p>
                    <div className="bento-logo-container">
                        <div className="logo-container">
                            <div className="bento-img-container">
                                <img src={htmlLogo} alt="HTML Logo" className="bento-logo" />
                            </div>
                            <p className="bento-logo-text">HTML5</p>
                        </div>
                        <div className="logo-container">
                            <div className="bento-img-container">
                                <img src={cssLogo} alt="CSS Logo" className="bento-logo" />
                            </div>
                            <p className="bento-logo-text">CSS3</p>
                        </div>
                        <div className="logo-container">
                            <div className="bento-img-container">
                                <img src={jsLogo} alt="JavaScript Logo" className="bento-logo" />
                            </div>
                            <p className="bento-logo-text">JavaScript</p>
                        </div>
                    </div>
                </div>


                <div className="bento-item magic-bento-card">
                    <p className="bento-title">Framework</p>
                    <div className="bento-item">
                        <div className="bento-logo-container">
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={bootstrapLogo} alt="Bootstrap Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">BootStrap</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={reactLogo} alt="React Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">React</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bento-item magic-bento-card">
                    <p className="bento-title">Backend</p>
                    <div className="bento-item">
                        <div className="bento-logo-container">
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={nodeJsLogo} alt="NodeJs Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">NodeJs</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={expressJsLogo} alt="ExpressJs Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">ExpressJs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bento-container1">

                <div className="bento-item magic-bento-card">
                    <p className="bento-title">Database</p>
                    <div className="bento-item">
                        <div className="bento-logo-container">
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={sqlLogo} alt="SQL Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">SQL</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={postgreSqlLogo} alt="PostgreSQL Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">PostgreSQL</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bento-item magic-bento-card">
                    <p className="bento-title">Tools</p>
                    <div className="bento-item">
                        <div className="bento-logo-container">
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={gitLogo} alt="Git Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Git</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={githubLogo} alt="GitHub Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">GitHub</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={vsCodeLogo} alt="VS Code Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">VS Code</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={antigravityLogo} alt="Antigravity Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Antigravity</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={vercelLogo} alt="Vercel Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Vercel</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={postmanLogo} alt="Postman Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Postman</p>
                            </div>
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={canvaLogo} alt="Canva Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Canva</p>
                            </div>    
                            <div className="logo-container">
                                <div className="bento-img-container">
                                    <img src={lightroomLogo} alt="Lightroom Logo" className="bento-logo" />
                                </div>
                                <p className="bento-logo-text">Lightroom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bento-container2">
                <div className="bento-item magic-bento-card work-card">
                    <p className="bento-title github-title">
                        <img src={githubLogo} alt="GitHub Logo" className="github-title-logo" />
                        <span>VedV2046</span>
                    </p>
                    <div className="bento-item work-content">
                        <a
                            href="https://github.com/VedV2046"
                            target="_blank"
                            rel="noreferrer"
                            className="heatmap-link"
                            aria-label="Open GitHub profile"
                        >
                            <img
                                src="https://ghchart.rshah.org/VedV2046"
                                alt="VedV2046 GitHub contribution heatmap"
                                className="github-heatmap"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BentoBox;