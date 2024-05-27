import React, {ComponentProps, FC} from "react";

export interface ListHeaderProps extends ComponentProps<"header">{
    text: string;
}

export const ListHeader: FC<ListHeaderProps> = ({text ,...props}) => {
    return (
        <header className="bg-purple-100 rounded text-center font-bold mb-1 shadow-lg min-w-max p-1">
            {text}
        </header>
    )
}

