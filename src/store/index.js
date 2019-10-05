import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)
const state = {
  active: 0, // 用于路由跳转，不步骤激活
  leftShow: false,
  fileName: '', // img name
  data: [], //  rgb
  imgData: {}, // img属性等如 height width.
  dataUrl: '', // img base64
  grayImageDate: {},
  rectArea: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA,
  }
})