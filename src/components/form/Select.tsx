import React, {ChangeEvent} from "react";
import {
    IoCaretDownCircleOutline,
    IoCaretUpCircleOutline,
} from "react-icons/io5";
export interface OptionsType {
    label: string;
    value: string|number;
}

export interface SelectProps {
    id?: string,
    name: string,
    label: string,
    value?: string|number|object,
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    options: Array<OptionsType>,
    onSelect?: (options: OptionsType | {}) => void,
}
const Select = ({id,
                    name,
                    label,
                    value,
                    placeholder="Select an option",
                    className,
                    required=false,
                    containerClassName,
                    labelClassName,
                    options,
                    onSelect,
                    ...props}:SelectProps) => {
    const [search, setSearch] = React.useState('');
    const [focused, setFocused] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [selected, setSelected] = React.useState<OptionsType | null>(null);
    const selectId = `select_${id}`;
    const onChange = (e: { target: { value: any; }; }) => {
        if (onSelect && e.target.value) {
            onSelect(options.filter((option) => option.value == e.target.value)[0]);
        }
        if (!e.target.value && onSelect) {
            onSelect({});
        }
    }
    const filteredOptions = options.filter((option) => {
        return !search || option.label.toLowerCase().indexOf(search) >= 0;
    }).slice(0,50);

    return (
        <div  className={`flex sm:flex-col flex-row space-y-2 sm:space-x-0 space-x-2 ${containerClassName} relative`}>
            <label htmlFor={id}  className={`font-bold text-button ${labelClassName}`}>
                {label} {required ? <sup className={`text-red-600`}>*</sup> : null}
            </label>
            <div className={`relative`}>
                <div className={`relative`}>
                    <input id={`id`}
                           className={`p-2  border-b-2 border-gray-600 focus:border-green-500 focus:border-b-2  focus:outline-none shadow-2xl rounded focus:font-bold focus:italic static ${className}`}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => {
                               setSearch(e.target.value.toLowerCase());
                           }}
                           onFocus={() => {
                               setFocused(true);
                               setSearch("")
                           }}
                           onBlur={() => {
                               setFocused(false);
                           }}
                           value={search ?? selected?.label}
                           ref={inputRef}
                           autoComplete="off"
                           placeholder={placeholder}
                    />
                    {focused ? <IoCaretUpCircleOutline className={`absolute top-[30%] right-1 z-50`}/> : <IoCaretDownCircleOutline className={`absolute top-[30%] right-1 z-50`}/>}
                </div>
                <ol className={`flex sm:flex-col mt-1 ${!focused && 'invisible'} shadow-2xl z-50 min-w-max fixed bg-gray-50 rounded transition-all delay-75 duration-150 ease-in-out`}
                    style={{width: `${inputRef.current?.offsetWidth}px`}}>
                    <li className={`py-0.5 bg-gray-200 rounded mb-0.5 shadow px-2 text-gray-500 cursor-none disabled`}>{placeholder}</li>
                    {
                        filteredOptions.map((option, index) => <li
                            className={`py-0.5 bg-gray-50 rounded mb-0.5 shadow px-2 cursor-pointer hover:bg-gray-400`}
                            key={index}
                            onClick={(e) => {
                                const target = e.target as HTMLInputElement;
                                setSearch(target.innerText)
                                setSelected(option)
                                if (onSelect) {
                                    onSelect(option)
                                }
                            }}>
                            {option.label}
                        </li>)
                    }
                </ol>
            </div>
        </div>
    )
}
export default Select;
