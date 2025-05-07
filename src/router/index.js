import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'
import Contact from '../views/Contact.vue'
import Reservation from '../views/Reservation.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
  { path: '/reservation', component: Reservation },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
