import { ElementType } from "react";

export type SideBarItem = {
    id: string
    title: string
    path?: string
    icon?: ElementType;
    children?: SideBarItem[]
}