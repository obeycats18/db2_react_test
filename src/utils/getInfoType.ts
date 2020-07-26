export const getTypeByKey = (key: string) => {
    switch (key) {
        case '0': return 'films'
        case '1': return 'people'
        case '2': return 'planets'
        case '3': return 'starships'
        case '4': return 'species'
        case '5': return 'vehicles'
        default: return 'films'
    }
}
