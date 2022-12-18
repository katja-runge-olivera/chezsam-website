import React from 'react';
import { MenuItem } from '../MenuItem';
import * as styles from './styles.module.scss';

type MenuItemListProps = {
    menuItems: Queries.ContentfulMenuItem[];
};

const MenuItemList = ({ menuItems }: MenuItemListProps) => (
    <div className={styles.root}>
        {menuItems.map((item) => (
            <MenuItem key={item.id} menuItem={item} />
        ))}
    </div>
);

export { MenuItemList };
