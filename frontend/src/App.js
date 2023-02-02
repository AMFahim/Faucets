import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MainRoutes from './Routes/MainRoutes';
import DashboardRoutes from './Routes/DashboardRoutes';

function App() {
  return (
    <Fragment>
      <MainRoutes />
      <DashboardRoutes />
    </Fragment>
  );
}

export default App;
