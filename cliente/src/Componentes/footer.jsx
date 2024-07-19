import { RedesSociales } from "./redes_sociales";


export function Footer() {
    return (
        <footer id="page-footer" className="mt-96 text-black border-t-4 border-black pt-6 flex flex-row">
            <div id="footer" bis_skin_checked="1" className="flex flex-col " >
                <div className="flex footer-main " bis_skin_checked="1">
                    <div class="container-fluid" bis_skin_checked="1">
                        <div className="flex flex-row w-full" bis_skin_checked="1">
                            <div className="flex p-8 w-1/3" bis_skin_checked="1">
                                <div className="items-center gap-7 flex flex-col " bis_skin_checked="1">
                                    <div class="footer-logo" bis_skin_checked="1">
                                        <a href="https://aulavirtualmoodle.uleam.edu.ec/?redirect=0">
                                            <img className="w-40" src="//aulavirtualmoodle.uleam.edu.ec/pluginfile.php/1/theme_klass/footerlogo/1717190707/logo_ULEAM_2017_horizontal.png" alt="klass" />
                                        </a>
                                    </div>
                                    <p className="">Misión.&nbsp;Formar profesionales competentes y emprendedores desde lo académico, la investigación, y la vinculación, que contribuyan a mejorar la calidad de vida de la sociedad.</p>
                                    <p className="">Visión.&nbsp;Ser un referente nacional e internacional de Institución de Educación Superior que contribuye al desarrollo social, cultural y productivo con profesionales éticos, creativos, cualificados y con sentido de pertinencia.</p>
                                </div>
                            </div>
                            <div className="w-1/3 p-8" bis_skin_checked="1">
                                <div class="contact-info items-start" bis_skin_checked="1">
                                    <h5 class="font-serif font-bold">Contáctanos</h5>
                                    <p>Av. Circunvalación Vía a San Mateo</p>
                                    <p><i class="fa fa-envelope"></i>E-mail <a class="mail-link" href="mailto:incidencias.diit@uleam.edu.ec"> incidencias.diit@uleam.edu.ec</a></p>
                                </div>
                            </div>
                            <div className="w-1/3 col-md-4 flex-1/3 p-8 flex items-start justify-center" bis_skin_checked="1">
                                <div class="social-media" bis_skin_checked="1">
                                    <h5 className="font-bold" >Redes sociales</h5>
                                    <ul className="">
                                        <li className="text-black smedia-01">
                                            <RedesSociales/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-foot" bis_skin_checked="1">
                    <div class="p-4 border-t-4 border-black" bis_skin_checked="1">
                        <p>© Copyright 2024, Todos los derechos reservados Uleam | Plataforma implementada por la Dirección de Informática e Innovación Tecnológica</p>
                        <div class="footer-content-debugging" bis_skin_checked="1">
                            <div class="container" bis_skin_checked="1">

                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-content-popover container" data-region="footer-content-popover" bis_skin_checked="1">

                    <div class="footer-section p-3" bis_skin_checked="1">
                        <div bis_skin_checked="1">Desarrollado por Mi<a href="https://moodle.com"></a></div>
                    </div>

                </div>
            </div>
        </footer>
    )
}