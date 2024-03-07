import Vue from 'vue'
import App from './App.vue'
import AudioRecorder from 'vue-audio-recorder'
import './assets/css/tailwind.css'
import './registerServiceWorker'


Vue.use(AudioRecorder)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
