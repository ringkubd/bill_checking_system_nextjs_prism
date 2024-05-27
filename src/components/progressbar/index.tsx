import {FC} from "react";
import './style.css';
interface IProgressbarProps {
    label: string;
    value: number;
    labelClass?: string;
}

const ProgressBar : FC<IProgressbarProps> = ({label="Progress", value = 10, labelClass}) => {
    return (
        <div
            className={`flex flex-row space-y-2 items-center space-x-2 justify-center font-bold align-middle justify-items-center`}>
            <div className={`${labelClass}`}>
                <h3>{label}</h3>
            </div>
            <div className="w-full bg-black rounded h-6 dark:bg-black border-white border-2 flex flex-row">
                <div className={`w-[80%] bg-black border-r-2 border-r-white relative rounded  shadow-2xl`}>
                    <div className={`h-[100%] w-[${value}%] shim-olive-drab shadow-2xl`}></div>
                </div>
                <div className={`w-[20%] text-sm`}>
                    <div className={`flex flex-row text-white justify-end items-center text-center w-full`}>
                        <div className={`w-[30%]`}>{value}%</div>
                        <div className={`w-[70%] bg-white text-black`}>Completed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
