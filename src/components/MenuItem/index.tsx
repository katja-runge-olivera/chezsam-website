import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as styles from './styles.module.scss';

type MenuItemProps = {
    menuItem: Queries.ContentfulMenuItem;
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
    console.log({ menuItem });

    return (
        <div className={styles.root}>
            <h3 className={styles.title}>{menuItem.title}</h3>

            <div className={styles.content}>
                {menuItem.images && (
                    <div>
                        {menuItem.images.map((item) => {
                            if (!item || !item.gatsbyImageData) return null;
                            return (
                                <GatsbyImage
                                    alt={item.description || ''}
                                    image={item.gatsbyImageData}
                                />
                            );
                        })}
                    </div>
                )}

                {menuItem.description?.description && (
                    <div>
                        <ReactMarkdown>
                            {menuItem.description.description}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};

export { MenuItem };
