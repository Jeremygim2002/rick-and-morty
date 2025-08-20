function getCharacters(done) {
    axios.get("https://rickandmortyapi.com/api/character")
        .then(res => done(res.data));
}

getCharacters(data => {
    const container = document.getElementById("characters");

    data.results.forEach(personaje => {
        let badgeClass =
            personaje.status === "Alive" ? "badge-alive" :
                personaje.status === "Dead" ? "badge-dead" : "badge-unknown";

        const col = document.createRange().createContextualFragment(`
      <div class="col-12 col-sm-6 col-lg-3 animate__animated animate__fadeIn">
        <div class="card rick-card bg-dark text-light h-100">
          <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
          <div class="card-body">
            <h5 class="card-title text-success">${personaje.name}</h5>
            <span class="badge ${badgeClass}">${personaje.status}</span>
          </div>
        </div>
      </div>
    `);

        container.append(col);
    });
});
