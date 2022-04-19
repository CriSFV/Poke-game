import PokemonPage from '@/pages/PokemonPage'
import { shallowMount, mount } from '@vue/test-utils'
import {pokemons} from '../mocks/pokemons.mock'


describe('PokemonPage Page', () =>{

    let wrapper
    //let mixPokemonArraySpy

    beforeEach(()=>{
       //  mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArr' )
        wrapper = shallowMount( PokemonPage )
    })

    test('debe hacer match con el snapshot',()=>{

        //expect(wrapper.html()).toMatchSnapshot()

    })

    test ('debe de llamar mixPokemonArr al montar el componente', ()=>{
        // podemos hacer el spy aquí o fuera de los test (porque se tiene que cargar antes de que se monte el wrapper)
        
        const mixPokemonArraySpy = jest.spyOn( PokemonPage.methods, 'mixPokemonArr' )
        wrapper = shallowMount( PokemonPage )
        expect( mixPokemonArraySpy ).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando carguen los pokemons, despues del mounted', ()=>{
         wrapper = shallowMount( PokemonPage, { 
            data(){
                return {
                    pokemonArr: pokemons, 
                    pokemon: null,
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                  };
            }
        } )
        expect(wrapper.html()).toMatchSnapshot()
    })

    // test('debe mostar los componentes de pokemonPicture y pokemonOptions',()=>{

    //      wrapper = shallowMount( PokemonPage, { 
    //         data(){ // esto es loque vamos a mandar a pokemonOptions
    //             return {
    //                 pokemonArr: pokemons, 
    //                 pokemon: null,
    //                 showPokemon: false,
    //                 showAnswer: false,
    //                 message: "",
    //               };
    //         }
    //     } )
    //         expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()
    //         //Pokemon picture de de existir
    //         //Pokemon picture pokeonId sea igual a 1 (posicion 0)
    //         //Pokemon option de de existir. componente tobe(true)
    //         //Pokemon optition tenga atributo pokemons toBe(true)

    // })

})