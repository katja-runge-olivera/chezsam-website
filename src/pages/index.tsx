import * as React from "react"
import type { PageProps } from "gatsby"

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Columns } from "../components/Columns";

import * as styles from './styles.module.scss'

import '../styles/index.scss'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <React.Fragment>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" /> 
      </head>
      <body className={styles.root}>
        <Header />
        <Hero />
        <Columns />
      </body>
    </React.Fragment>
  )
}

export default IndexPage