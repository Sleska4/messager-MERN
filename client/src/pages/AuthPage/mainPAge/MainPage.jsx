import React from 'react';
import {useRoutes} from './mainPageRouts';

import './mainPage.css';


const MainPage = () => {



    const rout = useRoutes(true)

    return (
        <div className="container bgc-mainPage">
            {rout}
        </div>

        
    );
}

export default MainPage;
