import React from 'react'
import {Route, Switch} from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'unistore/react'

import Home from '../pages/Home_api'
import NotMatch from '../pages/NotMatch'
import Signin from '../pages/Signin'
import Profile from '../pages/Profile'
import { store } from "../store";


const MainRoute = () => {
    return(
        <Provider store={store} >
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signin' component={Signin}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route path='/news-category/:category' component={Home}/>
                    <Route component = {NotMatch}/>
                </Switch>
            </BrowserRouter>
        </Provider>

    )
}

export default MainRoute