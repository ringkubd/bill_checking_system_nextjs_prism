import React from "react";
import {IoReload} from "react-icons/io5";

interface GreenProps {
    text: string;
    onPress?: React.MouseEventHandler<HTMLButtonElement>;
    isLoading?: boolean
    type?: "button" | "submit";
    containerClassName?: string;
    className?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
}
const GreenButton = ({text, onPress, isLoading, type, className, containerClassName, leftIcon, rightIcon, onSubmit}: GreenProps) => {
    return (
        <div
            className={`flex sm:flex-col flex-row space-y-2 sm:space-x-0 space-x-2 justify-items-end w-full ${containerClassName}`}>
            <button
                type={type}
                onClick={onPress}
                className={`flex flex-row font-bold justify-center space-x-2 align-middle justify-items-center items-center px-4 py-2 bg-[#117474] rounded-lg active:bg-green-400 shadow active:shadow-2xl ${className}`}
                disabled={isLoading}
                onSubmit={onSubmit}
            >
                {isLoading ? <IoReload className={`animate-spin`}/> : null}
                {leftIcon && leftIcon}
                <span className={`uppercase`}>{text}</span>
                {rightIcon && rightIcon}
            </button>
        </div>
    )
}

export default GreenButton;
