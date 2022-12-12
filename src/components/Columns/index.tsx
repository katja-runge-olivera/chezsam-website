import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Button } from '../Button';
import * as styles from './styles.module.scss';

export const Columns = () => (
    <div className={styles.root}>
        <div>
            <StaticImage
                src="../location.jpg"
                alt="Mitten in Altona, Große Bergstraße 199a, 22767 Hamburg"
            />
            <h3 className={styles.title}>Mitten in Altona</h3>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
            </p>
            <Button
                buttonColor="buttonGhost"
                buttonHref="#location"
                buttonLabel="Über uns erfahren"
                className={styles.button}
            />
        </div>
        <div>
            <StaticImage src="../dishes.jpg" alt="Regionale Produkte" />
            <h3 className={styles.title}>Regionale Produkte</h3>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
            </p>
            <Button
                buttonColor="buttonGhost"
                buttonHref="#dishes"
                buttonLabel="Unsere Hersteller"
                className={styles.button}
            />
        </div>
        <div>
            <StaticImage src="../menu.jpg" alt="Menü" />
            <h3 className={styles.title}>Saisonale Gerichte</h3>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
            </p>
            <Button
                buttonColor="buttonGhost"
                buttonHref="#menu"
                buttonLabel="Zur Menü"
                className={styles.button}
            />
        </div>
    </div>
);
