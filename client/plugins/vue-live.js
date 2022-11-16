import Vue from 'vue'
import { VueLive } from 'vue-live'
import 'vue-live/style.css'

Vue.component('VueLive', {
    render(h) {
        return h(VueLive, { props: { ...this.$attrs } })
    },
})
