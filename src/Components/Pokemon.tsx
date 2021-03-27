import React, {useState} from "react";
import {RouteComponentProps} from 'react-router-dom'
import {InitialState} from "../mockData";
import {Link, Typography} from "@material-ui/core";
import {toFirstCharUppercase} from "../Constans";

export type PathParamsType = {
    pokemonId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type OwnPropsType = {}

export const Pokemon = (props: PropsType) => {
    /*const {match} = props;
    const {params} = match;
    const {pokemonId} = params;*/
    const pokemonId = props.match.params.pokemonId
    const [pokemon, setPokemon] = useState(InitialState[`${pokemonId}`])

    const generatePokemonJSX = () => {
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
                    types.map(typeInfo=>{
                        const {type} = typeInfo
                        const {name} = type
                        return <Typography key={name}>{name}</Typography>
                    })
                }</Typography>
            </>
        )
    }

    return (
        <>
            {generatePokemonJSX()}
        </>
    )
}