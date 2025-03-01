const pokemonName = document.getElementById("search-bar");
const container = document.getElementById("container");
container.style.display = "none";

async function fetchPokemon() {
  try {
    const displayImage = document.getElementById("pokemon-image");
    const type = document.getElementById("type");
    const baseStat = document.getElementById("base-stat");
    const skill1 = document.getElementById("skill1");
    const skill2 = document.getElementById("skill2");
    const skill3 = document.getElementById("skill3");
    const searchBTN = document.getElementById("searchBTN");
    const displayedPokemonName = document.getElementById("pokemon-name");

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonImage = data.sprites.front_default;

    displayImage.src = pokemonImage;
    type.textContent = data.types[0].type.name.toUpperCase();
    baseStat.textContent = data.stats[0].base_stat;
    displayedPokemonName.textContent = data.name.toUpperCase();
    skill1.textContent = data.moves[0].move.name.toUpperCase();
    skill2.textContent = data.moves[1].move.name.toUpperCase();
    skill3.textContent = data.moves[2].move.name.toUpperCase();
  } catch (error) {
    console.error(error);
  }
}

searchBTN.addEventListener("click", () => {
  fetchPokemon();
  pokemonName.value = "";
  container.style.display = "flex";
});
