const BACKEND = "http://127.0.0.1:3001/"

export const fetchQuery = (query) => {
    return fetch(BACKEND + `search/${query}`)
    .then(r => r.json())
}