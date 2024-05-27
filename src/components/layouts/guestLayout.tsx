"use client"
import React from "react";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col z-50 justify-center align-middle items-center min-h-screen min-w-screen before:bg-noise before:content-[''] sm:before:w-[100%] before:h-full before:block before:absolute before:opacity-20 bg-green-200">
            {children}
        </div>
    )
}

export default GuestLayout;
