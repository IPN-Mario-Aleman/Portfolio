import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Portfolio(){
    return (
        <section className="portfolio section" id="porfolio">
            <h2 className="section_title">
                Portfolio
            </h2>
            <span className="section_subtitle">
                Trabajos mas recientes
            </span>

            <div className="portfolio_container">
                <div>
                    {/* Primer proyecto */}
                    <div className="portfolio_content grid">
                        <img src="proyect1.png" alt="" className="portfolio_img"/>
                        <div className="portfolio_data">
                            <h3 className="proyect_title">Proyecto Buzzy</h3>
                            <p className="description">Este proyecto esta desarrllado con express utilizando pug como motor de plantilla para codificar el html. Se trata de un e-commerce dirigido para personas que quieran trabajar de lo que sepan hacer.</p>
                            <a href="" className="button button_flex button_small portfolio_button">
                                <p className="demo">Demo  <FontAwesomeIcon icon={['fas', 'arrow-right']}/></p>
                               
                            </a>
                        </div>
                    </div>
                    {/* Segundo proyecto */}
                    <div className="portfolio_content grid">
                        <img src="proyect1.png" alt="" className="portfolio_img"/>
                        <div className="portfolio_data">
                            <h3 className="proyect_title">Proyecto Buzzy</h3>
                            <p className="description">Este proyecto esta desarrllado con express utilizando pug como motor de plantilla para codificar el html. Se trata de un e-commerce dirigido para personas que quieran trabajar de lo que sepan hacer.</p>
                            <a href="" className="button button_flex button_small portfolio_button">
                                <p className="demo">Demo <FontAwesomeIcon icon={['fas', 'arrow-right']}/></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}