import {FC, PropsWithChildren} from "react";

interface FromBodyProps extends PropsWithChildren {
    containerClass?: string;
}

const FormBody : FC<FromBodyProps> = ({children, containerClass}) => {
    return (
        <div className={`flex flex-col justify-center items-center rounded w-full ${containerClass}`}>
            {children}
        </div>
    )
}

export default FormBody;
