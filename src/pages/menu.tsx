import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { DefaultHead } from '../components/DefaultHead';
import { Layout } from '../components/Layout';
import { MenuItemList } from '../components/MenuItemList';

const MenuPage = ({ data }: PageProps<Queries.Query>) => (
    <Layout>
        <h1>Menü</h1>
        <MenuItemList
            menuItems={data.allContentfulMenuItem.edges.map(
                (item) => item.node
            )}
        />
    </Layout>
);

export const query = graphql`
    query {
        allContentfulMenuItem {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    tags
                    images {
                        gatsbyImageData
                        title
                        description
                    }
                }
            }
        }
    }
`;

export function Head() {
    return (
        <DefaultHead>
            <title>ChezSam Restaurant, Menü</title>
        </DefaultHead>
    );
}

export default MenuPage;
