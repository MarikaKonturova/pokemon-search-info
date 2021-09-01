import React from 'react';
import {Switch, Route, withRouter, Redirect} from "react-router-dom";
import {Pokedex} from "./Components/Pokedex";
import {Pokemon} from "./Components/Pokemon";

function App(props: any) {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/pokedex"/>}/>
                <Route exact path={'/pokedex'} render={() => <Pokedex/>}/>
                <Route exact path={'/:pokemonId'} render={() => <Pokemon/>}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);

