import {urlFor, AIRCRAFT_MODELS} from '../url'
import RestClient from "../rest-client";

const BASE_URL = urlFor(AIRCRAFT_MODELS)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()

export default {list}