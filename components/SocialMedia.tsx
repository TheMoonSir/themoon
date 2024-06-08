import Link from "next/link";

import { FaGithub, FaTiktok  } from "react-icons/fa";

const Media = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaTiktok />, path: "" }
]

const Social = ({containerStyles, iconStyles} : any) => {
    return <div className={containerStyles}>
        {Media.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>;
};

export default Social;