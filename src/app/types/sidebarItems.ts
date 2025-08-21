import { SideBarItem } from "@/app/types/sidebarItemTypes";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const sidebarItems: SideBarItem[] = [
    {
        id: 'vehicle',
        title: 'Vehicle',
        icon: DirectionsCarFilledIcon,
        children: [
            {
                id: 'automobile',
                title: 'Automobile',
                path: '/vehicle/automobile',
            },
            {
                id: 'motorcycle',
                title: 'Motorcycle',
                path: '/vehicle/motorcycle',
            },
        ],
    },
    {
        id: 'items',
        title: 'Items',
        icon: StorefrontIcon,
        children: [
            {
                id: 'computer',
                title: 'Computer',
                path: '/items/computer',
            },
            {
                id: 'smartphone',
                title: 'Smartphone',
                path: '/items/smartphone',
            },
        ],
    },
];