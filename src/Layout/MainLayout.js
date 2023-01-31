import React from 'react';
import Footer from '../Components/Shared/Footer';
import Topbar from '../Components/Shared/Topbar';

const MainLayout = ({children}) => {
    return (
        <div>
            <Topbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;