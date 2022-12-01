function getChars(done){
    const result = fetch("https://rickandmortyapi.com/api/character");

    result
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}


export{
    getChars as expChars
}