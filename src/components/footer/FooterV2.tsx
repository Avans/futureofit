import { Link } from "react-router-dom";
import SocialV1 from "../social/SocialV1";
import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const FooterV2 = () => {

    return (
        <>
            <footer className="main-footer footer-style-two">
                <div className="bg bg-pattern-4" />
                <div className="shape-eighteen" />
                <div className="icon-twelve" />
                {/* <div className="icon-thirteen" /> */}

                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">
                            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget about-widget">
                                    <div className="widget-content">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src="/images/logo_fit_zwart.svg" alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="text">Een jaarlijks evenement over de toekomst van de IT voor studenten die zich richten op de IT-sector. Initiatief van Avans ICT, 's Hertogenbosch.<br/>Aanmelden als bedrijf / spreker voor een volgende editie?<br></br></div>
                                        <div className="email-box">
                                            <a href="mailto:mfm.putters@avans.nl" className="email">E-mail naar Monique Putters</a>
                                        </div>
                                        <ul className="social-icon-two light">
                                            <SocialV1 />
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Quick Links</h4>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Terms</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-arrow-right" />
                                                <Link to="/about">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">
                                    <h4 className="widget-title">Adres</h4>
                                    <div className="widget-content">
                                        {/* <div className="text">Subscribe to our newsletter & keep up with all the latest events.</div> */}
                                        <div className="text">Onderwijsboulevard 215,<br /> 5223 DE, 's Hertogenbosch</div>
                                        {/* <div className="newsletter-form">
                                            <form onSubmit={handleForm}>
                                                <div className="form-group">
                                                    <input type="email" name="email" className="email" autoComplete="off" placeholder="Subscribe Email" required />
                                                    <button type="submit" className="button">
                                                        <i className="flaticon-mail" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget post-widget">
                                    {/* <h4 className="widget-title">Latest News</h4>
                                    <div className="widget-content">
                                        {blogV1Data.slice(0, 2).map(blog =>
                                            <FooterRecentPost blog={blog} key={blog.id} />
                                        )}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="copyright-text">
                                &copy; Copyright {(new Date().getFullYear())} Alle rechten voorbehouden aan
                                <Link to="https://avans.nl" target='_blank'> Avans University of Applied Sciences</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;