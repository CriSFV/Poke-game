import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {
  // siguiente sentencia crea un arreglo de un arreglo de 650 (que son los pokes que tiene la api)
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((e, index) => index + 1);
};

const getPokemonsOptions = async () => {
  // con esto mezcla los resultados (getPokemons devuelve un array)
  const mixedPokemon = getPokemons().sort(() => Math.random() - 0.5);
 
  const pokemons = await getPokemonsName(mixedPokemon.splice(0, 4));
  return pokemons
  
};



const getPokemonsName = async ([a, b, c, d] = []) => {

  //   // // esto es una manera de hacer la petición, pero saltan de uno en uno
  // const resp = await pokemonApi.get(`/1`)
  // console.log(resp.data.name , resp.data.id)
  // // para hacer la petición simultanea
  const arrPromises=[ // aquí no estoy mandado hacer las peticiones
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
  ]

  const [poke1, poke2, poke3, poke4] = await Promise.all( arrPromises )
  
  return [
    {name:poke1.data.name, id:poke1.data.id},
    {name:poke2.data.name, id:poke2.data.id},
    {name:poke3.data.name, id:poke3.data.id},
    {name:poke4.data.name, id:poke4.data.id}
  ]
  

};

export default getPokemonsOptions;
