import React from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {Pokedex} from "./Components/Pokedex";
import {Pokemon} from "./Components/Pokemon";
import {MainPage} from "./Components/MainPage";

function App() {

    return (
        <div className="App">
            <Switch>
                <Route exact path="/" render={() => <MainPage/> }/>
                <Route exact path={'/pokedex'} render={() => <Pokedex/>}/>
                <Route exact path={'/pokedex/:pokemonId'} render={() => <Pokemon/>}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);

