import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WellnessView from '../views/WellnessView.vue'

// --- 👇 Import the new event views ---
import EventsView from '../views/EventsView.vue'
import EventPlanningView from '../views/events/PlanningView.vue'
import EventDesignView from '../views/events/DesignView.vue'
import EventCoordinationView from '../views/events/CoordinationView.vue'
import EventRentalsView from '../views/events/RentalsView.vue'
import EventGalleryView from '../views/events/GalleryView.vue'

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
    // --- 👇 Add the new nested route for Events ---
    {
      path: '/events',
      component: EventsView, // This is the parent component with the sub-nav
      // Redirect to the first service when someone visits `/events` directly
      redirect: '/events/planning',
      children: [
        { path: 'planning', name: 'event-planning', component: EventPlanningView },
        { path: 'design', name: 'event-design', component: EventDesignView },
        { path: 'coordination', name: 'event-coordination', component: EventCoordinationView },
        { path: 'rentals', name: 'event-rentals', component: EventRentalsView },
        { path: 'gallery', name: 'event-gallery', component: EventGalleryView },
      ],
    },
  ],
  // Keep your excellent scroll behavior function
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
