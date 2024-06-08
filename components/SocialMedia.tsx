import Link from "next/link";

import { FaGithub, FaTiktok  } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";

const Media = [
    { icon: <FaGithub />, path: "https://github.com/TheMoonSir" },
    { icon: <FaTiktok />, path: "https://www.tiktok.com/@._xthemoon" },
    { icon: <SiRoblox />, path: "https://www.roblox.com/users/3258319550/profile" }
]

const Social = ({containerStyles, iconStyles} : any) => {
    return <div className={containerStyles}>
        {Media.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>;
};

export default Social;