import {urlFor, LOCATIONS} from '../url'
import RestClient from "../rest-client";

const BASE_URL = urlFor(LOCATIONS)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()

export default {list}
