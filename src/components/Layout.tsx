import React, { ReactNode } from 'react';
import { Navbar, Menu } from '../components/Menu';
import Footer from '../components/Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            <Menu />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
