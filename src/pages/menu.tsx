import { graphql, PageProps } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { DefaultHead } from '../components/DefaultHead';
import { Layout } from '../components/Layout';

const MenuPage = ({ data }: PageProps<Queries.Query>) => (
    <Layout>
        <h1>Menü</h1>
        <div>
            {data.allContentfulMenuItem.edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    {node.description?.description && (
                        <ReactMarkdown>
                            {node.description.description}
                        </ReactMarkdown>
                    )}
                </div>
            ))}
        </div>
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
