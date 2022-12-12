import { Link } from 'gatsby';
import React from 'react';
import { Button } from '../Button';
import * as styles from './styles.module.scss';

export const TopBar = () => (
    <nav className={styles.root}>
        <div className={styles.desktopNavigation}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/menu">Menu</Link>
                </li>
                <li className={styles.navItem}>
                    <a href="#reservieren">Reservieren</a>
                </li>
                <li className={styles.navItem}>
                    <a href="#about">Über uns</a>
                </li>
            </ul>
        </div>
        <div className={styles.mobileNavigation}>
            <a href="#home">
                <svg
                    viewBox="0 0 20 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 11.745C11 11.331 10.664 10.995 10.25 10.995H0.75C0.336 10.995 0 11.331 0 11.745C0 12.159 0.336 12.495 0.75 12.495H10.25C10.664 12.495 11 12.159 11 11.745ZM20 6.745C20 6.331 19.664 5.995 19.25 5.995H0.75C0.336 5.995 0 6.331 0 6.745C0 7.159 0.336 7.495 0.75 7.495H19.25C19.664 7.495 20 7.159 20 6.745ZM16 1.745C16 1.331 15.664 0.994995 15.25 0.994995H0.75C0.336 0.994995 0 1.331 0 1.745C0 2.159 0.336 2.495 0.75 2.495H15.25C15.664 2.495 16 2.159 16 1.745Z"
                        fill="white"
                    />
                </svg>
            </a>
        </div>
        <Button
            buttonLabel="Jetzt Tisch buchen"
            buttonHref="#reservieren"
            buttonColor="buttonRed"
        />
    </nav>
);
