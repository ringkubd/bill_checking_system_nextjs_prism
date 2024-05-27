import {FC, PropsWithChildren} from "react";

interface FormFooterProps extends PropsWithChildren {
    containerClass?: string;
}

const FormFooter : FC<FormFooterProps> = ({children, containerClass}) => {
    return (
        <div className={`flex flex-col sm:flex-row justify-between bg-body-header mt-4 px-4 rounded py-3 ${containerClass}`}>
            {children}
        </div>
    )
}

export default FormFooter;
