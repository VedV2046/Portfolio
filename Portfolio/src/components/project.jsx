import React from "react";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import jsLogo from "../assets/js-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import nodeLogo from "../assets/nodejs-logo.svg";
import expressLogo from "../assets/expressjs-logo.svg";
import postgresLogo from "../assets/postgresql-logo.svg";
import "../styles/project.css";

const toolIconMap = {
    html: { src: htmlLogo, alt: "HTML" },
    css: { src: cssLogo, alt: "CSS" },
    js: { src: jsLogo, alt: "JavaScript" },
    javascript: { src: jsLogo, alt: "JavaScript" },
    react: { src: reactLogo, alt: "React" },
    nodejs: { src: nodeLogo, alt: "Node.js" },
    node: { src: nodeLogo, alt: "Node.js" },
    express: { src: expressLogo, alt: "Express" },
    expressjs: { src: expressLogo, alt: "Express" },
    postgresql: { src: postgresLogo, alt: "PostgreSQL" },
    postgres: { src: postgresLogo, alt: "PostgreSQL" }
};

const normalizeKey = (tool) => tool?.toString().toLowerCase().replace(/[^a-z0-9]/g, '');

function Project({ project }) {
    const activeProject = project || {
        title: "Project Title",
        subtitle: "Project Subtitle",
        description: "Project description",
        tools: ["html", "css", "js", "react"]
    };

    return (
        <div className="container project-card project-card--enter">
        <div className="content">
            <div className="project-title">
                <h1>{activeProject.title}</h1>
                {activeProject.url ? (
                    <a href={activeProject.url} target="_blank" rel="noopener noreferrer">
                        <button className="view-button">
                            <div className="btn-name">View</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/></svg> 
                        </button>
                    </a>
                ) : (
                    <button className="view-button" disabled>
                        <div className="btn-name">View</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/></svg> 
                    </button>
                )}
            </div>
            <div className="project-subtitle">
                <h2>{activeProject.subtitle}</h2>
            </div>
            <div className="project-description">
                <div>{activeProject.description}</div>
            </div>
            <div className="impact">
                <div className="impact-title">Impact</div>
                <div className="impact-description">{activeProject.impactDescription}</div>
            </div>
            <div className="product-tools">
                {activeProject.tools.map(tool => {
                    const key = normalizeKey(tool);
                    const icon = toolIconMap[key];
                    if (!icon) return null;

                    return (
                        <div className="img-container" key={tool}>
                            <img className="icon-img" src={icon.src} alt={`${icon.alt} logo`} />
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
    );
}

export default Project;