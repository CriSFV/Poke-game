import getPokemonOptions, { getPokemons, getPokemonsName } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', ()=>{

    test('debe devolver un arreglo de números',()=>{

        const pokemons = getPokemons()
        expect(pokemons.length). toBe(650)
        expect(pokemons[0]). toBe(1)
        expect(pokemons[500]). toBe(501)

    })

    test ('getPokemonNames debe devolver un arreglo de cuatro elementos con nombres de pokemons', async()=>{
            const pokemons = await getPokemonsName([1,2,3,4])
            expect(pokemons).toStrictEqual(      [
                { name: 'bulbasaur', id: 1 },
                { name: 'ivysaur', id: 2 },
                { name: 'venusaur', id: 3 },
                { name: 'charmander', id: 4 }
              ])
    })

    test('getPokemonOptions debe devolver un array mezclado', async ()=>{

        const pokemons = await getPokemonOptions()
        console.log(pokemons);
        expect(pokemons.length).toBe(4)
        // como llegan mezclados solo podemos ver que llegan strings y numbers
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) }


        ])

    })
})