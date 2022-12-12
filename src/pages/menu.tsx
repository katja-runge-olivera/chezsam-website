import { graphql, PageProps } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MenuPage = ({ data }: PageProps<Queries.Query>) => (
    <>
        <h1>Menü</h1>
        <div>
            {data.allContentfulMenuItem.edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.title}</h2>
                    {node.description && node.description.description && (
                        <ReactMarkdown>
                            {node.description.description}
                        </ReactMarkdown>
                    )}
                </div>
            ))}
        </div>
    </>
);

const query = graphql`
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

export { query };
export default MenuPage;
