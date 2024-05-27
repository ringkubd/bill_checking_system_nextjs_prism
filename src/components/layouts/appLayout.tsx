import React, {ReactNode} from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div
            className="flex flex-col z-50 min-h-screen  min-w-screen before:bg-noise before:content-[''] sm:before:w-[100%] before:h-[100%] before:block before:absolute before:opacity-20 bg-green-200">
            {children}
        </div>
    )
}

export default AppLayout;
