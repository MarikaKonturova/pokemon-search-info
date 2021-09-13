import React, {useEffect, useState} from "react";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom'
import {Button, CircularProgress, Link, Typography} from "@material-ui/core";
import {toFirstCharUppercase} from "../Constans";
import axios from "axios";

export type PathParamsType = {
    pokemonId: string
}
type PokemonPreviewType = {
    name: string
    id: number
    species: {
        url: string
        name: string
    },
    height: string
    weight: string
    types: [{ type: { name: string } }],
    sprites: {
        front_default: string
    },
    fullImageUrl: string
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = {
    // history: any
}
const PokemonPreview = {} as PokemonPreviewType | Boolean
export const Pokemon = withRouter((props: PropsType) => {
    const pokemonId = props.match ? props.match.params.pokemonId : 123
    const [pokemon, setPokemon] = useState<PokemonPreviewType | Boolean>(PokemonPreview)
    const [initialize, setInitialize] = useState<Boolean>(false)

    /* useEffect(() => {
         axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
             .then(function async(response) {
                 const {data} = response
                 setPokemon(data)
             })
             .catch(function (error) {
                 setPokemon(false)
             })
     }, [pokemonId]) */
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                const {data} = response
                const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
                setPokemon({...data, fullImageUrl})
                setInitialize(true)
            } catch (error) {
                setPokemon(false)
            }
        })()
    }, [pokemonId])

    const generatePokemonJSX = () => {
        if (pokemon) {
            const {name, id, species, height, weight, types, sprites, fullImageUrl} = pokemon as PokemonPreviewType
            return (
                <>
                    <Typography variant="h1">
                        {`${id}.`} {toFirstCharUppercase(name)}
                        <img src={sprites.front_default}/>
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
    if (!initialize) {
        return <CircularProgress/>
    }
    return (
        <>
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
            {pokemon === false && <Typography> Pokemon not found </Typography>}
            <Button variant={'contained'}  onClick={() => props.history.push(`/`)} >
                back to pokedex
            </Button>
        </>
    )
})