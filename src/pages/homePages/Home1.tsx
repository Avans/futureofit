import { Helmet } from "react-helmet-async";
import AboutV1Home from "../../components/about/AboutV1-home";
import BannerV1 from "../../components/banner/BannerV1";
import ClientV1 from "../../components/clients/ClientV1";
import FeatureV3 from "../../components/feature/FeatureV3";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV1 from "../../components/gallery/GalleryV1";
import HeaderV3 from "../../components/header/HeaderV3";
import MarqueeV1 from "../../components/marquee/MarqueeV1";
import ScheduleV1 from "../../components/schedule/ScheduleV1";
import SpeakerV1 from "../../components/speakers/SpeakerV1";

const Home1 = () => {
  return (
    <>
      <Helmet>
        <title>Future of IT</title>
      </Helmet>

      <div className="page-wrapper">
        <HeaderV3 parentMenu='home' />
        <BannerV1 />
        <AboutV1Home />
        <MarqueeV1 />
        <FeatureV3 />
        <SpeakerV1 />
        <ScheduleV1 />
        <GalleryV1 />
        {/* <ClientV1 sectionClass="pt-0" /> */}
        <FooterV2 />
      </div>
    </>
  );
};

export default Home1;
