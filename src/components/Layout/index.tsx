import React from 'react';
import '../../styles/index.scss';
import { TopBar } from '../TopBar';
import * as styles from './styles.module.scss';

export const Layout = ({ children }: { children?: React.ReactNode }) => (
    <>
        <TopBar />
        <div className={styles.container}>{children}</div>
    </>
);
