import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type ImageProps = {
    classes?: string;
}

export const Location = ({ classes }: ImageProps) => {
    return <StaticImage src="../location.jpg" alt="location" className={classes} />
}