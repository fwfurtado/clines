import {urlFor, FLIGHTS} from '../url';
import RestClient from "../rest-client";

const BASE_URL = urlFor(FLIGHTS)
const client = new RestClient(BASE_URL, true)

export const list = () => client.get()
export const show = (id) => client.get(id)
export default {list, show}