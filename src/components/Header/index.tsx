import React from "react";
import { Button } from "../Button";
import * as styles from './styles.module.scss'

export const Header = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="/">Home</a></li>
                <li className={styles.navItem}><a href="#menu">Menu</a></li>
                <li className={styles.navItem}><a href="#reservieren">Reservieren</a></li>
                <li className={styles.navItem}><a href="#about">Über uns</a></li>
            </ul>
            <Button buttonLabel="Jetzt Tisch buchen" buttonHref="#reservieren" buttonColor="buttonRed"/>
        </nav>
    )
};