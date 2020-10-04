import React from "react";
import {Route, Switch} from "react-router";
import UseStateList from "./UseState/UseStateList";
import UseEffectList from "./UseEffect/UseEffectList";
import DataFetchingList from "./DataFetching/DataFetchingList";

const Routes = () => {
    return (
        <Switch>
            <Route path={"/use-state"} component={UseStateList} exact/>
            <Route path={"/use-effect"} component={UseEffectList} exact/>
            <Route path={"/data-fetching"} component={DataFetchingList} exact/>
        </Switch>
    );
};

export default Routes;