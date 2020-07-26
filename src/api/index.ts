import axios from './settings'

export const swAPI = {
    getInfo: async (type: string) => {
        const response = await axios.get(type)
        const {data} = response
        return data.results
    },
    getInfoArray: async (infoUrls: Array<string>) => {
        return await Promise.all( infoUrls.map( async (url: string) => await axios.get(url).then(response => response.data)) )
    },
    search: async (type: string, query: string) => {
        const response = await axios.get(`${type}?search=${query}`)

        const {data} = response
        return data.results
    }
}
