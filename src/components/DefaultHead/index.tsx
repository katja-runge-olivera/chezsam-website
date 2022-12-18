import React from 'react';

const DefaultHead = ({ children }: { children: React.ReactNode }) => (
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
            rel="stylesheet"
        />
        {children}
    </>
);

export { DefaultHead };
