import React, {ComponentProps, FC, FormEvent, MouseEvent} from "react";
import {IoReload} from "react-icons/io5";

interface ButtonProps {
    label: string;
    onPress?: (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    containerClassName?: string;
    isProgressing?: boolean;
    iconClassName?: string;
    icon?: React.ReactNode;
}

export const Submit: FC<ComponentProps<'button'> & ButtonProps> = ({label, onPress, className, containerClassName, isProgressing, iconClassName, icon}) => {
    return (
        <div
            className={`flex sm:flex-col flex-row space-y-2 sm:space-x-0 space-x-2 justify-items-end w-full ${containerClassName}`}>
            <button
                type='submit'
                className={`flex flex-row justify-center space-x-2 align-middle justify-items-center items-center px-4 py-2 bg-green-500 rounded-lg active:bg-green-400 shadow active:shadow-2xl ${className}`}
                disabled={isProgressing}
                onClick={onPress}
            >
                {isProgressing ? icon ? icon : <IoReload className={`text-red-600 animate-spin ${iconClassName}`}/> : null}
                <span className={`uppercase`}>{label}</span>
            </button>
        </div>
    )
}
