<template>
  <div>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
      <h1>¿Quien es este?</h1>
      <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
      <PokemonOptions
        :pokemons="pokemonArr"
        @poke-selection="checkAnswer($event)"
      />
      <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame">Nuevo Juego</button>
      </template>
    </div>
  </div>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonsOptions from "@/helpers/getPokemonOptions.js";

//console.log("getPokemonsOtions, es una promesa--->", getPokemonsOptions());

export default {
  components: {
    PokemonImage,
    PokemonOptions,
  },

  data() {
    // es reactivo, Vue esta pendiente de cualquier cambio
    return {
      pokemonArr: [], // esto es loque vamos a mandar a pokemonOptions
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonsOptions();
      const rndInt = Math.floor(Math.random() * 4); // crea numero aleatorio para elegir un pokemon aleatorio
      this.pokemon = this.pokemonArr[rndInt];
      console.log(this.pokemon);
    },

    checkAnswer(pokemonId) {
      console.log("pokemon page", pokemonId);
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.showPokemon = true;
        this.message = `Correcto!!`;
      } else {
        this.message = `Oppss!! el correcto es ${this.pokemon.name}`;
      }
    },
    newGame() {
      (this.pokemonArr = []), // esto es loque vamos a mandar a pokemonOptions
        (this.pokemon = null),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.message = "");
      this.mixPokemonArr();
    },
  },
  mounted() {
    this.mixPokemonArr();
  },
};
</script>
