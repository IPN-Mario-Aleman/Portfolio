import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function About(){
    return (
        <section className="about" id="about">
            <h2 className="section-title">Acerca de mí</h2>
            <span className="section_about_sub">Introducción</span>
            
            <div className="about_container grid">
                <img src="perfil.jpg" alt="profile_picture" className="about_img" />

                <div className="about_data">
                    <p className="description_data">Hola, mi nombre es Mario, soy fullstack web developer Jr. Me gusta mucho la programación y los videojuegos, entre mis pasatiempos me dedico a leer artículos de programación, ver series en netflix, jugar videojuegos, entre muchas cosas mas. <br></br> <br></br> Me encantaría formar parte de algúna apliación ya sea web o de algún otro estilo, que ayude a cambiár el múndo o mejorarlo. Cada día es un buen momento para aprender algo nuevo.</p>

                    <div className="info_data">
                        <div>
                            <span className="about_info_title"> 01+ </span>
                            <span className="about_info_name">Años de <br/> experiencia</span>
                        </div>
                        <div>
                            <span className="about_info_title"> 03+ </span>
                            <span className="about_info_name">Proyectos <br/> realizados</span>
                        </div>
                        <div>
                            <span className="about_info_title"> 00+ </span>
                            <span className="about_info_name">No. de compañias <br/> trabajados</span>
                        </div>
                    </div>

                    <div className="about_button">
                        <a download="" href="Mario_AlemanCV.pdf" className="button button-flex">
                            Descargar CV <FontAwesomeIcon icon={['fas', 'file-download']}/>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}