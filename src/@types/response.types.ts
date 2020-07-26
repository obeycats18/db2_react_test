export type Film = {
    characters: Array<string>,
    created: string,
    director: string,
    edited: string,
    episode_id: number,
    opening_crawl: string,
    planets: Array<string>,
    producer: string,
    release_date: string,
    species: Array<string>,
    starships: Array<string>,
    title: string,
    url: string,
    vehicles: Array<string>,
}

export type Planet = {
    climate: string,
    created: string,
    diameter: string,
    edited: string,
    films: Array<string>,
    gravity: string,
    name: string,
    orbital_period: string,
    population: string,
    residents: Array<string>,
    rotation_period: string,
    surface_water: string,
    terrain: string,
    url: string
}

export type Starships = {
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    hyperdrive_rating: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    films: Array<string>,
    pilots: Array<any>,
    starship_class: string,
    url: string
}

export type Vehicles = {
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string,
    created: string,
    crew: string,
    edited: string,
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: [],
    films: Array<string>,
    url: string,
    vehicle_class: string
}

export type Species = {
    average_height: string,
    average_lifespan: string,
    classification: string,
    created: string,
    designation: string,
    edited: string,
    eye_colors: string,
    hair_colors: string,
    homeworld: string,
    language: string,
    name: string,
    people: Array<string>,
    films: Array<string>,
    skin_colors: string,
    url: string
}

export type People = {
    birth_year: string,
    eye_color: string,
    films: Array<string>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: string,
    edited: string,
    species: Array<string>,
    starships: Array<string>,
    url: string,
    vehicles: Array<string>
}

export type InfoT = (Film | People | Planet | Starships | Species | Vehicles)[]

export type ResponseT<T> = {
    count: number,
    next: any | null,
    prev: any | null,
    results: T[],
}
