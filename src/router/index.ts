import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WellnessView from '../views/WellnessView.vue'

// --- Event views ---
import EventsView from '../views/EventsView.vue'
import EventPlanningView from '../views/events/PlanningView.vue'
import EventDesignView from '../views/events/DesignView.vue'
import EventCoordinationView from '../views/events/CoordinationView.vue'
import EventRentalsView from '../views/events/RentalsView.vue'
import EventGalleryView from '../views/events/GalleryView.vue'

// 👇 IMPORT THE NEW QUOTE CALCULATOR VIEW
import QuoteCalculatorView from '../views/QuoteCalculatorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wellness',
      name: 'wellness',
      component: WellnessView,
    },
    {
      path: '/events',
      component: EventsView,
      redirect: '/events/planning',
      children: [
        { path: 'planning', name: 'event-planning', component: EventPlanningView },
        { path: 'design', name: 'event-design', component: EventDesignView },
        { path: 'coordination', name: 'event-coordination', component: EventCoordinationView },
        { path: 'rentals', name: 'event-rentals', component: EventRentalsView },
        { path: 'gallery', name: 'event-gallery', component: EventGalleryView },
      ],
    },
    // 👇 ADD THIS NEW ROUTE OBJECT
    {
      path: '/get-a-quote',
      name: 'quote-calculator',
      component: QuoteCalculatorView,
    },
  ],
  // Your scroll behavior function is perfect, leave it as is.
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
