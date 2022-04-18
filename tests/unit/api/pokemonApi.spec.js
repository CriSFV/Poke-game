import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', ()=>{

test('axio debe estar configurado con el api correcto', ()=>{

        expect (pokemonApi.defaults.baseURL).toBe( 'https://pokeapi.co/api/v2/pokemon')
        

})

})