import { Link } from "react-router-dom";

const SocialV1 = () => {
    return (
        <>
            <li>
                <Link to="http://facebook.com" target='_blank'><i className="fab fa-instagram"></i></Link>
            </li>
            <li>
                <Link to="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
            </li>
            <li>
                <Link to="http://twitter.com" target='_blank'><i className="fab fa-tiktok"></i></Link>
            </li>
          
        </>
    );
};

export default SocialV1;