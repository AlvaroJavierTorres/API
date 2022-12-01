import{expChars}from "../model/consumirApi.js"
expChars(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`

    <div class="card-deck">
        <div class="card text-white bg-dark mb-3"  id="cards">
            <img class="card-img-top" src="${personaje.image}" alt="personajes">
            <div class="card-body">
                <h5 class="card-title">${personaje.name}</h5>
                <p class="card-text">${personaje.species}</p>
                <p class="card-text">${personaje.status}</p>
            </div>
        </div>
    </div>
            
           
        `);

        const main = document.querySelector("main")
        main.append(article);

    });
})

export{
    expChars as allcharacter
}
