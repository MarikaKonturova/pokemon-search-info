type typesPokemonType = {
    slot: number,
    type: {
        name: string
        url: string
    },
}
export type PokemonType = {
    id: number
    name: string
    // sprite?: string // это я выдумала для Pokedex (~50-60 строка)
    base_experience?: number
    height: number
    is_default?: boolean
    order?: number
    weight: number
    abilities?: {
        is_hidden: boolean
        slot: number,
        ability: {
            name: string
            url: string
        }
    }[],
    forms?: {
        name: string
        url: string
    }[]
    game_indices?: {
        game_index: number
        version: {
            name: string
            url: string
        }
    }[]
    held_items?: {
        item: {
            name: string
            url: string
        },
        version_details: {
            rarity: number,
            version: {
                name: string
                url: string

            }
        }
    }[]
    location_area_encounters?: string
    species?: {
        name: string
        url: string
    }
    sprites?: {
        back_female: string
        back_shiny_female: string
        back_default: string
        front_female: string
        front_shiny_female: string
        back_shiny: string
        front_default: string
        front_shiny: string
    }
    types: typesPokemonType[]

}
export type PokemonType2 =
    {
        name: string,
        id: number,
        species: {
            name: string,
            url: string,
        },
        height: number,
        weight: number,
        types: typesPokemonType[]
        sprites: {
            back_default:
                string
            back_female: null,
            back_shiny:
                string
            back_shiny_female: null,
            front_default:
                string
            front_female: null,
            front_shiny:
                string
            front_shiny_female: null,
        },
    }
export type InitialStateType = { [key: string]: PokemonType2 }
export const InitialState: InitialStateType = {
    "1": {
        name: "bulbasaur",
        id: 1,
        species: {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/1/",
        },
        height: 7,
        weight: 69,
        types: [
            {
                slot: 2,
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/",
                },
            },
            {
                slot: 1,
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/",
                },
            },
        ],
        sprites: {
            back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
            back_female: null,
            back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
            back_shiny_female: null,
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            front_female: null,
            front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
            front_shiny_female: null,
        },
    },
    "2": {
        name: "ivysaur",
        id: 2,
        species: {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon-species/2/",
        },
        height: 10,
        types: [
            {
                slot: 2,
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/",
                },
            },
            {
                slot: 1,
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/",
                },
            },
        ],
        weight: 130,
        sprites: {
            back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
            back_female: null,
            back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
            back_shiny_female: null,
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            front_female: null,
            front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
            front_shiny_female: null,
        },
    },
    "4": {
        name: "charmander",
        id: 4,
        species: {
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon-species/4/",
        },
        height: 6,
        types: [
            {
                slot: 1,
                type: {
                    name: "fire",
                    url: "https://pokeapi.co/api/v2/type/10/",
                },
            }
        ],
        weight: 85,
        sprites: {
            back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
            back_female: null,
            back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
            back_shiny_female: null,
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            front_female: null,
            front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
            front_shiny_female: null,
        },
    },
    "7": {
        name: "squirtle",
        id: 7,
        species: {
            name: "squirtle",
            url: "https://pokeapi.co/api/v2/pokemon-species/7/",
        },
        height: 5,
        types: [
            {
                slot: 1,
                type: {
                    name: "water",
                    url: "https://pokeapi.co/api/v2/type/11/",
                },
            },
        ],
        weight: 90,
        sprites: {
            back_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
            back_female: null,
            back_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
            back_shiny_female: null,
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            front_female: null,
            front_shiny:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
            front_shiny_female: null,
        },
    },
};
