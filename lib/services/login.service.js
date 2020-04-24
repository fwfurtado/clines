import Router from 'next/router'
import Cookie from 'js-cookie'

const TOKEN_COOKIE_KEY = 'accessToken'
const _token = () => Cookie.get(TOKEN_COOKIE_KEY)

export const login = () => {
    Router.push('/login');
}

export const logout = () => {
    Cookie.remove(TOKEN_COOKIE_KEY);
    return Router.push('/login');
}



export const accessToken = (bearer=true) => {
    if (bearer) {
        return `Bearer ${_token()}`
    }

    return _token()
}

export const isLogged = () => _token() === undefined;
