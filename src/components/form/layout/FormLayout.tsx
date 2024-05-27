import React, {FC, PropsWithChildren} from "react";
import {FormHeader} from "@/components/form/layout/FormHeader";
import FormBody from "@/components/form/layout/FromBody";
import FormFooter from "@/components/form/layout/FormFooter";

interface Props extends PropsWithChildren{
    containerClass?: string;
}

const FormLayoutComponent: FC<Props> = ({children, containerClass}) => {
    return (
        <div className={`bg-white shadow-2xl p-4 z-50 w-full m-4 sm:m-0 md:w-1/2 rounded ${containerClass}`}>
            {children}
        </div>
    )
}

FormLayoutComponent.displayName = 'FormLayout';
FormHeader.displayName = 'FormLayout.Header';
export const FormLayout = Object.assign(FormLayoutComponent, {
    Header: FormHeader,
    Body: FormBody,
    Footer: FormFooter,
});
