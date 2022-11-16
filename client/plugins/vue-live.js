import Vue from 'vue'
import { VueLive } from 'vue-live'
import 'vue-live/lib/vue-live.esm.css'

Vue.component('VueLive', {
    render(h) {
        return h(VueLive, { props: { ...this.$attrs } })
    },
})
