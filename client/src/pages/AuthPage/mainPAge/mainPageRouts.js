import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MusicMain from './music/MusicMain';

export const useRoutes = (isLogin) => {

    if(isLogin){
        return(
            <Switch>
                <Route path="/music" component={MusicMain} />
                <Redirect to="/music" />
            </Switch>
        )
    }
}