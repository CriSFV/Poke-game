import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import {pokemons} from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {


    let wrapper
 
    beforeEach(()=>{
           wrapper = shallowMount (PokemonOptions, {
            props: {
                pokemons
            }
        })
    } )

    test('Match con el snapshot', ()=>{

        expect(wrapper.html()).toMatchSnapshot()
    })

    test ('Debe mostrar las 4opciones correctamente' , () =>{
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('charmander')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')
        
    })
    test ('Debe emitir selection con sus respectivos parametros' , () =>{

        const [li1, li2, li3,li4] = wrapper.findAll('li')
        li1.trigger('click') 
        li2.trigger('click') 
        li3.trigger('click') 
        li4.trigger('click') 
        expect(wrapper.emitted('pokeSelection').length).toBe(4)
        expect(wrapper.emitted('pokeSelection')[0]).toEqual([1])
        expect(wrapper.emitted('pokeSelection')[1]).toEqual([10])
        expect(wrapper.emitted('pokeSelection')[2]).toEqual([3])
        expect(wrapper.emitted('pokeSelection')[3]).toEqual([4])

    })
    

})