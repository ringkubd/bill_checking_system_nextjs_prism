import React, {FC, PropsWithChildren} from "react";
import {IoAppsOutline, IoClose} from "react-icons/io5";

interface Props extends PropsWithChildren {
    title: string;
    titleClass?: string;
    titleContainerClass?: string;
    containerClass?: string;
    closeOnClick?: () => void;
    closeIconClass?: string;
}

export const FormHeader: FC<Props> = ({children, title,titleClass, closeOnClick, containerClass, titleContainerClass, closeIconClass}) => {

    return (
        <div
            className={`flex flex-row justify-between items-center border-b-2 mt-2 bg-header py-2 px-3 rounded ${containerClass}`}>
            <div className={`flex flex-row justify-center space-x-2 items-center ${titleContainerClass}`}>
                <IoAppsOutline/>
                <h2 className={`font-bold text-gray-700 ${titleClass}`}>{title}</h2>
            </div>
            <div>
                <IoClose onClick={closeOnClick} className={`text-red-500 font-bold text-2xl cursor-pointer ${closeIconClass}`}/>
            </div>
        </div>
    )
}
