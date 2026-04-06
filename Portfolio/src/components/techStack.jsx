import DecryptedText from '../Reactbits/DecryptedText';
import htmlLogo from '../assets/html-logo.svg';
import cssLogo from '../assets/css-logo.svg';
import jsLogo from '../assets/js-logo.svg';
import bootstrapLogo from '../assets/bootstrap-logo.svg';
import nodeJsLogo from '../assets/nodejs-logo.svg';
import reactLogo from '../assets/react-logo.svg';
import expressJsLogo from '../assets/expressjs-logo.svg';


function TechStack() {
    return (
        <div>
            <section className="techstack-section">
                <DecryptedText
                    text="TECHSTACK"
                    speed={220}
                    maxIterations={15}
                    characters="ABCD1234!?"
                    className="revealed"
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="inViewHover"
                />
            </section>

            <div className="bento-container">
                <div className="bento-item">
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


                <div className="bento-item">
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


                <div className="bento-item">
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
        </div>
    );
}

export default TechStack;