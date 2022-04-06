import Vuex from "vuex";
import axios from "axios";

const resourceHost = "http://api.nuxtproject-sample.com";

const store = () =>
  new Vuex.Store({
    state: {
      accessToken: null
    },
    getters: {},
    mutations: {
      login(state, payload) {
        state.accessToken = payload.accessToken;
      },
      logout(state) {
        state.accessToken = null;
      }
    },
    actions: {
      login(context, payload) {
        console.log(payload);
        return context.commit("login", payload);
      },
      logout(context, payload) {
        return context.commit("logout");
      }
    }
  });

export default store;
