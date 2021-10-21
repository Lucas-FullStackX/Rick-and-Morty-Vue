import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    test: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log(data.results);
        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
      } catch (err) {
        console.log(err);
      }
    },
    filterStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", results);
    },
    filterName({ commit, state }, name) {
      const search = name.toLowerCase();
      const result = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(search)) {
          return character;
        }
      });
      commit("setCharactersFilter", result);
    },
  },
  modules: {},
});
