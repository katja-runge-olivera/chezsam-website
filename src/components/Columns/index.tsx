import React from 'react';
import { Location } from '../../images/columns/Location';
import { Dishes } from '../../images/columns/Dishes';
import { Menu } from '../../images/columns/Menu';
import { Button } from '../Button';

import * as styles from './styles.module.scss';

export const Columns = () => (
    <div className={styles.root}>
        <div>
            <Location />
            <h3 className={styles.title}>Mitten in altona</h3>
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
            <Dishes />
            <h3 className={styles.title}>Regionale Producte</h3>
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
            <Menu />
            <h3 className={styles.title}>Seasonale Gerichte</h3>
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
