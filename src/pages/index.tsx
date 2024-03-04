import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { type HeadFC, type PageProps } from "gatsby";
import { Menu } from "../components/menu";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const IndexPage: React.FC<PageProps> = ({ children }) => {
    return (
        <main style={pageStyles}>
            <Menu />
            Test
            <MDXProvider>{children}</MDXProvider>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
