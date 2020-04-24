const BASE_URL = process.env.CLINES_API_URL

export const FLIGHTS = 'flights'
export const AIRPORTS = 'airports'
export const AIRCRAFT = 'aircraft'
export const AIRCRAFT_MODELS = 'aircraft-models'
export const LOCATIONS = 'locations'

const endpoints =  {
        [AIRCRAFT]: `${BASE_URL}/aircraft`,
        [AIRPORTS]: `${BASE_URL}/airports`,
        [FLIGHTS]: `${BASE_URL}/flights`,
        [LOCATIONS]: `${BASE_URL}/locations`,
        [AIRCRAFT_MODELS]: `${BASE_URL}/aircraft-models`,
}

export const urlFor = (name) => {
    try {
        return endpoints[name]
    } catch (e) {
        throw new Error(`cannot find the URL '${name}'.`)
    }
}