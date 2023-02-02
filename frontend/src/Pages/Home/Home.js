import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import Homebody from './components/Homebody';
import Noticebar from './components/Noticebar';

const Home = () => {
    return (
        <MainLayout>
            <Noticebar />
            <Homebody />
        </MainLayout>
    );
};

export default Home;