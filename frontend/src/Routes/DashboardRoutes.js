import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import axios from "axios"

const DashboardRoutes = () => {
    const [user, setUser] = useState(null)
    const getUser = async() => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
            const {data} = await axios
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Routes>
            <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
    );
};

export default DashboardRoutes;