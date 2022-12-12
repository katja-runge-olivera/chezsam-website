import React from 'react';
import * as styles from './styles.module.scss';

type ButtonProps = {
    buttonLabel: string;
    buttonHref: string;
    buttonColor?: string;
    className?: string;
};

export const Button = ({
    buttonLabel,
    buttonHref,
    buttonColor,
    className,
}: ButtonProps) => {
    const classes = `${styles.button} ${
        styles[buttonColor as string]
    } ${className}`;
    return (
        <a href={buttonHref} className={classes}>
            {buttonLabel}
        </a>
    );
};
