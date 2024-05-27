import type {FC, ComponentProps} from "react";

interface ListItemProps extends ComponentProps<"li">{
    className?: string;
    text: string|number;
}

export const ListItem: FC<ListItemProps> = ({className="", children}) => {
    return (
        <li className={`!py-0 z-50 rounded w-full px-2 shadow hover:bg-amber-200 bg-layout-secondary mb-0.5 cursor-pointer static ${className}`}>
            {children}
        </li>
    )
}
export default ListItem;
