// main.js
import { createApp } from 'vue'
import Bootstrap from './Bootstrap.vue'
import './stylesheets/default.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Импорт иконок, которые используются в компоненте
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

// Добавляем иконки в библиотеку
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

// Регистрируем компонент глобально, чтобы не импортировать в каждом компоненте
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#root')
