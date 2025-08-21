'use client';

import React from 'react';
import { ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { SideBarItem as SidebarItemType } from '../../types/sidebarItemTypes';

interface Props {
    item: SidebarItemType;
}

export default function SidebarChildItem({ item }: Props) {
    return (
        <ListItemButton
            component={Link}
            href={item.path ? item.path : ""}
            sx={{ pl: 4 }}
        >
            <ListItemText primary={item.title} />
        </ListItemButton>
    );
}
