import React, {ComponentProps, FC} from "react";

interface CheckboxInputProps {
    label: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    id: string;
    name: string;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    type?: "checkbox";
    error?: string;
    errorMessageClassName?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    labelFirst?: false;
}

const Checkbox: FC<ComponentProps<'input'> & CheckboxInputProps> = ({
                                                                        label,
                                                                        labelFirst,
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
            {
                labelFirst ? (
                    <label htmlFor={id} className={`font-bold ${labelClassName}`}>
                        {label} {required ? <sup className={`text-red-600`}>*</sup> : null}
                    </label>
                ) : null
            }

            <input
                className={`p-2 border-1 border-gray-300 focus:border-gray-400 focus:border-2 shadow-2xl rounded-2xl ${inputClassName}`}
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                {...props}
            />
            {
                !labelFirst ? (
                    <label htmlFor={id} className={`font-bold ${labelClassName}`}>
                        {label} {required ? <sup className={`text-red-600`}>*</sup> : null}
                    </label>
                ) : null
            }
            {error && <span className={`text-red-600 ${errorMessageClassName}`}>{ error}</span>}
        </div>
    )
}

export default Checkbox;
