import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vuetify from './plugins/vuetify'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.use(
  VeeValidate,
  {
    aria: true,
    dictionary: {
      en: {
        messages: {
          required: 'This field must not be empty'
        }
      }
    }
  }
)

new Vue({
  router,
  store,
  vuetify,
  // async created () {
  //   await this.$store.dispatch('getCurrentUser')
  // },
  render: h => h(App)
}).$mount('#app')
