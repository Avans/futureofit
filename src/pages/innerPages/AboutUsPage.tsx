import { Helmet } from "react-helmet-async";
import AboutV1 from "../../components/about/AboutV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CountdownV1 from "../../components/counter/CountdownV1";
import FooterV2 from "../../components/footer/FooterV2";
import HeaderV3 from "../../components/header/HeaderV3";
import MarqueeV1 from "../../components/marquee/MarqueeV1";


const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Over Future of IT</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV3 parentMenu="about" />
                <BreadCrumb title="Future of IT" subtitle="Future of IT" />
                <AboutV1 />
                <MarqueeV1 />
                <CountdownV1 />
                {/* <FeatureV2 />
                <FactV1 /> */}
                <FooterV2 />
              
            </div>
        </>
    );
};

export default AboutUsPage;