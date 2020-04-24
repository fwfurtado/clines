import {default as libfetch} from 'isomorphic-unfetch'
import {accessToken, isLogged} from "./services/login.service";

const EMPTY_HEADERS = {
    headers: {}
}

const fetch = (url, options=undefined) => {

    console.log(`URL ${url}`)

    return libfetch(url, options)
}

export default fetch;