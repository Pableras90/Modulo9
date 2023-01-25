function getCharacters() {
    return fetch("https://rickandmortyapi.com/api/character").then(response => {
        return response.json();
    }).then(data => {
        return data[0];
    }
    )

}

function getCharactersID(id) {
    return fetch("https://rickandmortyapi.com/api/character/" + id).then(response => {
        return response.json();
    }).then(data => {
        return data[0];
    })
}


export { getCharacters, getCharactersID };