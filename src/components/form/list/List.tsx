import React, {ComponentProps, CSSProperties, FC, PropsWithChildren} from "react";
import ListItem from "@/components/form/list/ListItem";
import {ListHeader} from "@/components/form/list/ListHeader";

export interface ListProps extends PropsWithChildren<ComponentProps<"ol"> & ComponentProps<"ul">>{
    ordered?: boolean;
    className?: string;
    horizontal?: boolean;
    header?: string;
    headerStyle?: CSSProperties;
}

const ListComponent: FC<ListProps> = ({
                                          ordered = false,
                                          className,
                                          horizontal=false,
                                          children,
                                          header,
                                          headerStyle,
                                          ...props
                                      }) => {
    const Component = ordered ? 'ol' : 'ul';

    const alignStyle = horizontal? 'flex-row' : 'flex-col';

    return (
        <div className={`flex flex-col w-full bg-layout-primary px-2 py-1 rounded z-50 relative ${className}`}>
            {header ? <ListHeader className={`${headerStyle}`} text={header} /> : null }
            <Component
                className={`flex ${alignStyle}`}
                {...props}
            >
                {children}
            </Component>
        </div>
    )
}

ListComponent.displayName = "List";
ListItem.displayName = "List.Item";

export const List = Object.assign(ListComponent, {Item: ListItem, Header: ListHeader})

