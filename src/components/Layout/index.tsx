import React from 'react';
import { TopBar } from '../TopBar';
import '../../styles/index.scss';
import * as styles from './styles.module.scss';

export const Layout = ({ children }: { children?: React.ReactNode }) => (
    <>
        <body className={styles.root}>
            <TopBar />
            <div className={styles.container}>{children}</div>
        </body>
    </>
);
