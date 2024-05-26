const form = document.querySelector("form");
const container = document.querySelector(".image-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let quary = form.querySelector("input").value;
    console.log(quary);

    if(quary === "") {
        quary= "marvel";
    }

    tvMovieapi(quary);
})

async function tvMovieapi(quary) {
    const req = await fetch (`https://api.tvmaze.com/search/shows?q=${quary}`)

    const movies = await req.json();
    makeImages(movies);
}

function makeImages(movies) {
    for (let movie of movies){
        let src = movie.show.image.medium;

        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    }
}