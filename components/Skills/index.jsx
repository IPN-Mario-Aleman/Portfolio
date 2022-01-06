import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Skills(){
    const [state, setState] = useState(false)//{ clicked: false }

    const handleClick = () => {
        setState({ clicked: !state.clicked })
        if(state.clicked){

            const frontend = document.getElementById('frontend')
            const backend = document.getElementById('backend')
            const design = document.getElementById('design')
            
            frontend.classList.remove('hidden')
            frontend.classList.add('block')
            document.getElementById('frontendb').classList.add('active')
            document.getElementById('backendb').classList.remove('active')
            document.getElementById('designb').classList.remove('active')

            backend.classList.add('hidden')
            backend.classList.remove('block')
            design.classList.add('hidden')
            design.classList.remove('block')
        }

    }
    const handleClick1 = () => {
        setState({ clicked: !state.clicked })
        if(state.clicked){

            const frontend = document.getElementById('frontend')
            const backend = document.getElementById('backend')
            const design = document.getElementById('design')
            
            backend.classList.remove('hidden')
            backend.classList.add('block')
            document.getElementById('backendb').classList.add('active')
            document.getElementById('frontendb').classList.remove('active')
            document.getElementById('designb').classList.remove('active')
            
            frontend.classList.add('hidden')
            frontend.classList.remove('block')
            design.classList.add('hidden')
            design.classList.remove('block')
        }
    }

    const handleClick2 = () => {
        setState({ clicked: !state.clicked })
        if(state.clicked){

            const frontend = document.getElementById('frontend')
            const backend = document.getElementById('backend')
            const design = document.getElementById('design')
            
            
            design.classList.remove('hidden')
            design.classList.add('block')
            document.getElementById('designb').classList.add('active')
            document.getElementById('backendb').classList.remove('active')
            document.getElementById('frontendb').classList.remove('active')

            frontend.classList.add('hidden')
            frontend.classList.remove('block')
            backend.classList.add('hidden')
            backend.classList.remove('block')
        }
    }

    return (<>
        <div className="skill_container">
            <div className="skills_tabs" id="frontendb" onClick={handleClick}>
                <div className="skill_button button__flex">
                    <i className="icon_sk">
                        <FontAwesomeIcon icon={['fas', 'code']}/>
                    </i>
                    Frontend
                </div>
            </div>
            <div className="skills_tabs" id="backendb" onClick={handleClick1}>
                <div className="skill_button button__flex">
                    <i className="icon_sk">
                        <FontAwesomeIcon icon={['fab', 'node-js']}/>
                    </i>
                    Backend
                </div>
            </div>
            <div className="skills_tabs" id="designb" onClick={handleClick2}>
                <div className="skill_button button__flex">
                    <i className="icon_sk">
                        <FontAwesomeIcon icon={['fas', 'object-group']}/>
                    </i>
                    Diseño
                </div>
            </div>
        </div>
        <div className="skills-bar">
            <div className="card_frontend block" id="frontend">
                <h1 className="title_skill">Frontend</h1>
                <div className="bar">
                    <div className="info">
                        <span>HTML5</span>
                    </div>
                    <div className="progres-line html"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>CSS3</span>
                    </div>
                    <div className="progres-line css"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Javascript</span>
                    </div>
                    <div className="progres-line javascript"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>React</span>
                    </div>
                    <div className="progres-line react"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Angular</span>
                    </div>
                    <div className="progres-line angular"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Ionic</span>
                    </div>
                    <div className="progres-line ionic"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Tailwind</span>
                    </div>
                    <div className="progres-line tailwind"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Bootstrap</span>
                    </div>
                    <div className="progres-line bootstrap"><span></span></div>
                </div>
            </div>
            <div className="card_backend hidden" id="backend">
                <h1 className="title_skill">Backend</h1>
                <div className="bar">
                    <div className="info">
                        <span>Node.js</span>
                    </div>
                    <div className="progres-line nodejs"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Java</span>
                    </div>
                    <div className="progres-line java"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>C#</span>
                    </div>
                    <div className="progres-line cmas"><span></span></div>
                </div>
            </div>
            <div className="card_designer_db_cversion hidden" id="design">
                <h1 className="title_skill">Diseño, Bases de datos y Git</h1>
                <div className="bar">
                    <div className="info">
                        <span>Photoshop</span>
                    </div>
                    <div className="progres-line photoshop"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>MySQL</span>
                    </div>
                    <div className="progres-line mysql"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>SQL Server</span>
                    </div>
                    <div className="progres-line sqlserver"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Git - Github</span>
                    </div>
                    <div className="progres-line git_github"><span></span></div>
                </div>
            </div>
        </div>
    </>
    )

}