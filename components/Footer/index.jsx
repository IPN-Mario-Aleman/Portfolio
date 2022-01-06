import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer(){
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div className="grid grid-cols-2 msm:grid-cols-1">
                <div className="inspired_with">
                    <h1 className="footer_title">Portfolio</h1>
                    <h2 className="footer_subtitle">Creado con Next.js</h2>
                    <p className="footer_description">Este sitio web esta desarrollado con React, HTML5, CSS3, Tailwind, Nodejs, Con el framework Next.js de Vercel. Este proyecto esta inspirado por Midudev, Bedimcode, Online Tutorials. </p>
                </div>

                <div className="social_n_nav"> 
                    <ul className="social_icon">
                        <li>
                            <a className="links_social"  href="https://wa.me/525525114769" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'whatsapp']}/> </a>
                        </li>
                        <li>
                            <a className="links_social"  href="https://github.com/IPN-Mario-Aleman" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'github']}/> </a>
                        </li>
                        <li>
                            <a className="links_social" href="https://www.linkedin.com/in/mario-alberto-aleman-fernandez-382a12228/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'linkedin']}/> </a>
                        </li>
                    </ul>

                    <ul className="footer_menu">
                        <i className="nav_icon_footer">
                            <a href="#home" className="url_footer">
                                <FontAwesomeIcon icon={['fas', 'home']}/> 
                                Inicio
                            </a>
                        </i>
                        <i className="nav_icon_footer">
                            <a href="#about">
                                <FontAwesomeIcon icon={['fas', 'user']}/>
                                Acerca de
                            </a>
                        </i>
                        <i className="nav_icon_footer">
                            <a href="">
                                <FontAwesomeIcon icon={['fas', 'file-alt']}/> 
                                Habilidades
                            </a>
                        </i>
                        <i className="nav_icon_footer">
                            <a href="">
                                <FontAwesomeIcon icon={['fas', 'briefcase']}/> 
                                Servicios
                            </a>
                        </i>
                        <i className="nav_icon_footer">
                            <a href="">
                                <FontAwesomeIcon icon={['fas', 'project-diagram']}/> 
                                Portfolio
                            </a>
                        </i>
                        <i className="nav_icon_footer">
                            <a href="">
                                <FontAwesomeIcon icon={['fas', 'envelope']}/> 
                                Contacto
                            </a>
                        </i>
                    </ul>
                </div>
            </div>
            <div className="right_reserved">
                    <p>Creado por Mario Alemán, 2022</p>
            </div>
        </footer>
    )

}