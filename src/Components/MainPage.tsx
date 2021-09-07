import React from "react";
import {Button, Typography} from "@material-ui/core";
import {NavLink, Redirect} from "react-router-dom";

export const MainPage = () => {
    return (<>
            <Typography> Welcome to Pokemon Search bar! Please, click on the button to begin your journey.</Typography>
            <NavLink to="/pokedex">
                <Button variant={'contained'} onClick={() => <Redirect to="/pokedex"/>}>
                    enter the pokedex
                </Button>
            </NavLink>
        </>
    )
}
