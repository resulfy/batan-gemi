'use client';

import React, { useState } from 'react';
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    List,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Link from 'next/link';
import SidebarChildItem from './SidebarChildItem';
import { SideBarItem as SidebarItemType } from '../../types/sidebarItemTypes';

interface Props {
    item: SidebarItemType;
}

export default function SidebarItem({ item }: Props) {
    const [open, setOpen] = useState(false);
    const hasChildren = !!item.children?.length;
    const Icon = item.icon;

    const handleClick = () => {
        if (hasChildren) setOpen((prev) => !prev);
    };

    return (
        <>
            {hasChildren ? (
                <>
                    <ListItemButton onClick={handleClick} sx={{ cursor: 'pointer' }}>
                        {Icon && <ListItemIcon>{<Icon />}</ListItemIcon>}
                        <ListItemText primary={item.title} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {item.children!.map((child) => (
                                <SidebarChildItem key={child.id} item={child} />
                            ))}
                        </List>
                    </Collapse>
                </>
            ) : (
                <ListItemButton
                    component={Link}
                    href={item.path ?? '#'}
                    sx={{ cursor: 'default' }}
                >
                    {Icon && <ListItemIcon><Icon /></ListItemIcon>}
                    <ListItemText primary={item.title} />
                </ListItemButton>
            )}
        </>
    );
}
