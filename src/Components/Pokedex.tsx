import React, {ChangeEvent, useEffect, useState} from "react";
import {
    AppBar,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {fade, makeStyles} from "@material-ui/core/styles"
import {PokemonType} from "../mockData";
import {toFirstCharUppercase} from "../Constans";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


const useStyles = makeStyles(theme => ({
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
    },
    searchContainer: {
        display: 'flex',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '5px',
        marginBottom: '5px',
    },
    searchIcon: {
        alignSelf: 'flex-end',
        marginBottom: '5px'
    },
    searchInput: {
        width: '200px',
        margin: '5px'
    }
}))

type pokemonDataType = {
    [pokemonId: string]: {
        id: number
        name: string,
        sprite: string
    }

}

type PathParamsType = {}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = {
    history: History
}

export const Pokedex = withRouter((props: PropsType) => {

    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState<pokemonDataType>({});
    const [filter, setFilter] = useState<string>('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter((e.currentTarget.value).toLowerCase())
    }
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
            .then(function (response) {
                const {results} = response.data
                let newPokemonData = {} as pokemonDataType;
                results.forEach((pokemon: PokemonType, index: number) => {
                    newPokemonData = {
                        ...newPokemonData, [index + 1]: {
                            id: index + 1,
                            name: pokemon.name,
                            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
                        }
                    }
                })
                setPokemonData(newPokemonData)
            })
    }, [])
    const getPokemonCard = (pokemonId: number) => {

        const {id, name, sprite} = pokemonData[pokemonId];
        return (<Grid item xs={4} key={pokemonId}>
            <Card onClick={() => props.history.push(`/pokedex/${pokemonId}`)}>
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
                    <div className={classes.searchContainer}>
                        <SearchIcon className={classes.searchIcon}/>
                        <TextField onChange={handleSearchChange} className={classes.searchInput} label='Pokemon'
                                   variant='standard'/>
                    </div>
                </Toolbar>
            </AppBar>
            {pokemonData ?
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {Object.keys(pokemonData).map((pokemonId) => {
                        return pokemonData[+pokemonId].name.includes(filter) &&
                            getPokemonCard(+pokemonId)
                    })}
                </Grid>
                : <CircularProgress color={'primary'}/>}
        </>
    )
})