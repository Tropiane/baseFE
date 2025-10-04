import {IoLogoInstagram, IoLogoTiktok, IoLogoFacebook } from "react-icons/io5";

function SocialMedia({data}: {data: object}) {
    const socialMediaIcons = [
        { key: 'instagram', icon: <IoLogoInstagram /> },
        { key: 'tiktok', icon: <IoLogoTiktok /> },
        { key: 'facebook', icon: <IoLogoFacebook /> }
    ];

    const findIcon = (key: string) => {
        const icon = socialMediaIcons.find(icon => icon.key === key);
        return icon ? icon.icon : null;
    };
    return (
        <div className="socialMedia">
        <ul className="socialMedia__list">
            {Object.entries(data).map(([key, value]) => (
            <li key={key}>
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                    {findIcon(value.key)}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default SocialMedia;