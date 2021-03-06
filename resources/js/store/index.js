import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
import axios from "axios";
const ls = new SecureLS({ isCompression: false });
import { loginRequest, logoutRequest } from "../api/auth";
import { getCurrentUser } from "../api/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        load: false,
        user: null,
        token: null
    },
    mutations: {
        setLoad(state, data) {
            state.load = data;
        },
        setUser(state, data) {
            state.user = data;
        },
        setToken(state, data) {
            state.token = data;
        }
    },
    actions: {
        setLoad({ commit }, data) {
            commit("setLoad", data);
        },
        login({ commit }, data) {
            return new Promise((resolve, reject) => {
                loginRequest(data)
                    .then(response => {
                        commit("setToken", response.data.content.access_token);
                        getCurrentUser()
                            .then(({ data }) => {
                                commit("setUser", data.content);
                                resolve(response);
                            })
                            .catch(err => {
                                reject(err);
                            });
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                logoutRequest()
                    .then(response => {
                        commit("setToken", null);
                        commit("setUser", null);
                        delete axios.defaults.headers.common["Authorization"];
                        resolve(response);
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        }
    },
    plugins: [
        createPersistedState({
            key: "laravel-template",
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
});

export default store;
