import { Link } from "react-router-dom";

interface SocialV1DynamicProps {
    instagramUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
}

const SocialV1Dynamic = ({ instagramUrl, twitterUrl, linkedinUrl }: SocialV1DynamicProps) => {
    return (
        <>
            {instagramUrl && (
                <li>
                    <Link to={instagramUrl} target='_blank'><i className="fab fa-instagram"></i></Link>
                </li>
            )}
            {twitterUrl && (
                <li>
                    <Link to={twitterUrl} target='_blank'><i className="fab fa-twitter"></i></Link>
                </li>
            )}
            {linkedinUrl && (
                <li>
                    <Link to={linkedinUrl} target='_blank'><i className="fab fa-linkedin"></i></Link>
                </li>
            )}
        </>
    );
};

export default SocialV1Dynamic;