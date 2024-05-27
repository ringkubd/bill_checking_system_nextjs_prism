import React, {ComponentProps, FC} from "react";

interface TextInputProps {
    label: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    id: string;
    name: string;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    type?: "text" | "password" | "email" | "url" | "number" | "date" | "checkbox";
    error?: string;
    errorMessageClassName?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const TextInput: FC<ComponentProps<'input'> & TextInputProps> = ({
                       label,
                       className,
                       required,
                       id,
                       labelClassName,
                       containerClassName,
                       inputClassName="",
                       error,
                       name,
                       errorMessageClassName,
                       onChange,
                       type = "text",
                       onBlur,
                       ...props
                   }) => {

    return (
        <div
            className={`flex sm:flex-col flex-row space-y-2 sm:space-x-0 space-x-2 ${containerClassName}`}>
            <label htmlFor={id} className={`font-bold text-button ${labelClassName}`}>
                {label} {required ? <sup className={`text-red-600`}>*</sup> : null}
            </label>
            <input
                className={`p-2 border-b-2 border-gray-600 focus:border-green-500 focus:border-b-2 focus:outline-none  shadow-2xl rounded-2xl focus:font-bold focus:italic ${inputClassName}`}
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            {error && <span className={`text-red-600 ${errorMessageClassName}`}>{ error}</span>}
        </div>
    )
}

export default TextInput;
