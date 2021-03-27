import React, {useEffect, useState} from "react";
import {AppBar, Card, CardContent, CardMedia, CircularProgress, Grid, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import {InitialState, InitialStateType, PokemonType} from "../mockData";
import {toFirstCharUppercase} from "../Constans";
import axios from "axios";

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',

    },
    cardMedia: {
        margin: 'auto' // to center the image in card
    },
    cardContent: {
        textAlign: "center"
    }
})


export const Pokedex = (props: any) => {
    const {history} = props;
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
            .then(function (response) {
                const {results} = response.data
                const newPokemonData = {};
                results.forEach((pokemon: PokemonType, index:number) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
                    }
                })
                setPokemonData(newPokemonData)
            })
    }, [])
    const getPokemonCard = (pokemonId: string) => {

        const {id, name, sprite} = pokemonData[pokemonId];
        return (<Grid item xs={4} key={pokemonId}>
            <Card onClick={() => history.push(`/${pokemonId}`)}>
                <CardContent className={classes.cardContent}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{width: '130px', height: '130px'}}
                    />
                    <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                </CardContent>
            </Card>
        </Grid>)
    }

    return (
        <>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography variant="h6">Scroll to Elevate App Bar</Typography>
                </Toolbar>
            </AppBar>
            {pokemonData ?
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map((pokemonId) => getPokemonCard(pokemonId))}
                </Grid>
                : <CircularProgress color={'primary'}/>}
        </>
    )
}