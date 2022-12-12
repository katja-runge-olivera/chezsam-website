import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Columns } from '../components/Columns';
import { DefaultHead } from '../components/DefaultHead';

export default function IndexPage() {
    return (
        <Layout>
            <>
                <Hero />
                <Columns />
            </>
        </Layout>
    );
}

export function Head() {
    return (
        <DefaultHead>
            <title>ChezSam Restaurant</title>
        </DefaultHead>
    );
}
