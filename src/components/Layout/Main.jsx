import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='d-flex my-3 justify-content-center align-items-center'>
           <div>
           <Header/>
            <Outlet/>
           </div>
        </div>
    );
};

export default Main;