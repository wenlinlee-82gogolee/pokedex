// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Simple version---------------------
// const container = document.querySelector("#container");
// const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

// for (let i = 1; i < 152; i++) {
//     const pokemonImg = document.createElement("img");
//     pokemonImg.src = `${baseUrl}${i}.png`;
//     container.appendChild(pokemonImg);
// }

//more complicated version---------------------
const container = document.querySelector('#container');
const baseUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i < 152; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const numTag = document.createElement('span');
  numTag.innerText = `#${i}`;
  const newImg = document.createElement('img');
  newImg.src = `${baseUrl}${i}.png`;
  pokemon.appendChild(newImg);
  pokemon.appendChild(numTag);
  container.appendChild(pokemon);
}
