import React  from 'react';
import {Switch, Route } from "react-router-dom";
import {Pokedex} from "./Components/Pokedex";
import {Pokemon} from "./Components/Pokemon";

function App(props: any) {

    return (
      <div className="App">
<Switch>
  <Route exact path={'/'}  render={()=><Pokedex history={props.history}/>}/>

  <Route exact path={'/:pokemonId'}  render={( RouteComponentProps)=><Pokemon {...RouteComponentProps} history={props.history}/>}/>
</Switch>
    </div>
  );
}

export default App;
