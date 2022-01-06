import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function HomeScreen(){
    return(
        <section className="home" id="home">
            <div className="home_container">
                <div className="home_content">
                    <div className="bio-info">
                        <div className="home_social ml-6">
                            <span></span>
                            <a href="https://wa.me/525525114769" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'whatsapp']}/> </a>
                            <a href="https://github.com/IPN-Mario-Aleman" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'github']}/> </a>
                            <a href="https://www.linkedin.com/in/mario-alberto-aleman-fernandez-382a12228/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'linkedin']}/> </a>
                        </div>
                        <div className="home_data ml-6">
                            <span className="home_welcome">Bienvenido a mi Portfolio. <br></br></span>
                            <span className="home_subtitle"> Soy Mario Alemán, fullstack web developer.<br></br></span>

                            <span className="home_description">Recién egresado de UPIICSA (Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas), IPN (Instituto Politécnico Nacional), apasionado en el desarrollo Web.</span>
                            <br/><br/><br/>
                            <div className="contact-btn w-[100%]">
                                <a href="#contact" className="button button--flex">
                                    Contactame <FontAwesomeIcon icon={['fas', 'paper-plane']}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="home_img">
                        <div className="blob">
                            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" className="blob-color"></stop>
                                    <stop offset="100%" className="blob-color1"></stop>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#gradient)">
                                    <animate attributeName="d"
                                        dur='8500ms'
                                        repeatCount='indefinite'

                                        values="M406.5,315Q453,380,388,394.5Q323,409,279,381.5Q235,354,164.5,392Q94,430,76.5,368Q59,306,72,254Q85,202,89.5,136Q94,70,155.5,46.5Q217,23,259.5,79.5Q302,136,361.5,138Q421,140,390.5,195Q360,250,406.5,315Z;

                                        M400,288.5Q371,327,353,382Q335,437,282,417Q229,397,171.5,402Q114,407,81.5,358Q49,309,53.5,251.5Q58,194,110.5,172Q163,150,193,107.5Q223,65,272.5,78.5Q322,92,390,104Q458,116,443.5,183Q429,250,400,288.5Z;

                                        M386.5,294Q387,338,363,391.5Q339,445,283,428.5Q227,412,160,421.5Q93,431,60,373Q27,315,89.5,268Q152,221,120,142Q88,63,154.5,55Q221,47,279.5,52.5Q338,58,384,96Q430,134,408,192Q386,250,386.5,294Z;
                                        
                                        M445,298Q399,346,364,384Q329,422,281,396.5Q233,371,190,370Q147,369,130.5,329.5Q114,290,95,244.5Q76,199,88,138Q100,77,161,64.5Q222,52,273,70Q324,88,376.5,111.5Q429,135,460,192.5Q491,250,445,298Z;

                                        M428.5,310Q437,370,367,361.5Q297,353,263,375.5Q229,398,194.5,375.5Q160,353,131,323Q102,293,126,257Q150,221,158.5,187.5Q167,154,200.5,146Q234,138,294,80.5Q354,23,400.5,73Q447,123,433.5,186.5Q420,250,428.5,310Z;

                                        M407,313Q446,376,384.5,393Q323,410,271,438.5Q219,467,159.5,445Q100,423,126,351Q152,279,120,241Q88,203,131.5,183Q175,163,202,132.5Q229,102,275.5,97.5Q322,93,383,109.5Q444,126,406,188Q368,250,407,313Z;

                                        M467.5,312Q444,374,374,371Q304,368,260,428.5Q216,489,182,428.5Q148,368,109.5,335Q71,302,85.5,254Q100,206,128,174Q156,142,193,125.5Q230,109,267,120Q304,131,358,138.5Q412,146,451.5,198Q491,250,467.5,312Z;

                                        M406.5,315Q453,380,388,394.5Q323,409,279,381.5Q235,354,164.5,392Q94,430,76.5,368Q59,306,72,254Q85,202,89.5,136Q94,70,155.5,46.5Q217,23,259.5,79.5Q302,136,361.5,138Q421,140,390.5,195Q360,250,406.5,315Z;"
                                    >
                                    </animate>
                                </path>
                            </svg>
                        </div>
                        {/* to add glow effect */}
                        <div className="blob">
                            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" className="blob-color"></stop>
                                    <stop offset="100%" className="blob-color1"></stop>
                                    </linearGradient>
                                </defs>
                                <path fill="url(#gradient)">
                                    <animate attributeName="d"
                                        dur='8500ms'
                                        repeatCount='indefinite'

                                        values="M406.5,315Q453,380,388,394.5Q323,409,279,381.5Q235,354,164.5,392Q94,430,76.5,368Q59,306,72,254Q85,202,89.5,136Q94,70,155.5,46.5Q217,23,259.5,79.5Q302,136,361.5,138Q421,140,390.5,195Q360,250,406.5,315Z;

                                        M400,288.5Q371,327,353,382Q335,437,282,417Q229,397,171.5,402Q114,407,81.5,358Q49,309,53.5,251.5Q58,194,110.5,172Q163,150,193,107.5Q223,65,272.5,78.5Q322,92,390,104Q458,116,443.5,183Q429,250,400,288.5Z;

                                        M386.5,294Q387,338,363,391.5Q339,445,283,428.5Q227,412,160,421.5Q93,431,60,373Q27,315,89.5,268Q152,221,120,142Q88,63,154.5,55Q221,47,279.5,52.5Q338,58,384,96Q430,134,408,192Q386,250,386.5,294Z;
                                        
                                        M445,298Q399,346,364,384Q329,422,281,396.5Q233,371,190,370Q147,369,130.5,329.5Q114,290,95,244.5Q76,199,88,138Q100,77,161,64.5Q222,52,273,70Q324,88,376.5,111.5Q429,135,460,192.5Q491,250,445,298Z;

                                        M428.5,310Q437,370,367,361.5Q297,353,263,375.5Q229,398,194.5,375.5Q160,353,131,323Q102,293,126,257Q150,221,158.5,187.5Q167,154,200.5,146Q234,138,294,80.5Q354,23,400.5,73Q447,123,433.5,186.5Q420,250,428.5,310Z;

                                        M407,313Q446,376,384.5,393Q323,410,271,438.5Q219,467,159.5,445Q100,423,126,351Q152,279,120,241Q88,203,131.5,183Q175,163,202,132.5Q229,102,275.5,97.5Q322,93,383,109.5Q444,126,406,188Q368,250,407,313Z;

                                        M467.5,312Q444,374,374,371Q304,368,260,428.5Q216,489,182,428.5Q148,368,109.5,335Q71,302,85.5,254Q100,206,128,174Q156,142,193,125.5Q230,109,267,120Q304,131,358,138.5Q412,146,451.5,198Q491,250,467.5,312Z;

                                        M406.5,315Q453,380,388,394.5Q323,409,279,381.5Q235,354,164.5,392Q94,430,76.5,368Q59,306,72,254Q85,202,89.5,136Q94,70,155.5,46.5Q217,23,259.5,79.5Q302,136,361.5,138Q421,140,390.5,195Q360,250,406.5,315Z;"
                                    >

                                    </animate>
                                
                                </path>
                            </svg>
                        </div>
                        <img className="home_blob-img z-[1]" src="/profile1.png" alt="profile-picture"/>
                    </div>  
                </div>
                <div className="scroll-down">
                    <i className="scroll-down-mouse">
                        <FontAwesomeIcon icon={['fas', 'mouse']}/>
                    </i>
                    <span className="scroll-down-name">Scroll down</span>
                    <i className="scroll-down-arrow">
                        <FontAwesomeIcon icon={['fas', 'arrow-down']}/>
                    </i>
                </div>
            </div>
        </section>
    )
}