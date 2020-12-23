import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeData:[
      {
        num:1
      }
    ],
  },
  getters: {
    getStoreData(state){
      return state.storeData
    }
  },
  mutations: {
    setStoreData(state,payload){
      state.storeData = payload
    }
  },
  actions: {
    sendData({commit},payload){
      fetch('https://run.mocky.io/v3/60bc17d2-31f8-477c-95d2-ac178ed98bb5', payload).then((rep)=>{
        if(rep?.status!==200) return Promise.reject('error')  
      return rep.json()
      }).then((json)=>{
        console.log(json)
        
        commit('setStoreData',json)
      })
    }
  },
  modules: {}
});
