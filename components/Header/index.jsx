import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Header(){
    const [state, setState] = useState(false)//{ clicked: false }

    const handleClick = () => {
        setState({ clicked: !state.clicked })
        if(state.clicked){
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.add('show-menu')
        }else{
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }

    }

    return(
        <header className="header" id="header">
            <nav className="nav container grid grid-cols-3">
                <a href="#" className="nav_logo z-[1] ml-6">Mario</a>
                <div className="nav_menu ml-auto " id="nav-menu">
                    <ul className={state.clicked ? "nav_list md:grid md:grid-cols-6" : "nav_list grid"}>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'home']}/> 
                                    <div className="nav_name">
                                        Inicio
                                    </div>
                                </i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'user']}/>
                                    <div className="nav_name">
                                        Acerca
                                    </div>
                                </i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'file-alt']}/>
                                    <div className="nav_name">
                                        Habilidades
                                    </div>
                                </i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'briefcase']}/>
                                    <div className="nav_name">
                                        Servicios
                                    </div>
                                </i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'project-diagram']}/>
                                    <div className="nav_name">
                                        Portfolio
                                    </div>
                                </i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#" className="nav_link" onClick={handleClick}>
                                <i className="nav_icon">
                                    <FontAwesomeIcon icon={['fas', 'envelope']}/>
                                    <div className="nav_name">
                                        Contacto
                                    </div>
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav_btns">
                    <div className="nav_hamburguer nav_toggle mmd:mr-8" id="nav_hamburguer" onClick={handleClick}>
                        <li className="nav_close md:hidden" id="nav-close">
                            <FontAwesomeIcon icon={state.clicked ? ['fas', 'list'] : ['fas', 'times']}/>
                        </li>
                    </div>
                </div>

            </nav>
        </header>
    )
}