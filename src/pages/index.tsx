import React from 'react';
import { Columns } from '../components/Columns';
import { DefaultHead } from '../components/DefaultHead';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';

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
