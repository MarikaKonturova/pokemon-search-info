import React from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {Pokedex} from "./Components/Pokedex";
import {Pokemon} from "./Components/Pokemon";

function App(props: any) {

    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} render={() => <Pokedex />}/>
                <Route exact path={'/:pokemonId'} render={() => <Pokemon />}/>
            </Switch>
        </div>
    );
}

export default withRouter(App);
// export default App;
