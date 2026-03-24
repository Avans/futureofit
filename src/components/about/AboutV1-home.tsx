import AnimatedText from "../animation/AnimatedText";

const AboutV1 = () => {
    return (
        <>
            <section className="about-section">
                <div className="icon-one bounce-y" />
                <div className="icon-two bounce-y" />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="image-box" data-aos="fade-up">
                            <div className="image-outer">
                                <figure className="image overlay-anim">
                                    <img src="/images/header_inspirational.png" alt="Image" />
                                </figure>
                                <div className="icon-nineteen" />
                                <div className="icon-twenty" />
                            </div>
                            <div className="speaker-box">

                                <div className="count">10+</div>
                                <div className="text">Inspirerende <br /> Sprekers</div>
                            </div>
                        </div>
                    </div>
                    <div className="outer-box two">
                        <div className="image-box">
                            <div className="image-outer">
                                <figure className="image overlay-anim">
                                    <img src="/images/over/stefan.jpg" alt="Image" />
                                </figure>
                                <div className="icon-twentyfour" />
                            </div>
                        </div>
                        <div className="content-box" data-aos="fade-right" data-aos-delay="200">
                            <div className="sec-title">
                                <span className="sub-title">Secure the Future</span>
                                <AnimatedText>
                                    Cybersecurity is the future.
                                </AnimatedText>
                                <div className="text text-anim">
                                    Elke regel code die je tikt, kan zomaar de volgende vulnerability wezen.<br />
                                    Tijdens deze editie duiken we in de nieuwste cybersecurity hacks en tricks.<br />
                                    Ontdek hoe jij systemen waterdicht maakt en aanvallers een stap voor blijft.<br />
                                    Level up je IT-skills en word dé security expert die elk bedrijf zoekt!
                                </div>
                            </div>
                            {/* <div className="btn-box">
                                <Link to="/pricing" className="theme-btn btn-style-one icon-btn bg-yellow">
                                    <i className="icon flaticon-tickets"></i>
                                    <span className="btn-title">Buy Ticket</span>
                                </Link>
                                <Link to="/contact" className="theme-btn btn-style-one icon-btn">
                                    <i className="icon flaticon-placeholder"></i>
                                    <span className="btn-title">Location</span>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="outer-box show-xl">
                        <div className="image-box" data-aos="fade-up">
                            <figure className="image">
                                <img src="/images/resource/about1-1.png" alt="Image" />
                            </figure>
                            <div className="speaker-box">
                                <i className="icon flaticon-mic" />
                                <div className="count">15</div>
                                <div className="text">Iconic <br /> Speakers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutV1;