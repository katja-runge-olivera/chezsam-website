import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type ImageProps = {
    classes?: string;
}

export const Menu = ({ classes }: ImageProps) => {
    return <StaticImage src="../menu.jpg" alt="menu" className={classes} />
}