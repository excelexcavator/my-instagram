import React, {Component} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Landscape from "./Landscape";


const MyRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/landscape" component={Landscape}/>
        </Switch>
    </HashRouter>
);


export default MyRouter;
