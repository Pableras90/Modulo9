function getCharacters() {
    return fetch("https://rickandmortyapi.com/api/character").then(response => {
        return response.json();
        }).then(data => {
            return data;
        }
    )

}

function getCharactersID(id) {
    return fetch("https://rickandmortyapi.com/api/character/" + id).then(response => {
        return response.json();
    }).then(data => {
        return data;
    })
}

function getLocations() {
    return fetch("https://rickandmortyapi.com/api/location/").then(response => {
        return response.json();
    }).then(data => {
        return data;
    })
}


export { getCharacters, getCharactersID, getLocations };