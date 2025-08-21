'use client';

import React from 'react';
import { Drawer, List, Toolbar } from '@mui/material';
import { sidebarItems } from '../../types/sidebarItems';
import SidebarItem from './SidebarItem';


export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', boxShadow: 12 },
            }}
        >
            <Toolbar />
            <List>
                {sidebarItems.map((item) => {
                    return <SidebarItem key={item.id} item={item} />
                })}
            </List>
        </Drawer>
    );
}
