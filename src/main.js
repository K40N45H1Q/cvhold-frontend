import { createApp } from 'vue'
import Bootstrap from './Bootstrap.vue'
import './stylesheets/default.css'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBuilding,
  faIndustry,
  faShip,
  faDesktop,
  faBriefcaseMedical,
  faHotel,
  faThLarge,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBuilding,
  faIndustry,
  faShip,
  faDesktop,
  faBriefcaseMedical,
  faHotel,
  faThLarge,
  faArrowRight
)

const app = createApp(Bootstrap)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#root')
