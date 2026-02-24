import SocialV1Dynamic from "../social/SocialV1Dynamic";

interface DataType {
    id: number;
    name: string;
    designation: string;
    thumb: string;
    delay: number;
    instagramUrl?: string;
    twitterUrl?: string;
    linkedinUrl?: string;
}

const SingleSpeakerV1 = ({ speaker }: { speaker: DataType }) => {
    const { thumb, name, designation, instagramUrl, twitterUrl, linkedinUrl } = speaker;

    const hasSocialLinks = !!(instagramUrl || twitterUrl || linkedinUrl);

    return (
        <>
            <div className="image-box">
                <figure className="image">
                    {/* <Link to={`/speaker-single/${id}`}> */}
                        <img src={`/images/resource/${thumb}`} alt="image" />
                        <img src={`/images/resource/${thumb}`} alt="image" />
                    {/* </Link> */}
                </figure>
                {hasSocialLinks && (
                    <>
                        <div className="icon-box">
                            <span className="icon share-icon fa fa-share-alt" />
                        </div>
                        <div className="social-links">
                            <SocialV1Dynamic
                                instagramUrl={instagramUrl}
                                twitterUrl={twitterUrl}
                                linkedinUrl={linkedinUrl}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="info-box">
                <h4 className="name">
                    {/* <Link to={`/speaker-single/${id}`}>{name}</Link> */}
                    {name}
                </h4>
                <span className="designation">{designation}</span>
            </div>
        </>
    );
};

export default SingleSpeakerV1;