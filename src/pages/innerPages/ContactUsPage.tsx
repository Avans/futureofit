import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ContactPageContent from "../../components/contact/ContactPageContent";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV3 from "../../components/header/HeaderV3";
import PageSocial from "../../components/utilities/PageSocial";

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Konfer - Contact Us</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV3 parentMenu="about" />
                <BreadCrumb title="Contact Us" subtitle="contact us" />
                <ContactPageContent />
                <FooterV3 />
                <PageSocial />
            </div>
        </>
    );
};

export default ContactUsPage;