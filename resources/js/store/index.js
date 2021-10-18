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
        token: null,
        tempForm: {
            id: null,
            nombre: null,
            nacimiento: null,
            genero: null,
            tipoDocumento: null,
            documento: null,
            fechaExpedicion: null,
            lugarExpedicion: null,
            libretaMilitar: null,
            distrito: null,
            anio: null,
            categoria: null,
            licencia: null,
            categoriaLicencia: null,
            tieneVehiculo: null,
            tipoVehiculo: null,
            estadoCivil: null,
            direccion: null,
            barrio: null,
            comuna: null,
            estrato: null,
            celular: null,
            email: null,
            segundaLengua: null,
            tarjetaProfesional: null,
            discapacidad: null,
            tipoDiscapacidad: null,
            personasCargo: null,
            totalCargo: null,
            parentesco: null,
            desplazado: null,
            rupd: null,
            beneficiario: null,
            formacion: null,
            otraFormacion: null,
            situacionGeneral: null,
            situacionLaboral: null,
            salud: null,
            eps: null,
            tipoEps: null,
            sisben: null,
            nivelSisben: null,
            jefeHogar: null,
            otroJefeHogar: null,
            comparteHogar: null,
            familiares: [
                {
                    id: 1,
                    nombre: null,
                    edad: null,
                    estudio: null,
                    parentesco: null,
                    ocupacion: null,
                    telefono: null
                }
            ],
            formacionRequerida: null,
            otraFormacionRequerida: null,
            idea: null,
            funcionando: null,
            tiempoFuncionamiento: null,
            venta: null,
            oportunidad: null,
            otroOportunidad: null,
            expectativa: null,
            otroExpectativa: null,
            nacimientoIdea: null,
            otroNacimientoIdea: null,
            formacion: null,
            experiencia: null,
            clientes: null,
            recursos: null,
            otroRecurso: null,
            fecha: null
        },
        emptyForm: {
            id: null,
            nombre: null,
            nacimiento: null,
            genero: null,
            tipoDocumento: null,
            documento: null,
            fechaExpedicion: null,
            lugarExpedicion: null,
            libretaMilitar: null,
            distrito: null,
            anio: null,
            categoria: null,
            licencia: null,
            categoriaLicencia: null,
            tieneVehiculo: null,
            tipoVehiculo: null,
            estadoCivil: null,
            direccion: null,
            barrio: null,
            comuna: null,
            estrato: null,
            celular: null,
            email: null,
            segundaLengua: null,
            tarjetaProfesional: null,
            discapacidad: null,
            tipoDiscapacidad: null,
            personasCargo: null,
            totalCargo: null,
            parentesco: null,
            desplazado: null,
            rupd: null,
            beneficiario: null,
            formacion: null,
            otraFormacion: null,
            situacionGeneral: null,
            situacionLaboral: null,
            salud: null,
            eps: null,
            tipoEps: null,
            sisben: null,
            nivelSisben: null,
            jefeHogar: null,
            otroJefeHogar: null,
            comparteHogar: null,
            familiares: [
                {
                    id: 1,
                    nombre: null,
                    edad: null,
                    estudio: null,
                    parentesco: null,
                    ocupacion: null,
                    telefono: null
                }
            ],
            formacionRequerida: null,
            otraFormacionRequerida: null,
            idea: null,
            funcionando: null,
            tiempoFuncionamiento: null,
            venta: null,
            oportunidad: null,
            otroOportunidad: null,
            expectativa: null,
            otroExpectativa: null,
            nacimientoIdea: null,
            otroNacimientoIdea: null,
            formacion: null,
            experiencia: null,
            clientes: null,
            recursos: null,
            otroRecurso: null,
            fecha: null
        },
        formularios: []
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
        },
        setForm(state, { key, value }) {
            state.tempForm[key] = value;
        },
        setAllForm(state, id) {
            state.formularios.map(form => {
                if (form.id === id) {
                    const keys = Object.keys(form);
                    keys.map(key => {
                        Vue.set(state.tempForm, key, form[key]);
                    });
                }
            });
        },
        setFormulario(state, data) {
            state.formularios.push(data);
        },
        resetForm(state) {
            const keys = Object.keys(state.tempForm);

            keys.map(key => {
                state.tempForm[key] = state.emptyForm[key];
            });
        },
        deleteForm(state, id) {
            let index = state.formularios.filter((form, index) => {
                if (form.id === id) {
                    return index;
                }
            });

            state.formularios.splice(index, 1);
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
        },
        setForm({ commit }, { key, value }) {
            commit("setForm", { key, value });
        },
        setFormulario({ commit }, data) {
            commit("setFormulario", data);
        },
        setAllForm({ commit }, data) {
            commit("setAllForm", data);
        },
        resetForm({ commit }) {
            commit("resetForm");
        },
        deleteForm({ commit }, id) {
            commit("deleteForm", id);
        }
    },
    plugins: [
        createPersistedState({
            key: "cemprendo",
            storage: {
                getItem: key => ls.get(key),
                setItem: (key, value) => ls.set(key, value),
                removeItem: key => ls.remove(key)
            }
        })
    ]
});

export default store;
