import React from "react"
import { StaticImage } from "gatsby-plugin-image"

type ImageProps = {
    classes: string;
}

export const HeroImage = ({ classes }: ImageProps) => {
    return <StaticImage src="../hero-image.jpg" alt="A dinosaur" layout="constrained" className={classes} />
}