import {FC} from "react";
import Link from "next/link";

type menuObject = {
    id?: number,
    title: string,
    link: string,
    target?: string,
    onPress?: () => void,
}

interface MenuProps {
    orientation?: "horizontal" | "vertical";
    links:  Array<menuObject>,
    onPress?: () => void,
}

const Menu: FC<MenuProps> = ({orientation= "vertical", links}) => {
    const orientationClasses = orientation === "vertical" ? `flex-col` : `flex-row`;
    return (
        <div className={`flex ${orientationClasses} min-h-max space-y-2 w-full z-50`}>
            {
                links.map((link, index) => (<Link
                    className={`py-2 px-2 bg-body-header text-gray-200
                     font-bold mx-2 rounded text-center hover:border-2 
                     hover:bg-gradient-to-r from-[##6BBCA9] to-[#B4E4C4]
                     focus:bg-gradient-to-l 
                     shadow-xl
                     hover:shadow-gradient
                     transition 
                     ease-linear
                     duration-500
                     delay-150
                     cursor-pointer 
                     hover:scale-95
                     hover:-translate-x-1
                      `}
                    href={link.link}
                    key={index}
                    onClick={link.onPress}

                    title={link.title}>
                    {link.title}
                </Link>))
            }
        </div>
    )
}

export default Menu;
