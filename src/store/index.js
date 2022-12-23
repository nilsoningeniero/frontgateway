import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
axios.defaults.withCredentials=true;

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        usuario: null,
        auth: false
    },
    mutations: {
        SET_USUARIO(state, user) {
            state.usuario = user;
            state.auth = Boolean(user);
        }
    },
    actions: {
        async login( { dispatch }, credenciales) {
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('api/login', credenciales);
            return dispatch("getUsuario");
        },
        async logout( { dispatch }) {
            await axios.put('api/logout');
            return dispatch("getUsuario");
        },
        getUsuario( {commit} ) {
            axios
                .get("api/users")
                .then(res => {
                    console.log(res.data[0].name);
                    commit('SET_USUARIO', res.data[0].name)
                })
                .catch( () => {
                    commit('SET_USUARIO', null)
                });

        }
    },
    modules: {

    }
})