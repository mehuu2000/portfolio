"use client";

import Link from 'next/link';
import styles from '@/styles/header.module.css';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    // ナビゲーション項目の定義
    const navigationItems = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Projects', path: '/projects' },
        { text: 'Contact', path: '/contact' }
    ];

    const DrawerList = (
        <div
            className={styles.drawer}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{ textAlign: 'center', py: 3 }} className={styles.drawerHeader}>
                <div className={styles.drawerLogo}>
                    <CodeIcon className={styles.drawerLogoIcon} />
                    <span className={styles.drawerLogoText}>ポートフォリオ</span>
                </div>
            </Box>
            
            <List className={styles.drawerList}>
                {navigationItems.map(({ text, path }) => (
                    <ListItem 
                        key={text} 
                        disablePadding 
                        className={styles.drawerListItem}
                    >
                        <ListItemButton 
                            component={Link}
                            href={path}
                            className={styles.drawerListItemButton}
                            onClick={() => setOpen(false)} // クリック時にドロワーを閉じる
                        >
                            {text}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className={styles.footer}>
                <p>© 2025 Hamada</p>
            </div>
        </div>
    );

    return (
        <header className={styles.main}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>
                    <CodeIcon className={styles.logoIcon} />
                    <span>Portfolio</span>
                </Link>
            </div>
            <div className={styles.spacer}></div>
            <Button 
                onClick={toggleDrawer(true)} 
                className={styles.menuButton}
                aria-label="menu"
            >
                <MenuIcon />
            </Button>

            <Drawer 
                open={open} 
                onClose={toggleDrawer(false)}
                anchor="right"
            >
                {DrawerList}
            </Drawer>
        </header>
    );
}