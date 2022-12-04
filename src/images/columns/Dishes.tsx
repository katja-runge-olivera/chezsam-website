import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type ImageProps = {
    classes?: string;
}

export const Dishes = ({ classes }: ImageProps) => {
    return <StaticImage src="../dishes.jpg" alt="location" className={classes} />
}