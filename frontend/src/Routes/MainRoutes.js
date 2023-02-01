import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Faq from '../Pages/FAQ/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';
import SignUp from '../Pages/SignUp/SignUp';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/faq' element={<Faq/>}/>
        </Routes>
    );
};

export default MainRoutes;