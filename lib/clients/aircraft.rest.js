import {urlFor, AIRCRAFT} from '../url'
import RestClient from "../rest-client";

const BASE_URL = urlFor(AIRCRAFT)
const client = new RestClient(BASE_URL, true)


export const list = () => client.get()
export const show = (id) => client.get(id)
export const save = (aircraft) => client.post(aircraft)

export default {list, show}