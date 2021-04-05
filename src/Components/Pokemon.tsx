import React, {useEffect, useState} from "react";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {Button, CircularProgress, Link, Typography} from "@material-ui/core";
import {toFirstCharUppercase} from "../Constans";
import axios from "axios";
import {PokemonType, PokemonType2} from "../mockData";

export type PathParamsType = {
    pokemonId: string
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = {
    // history: any
}
const PokemonPreview = {
    name : '',
    id : 1,
    species : {
        url:'',
        name: ''
    },
    height : '',
    weight : '',
    types : [{type:{name: ''}}],
    sprites : {
        front_default: ''
    }
}
export const Pokemon = withRouter((props: PropsType) => {
    const pokemonId = props.match ? props.match.params.pokemonId : 123
    const [pokemon, setPokemon] = useState<any>(PokemonPreview)

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(function (response) {
                const {data} = response
                setPokemon(data)
            })
            .catch(function (error) {
                setPokemon(false)
            })
    }, [pokemonId])

    const generatePokemonJSX = () => {
        if (pokemon) {
            const {name, id, species, height, weight, types, sprites} = pokemon
            const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
            const {front_default} = sprites;
            return (
                <>
                    <Typography variant="h1">
                        {`${id}.`} {toFirstCharUppercase(name)}
                        <img src={front_default}/>
                    </Typography>
                    <img style={{width: '300px', height: "300px"}} src={fullImageUrl}/>
                    <Typography variant="h3">Pokemon Info</Typography>
                    <Typography>
                        <Link href={species.url}>
                            {species.name}
                        </Link>
                    </Typography>
                    <Typography> Height: {height}</Typography>
                    <Typography> Weight: {weight}</Typography>
                    <Typography variant='h6'> Types: {
                        types.map((typeInfo: any) => {
                            const {name} = typeInfo.type.name
                            return <Typography key={name}>{name}</Typography>
                        })
                    }</Typography>
                </>
            )
        }
    }

    return (
        <>
            {pokemon === undefined && <CircularProgress/>}
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
            {pokemon === false && <Typography> Pokemon not found </Typography>}
            <Button variant={'contained'} onClick={() => props.history.push('/')}>
                back to pokedex
            </Button>
        </>
    )
})