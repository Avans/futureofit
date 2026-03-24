import { Link } from "react-router-dom";

interface DataType {
    openSidebar: boolean;
    sidebarClose: () => void;
}

const SidebarV1 = ({ openSidebar, sidebarClose }: DataType) => {

    return (
        <>
            <div id="hidden-bar" className={`hidden-bar ${openSidebar ? "active-hidden-bar" : ""}`} >
                <div className="inner-box">
                    <div className="upper-box">
                        <div className="logo-box">
                            <div className="nav-logo">
                                <Link to="/">
                                    <img src="/images/logo-2.svg" alt="image" />
                                </Link>
                            </div>
                        </div>
                        <div className="close-btn" onClick={sidebarClose}><i className="icon fa fa-times"></i></div>
                    </div>
                    <div className="text-box">
                        <h4 className="title">Avans Hogeschool <br />'s-Hertogenbosch</h4>
                        <div className="text">De Academie voor Techniek en Design (ATD) organiseert jaarlijks het Future of IT evenement. Dit evenement brengt studenten, docenten, onderzoekers en professionals uit de IT-sector samen om kennis te delen, te discussiëren en te netwerken.</div>
                    </div>
                    <ul className="contact-list-one">
                        <li>
                            <i className="icon lnr-icon-phone-handset"></i>
                            <span className="title">Meer info? Monique Putters staat je graag te woord.</span>
                            <div className="text"><a href="tel:+250327101235">+31885256125</a></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-envelope1"></i>
                            <span className="title">E-mail</span>
                            <div className="text"><a href="mailto:mfm.putters@avans.nl">mfm.putters@avans.nl</a></div>
                        </li>
                        <li>
                            <i className="icon lnr-icon-map-marker"></i>
                            <span className="title">Adres</span>
                            <div className="text">Avans Hogeschool <br /> Onderwijsboulevard 215 <br /> 5223 DE 's-Hertogenbosch</div>
                        </li>
                    </ul>
                    <ul className="social-links">
                        {/* <SocialV1 /> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarV1;