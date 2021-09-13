import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import {Pokedex} from "./Components/Pokedex";
import {Pokemon} from "./Components/Pokemon";

function App() {

    return (
        <div className="App">
            <Switch>

                <Route exact path={'/'} render={() => <Pokedex/>}/>
                <Route exact path={'/:pokemonId'} render={() => <Pokemon/>}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);

