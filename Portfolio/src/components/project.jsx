import React from "react";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import jsLogo from "../assets/js-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import nodeLogo from "../assets/nodejs-logo.svg";
import expressLogo from "../assets/expressjs-logo.svg";
import postgresLogo from "../assets/postgresql-logo.svg";
import pythonLogo from "../assets/python-logo.svg";
import flaskLogo from "../assets/flask-logo.svg";
import restAPILogo from "../assets/rest-api-logo.svg";
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
    python: { src: pythonLogo, alt: "Python" },
    flask: { src: flaskLogo, alt: "Flask" },
    restapi: { src: restAPILogo, alt: "RestAPI" },
};

const normalizeKey = (tool) => tool?.toString().toLowerCase().replace(/[^a-z0-9]/g, '');

function Project({ project }) {
    const activeProject = project || {
        title: "Project Title",
        subtitle: "Project Subtitle",
        description: "Project description",
        impactDescription: "Project impact description",
        tools: ["html", "css", "js", "react"],
        challenges: ["API integration", "Data handling"]
    };

    const challengesList = Array.isArray(activeProject.challenges)
        ? activeProject.challenges
        : typeof activeProject.challenges === 'string'
        ? activeProject.challenges.split(/(?=[A-Z][a-z])|\n|•|;|–/).map(s => s.trim()).filter(Boolean)
        : [];

    return (
        <div className="container project-card project-card--enter">
            <div className="project-title">
                {activeProject.title}
            </div>
            <div className="project-subtitle">
                <h2>{activeProject.subtitle}</h2>
            </div>
            <div className="content">
                <div className="content-left">
                    <div className="project-description">
                        <div className="description-title">Description</div>
                        <div>{activeProject.description}</div>
                    </div>
                    {activeProject.impactDescription && (
                        <div className="project-description">
                            <div className="description-title">Impact</div>
                            <div>{activeProject.impactDescription}</div>
                        </div>
                    )}
                    <div className="product-tools">
                        {activeProject.tools?.map(tool => {
                            const key = normalizeKey(tool);
                            const icon = toolIconMap[key];
                            if (!icon) return null;

                            return (
                                <div className="img-container" key={tool} title={icon.alt}>
                                    <img className="icon-img" src={icon.src} alt={`${icon.alt} logo`} />
                                    <span className="tooltip-text">{icon.alt}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="content-right">
                    {challengesList.length > 0 && (
                        <div className="project-description challenges-box">
                            <div className="description-title">Challenges</div>
                            <ul className="challenges-list">
                                {challengesList.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeProject.url && (
                        <div className="project-action">
                            <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="view-button">
                                <span className="btn-name">View Project</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                            </a>
                        </div>
                    )}
                    {activeProject.githubURL && (
                        <div className="project-action">
                            <a href={activeProject.githubURL} target="_blank" rel="noopener noreferrer" className="view-button">
                                <span className="btn-name">View Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/></svg>
                            </a>
                        </div>
                    )}
                </div>
            </div>    
        </div>
    );
}

export default Project;    