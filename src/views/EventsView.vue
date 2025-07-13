<template>
  <main>
    <!-- Hero for the main Events page -->
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Our Event Services</h1>
        <p>Full-service solutions to bring your vision to life.</p>
      </div>
    </section>

    <!-- Sub-navigation for the different event services -->
    <div class="sub-nav-wrapper">
      <nav class="sub-nav">
        <RouterLink to="/events/planning">Event Planning</RouterLink>
        <RouterLink to="/events/design">Event Design</RouterLink>
        <RouterLink to="/events/coordination">Coordination</RouterLink>
        <RouterLink to="/events/rentals">Rentals & Inventory</RouterLink>
        <RouterLink to="/events/gallery">Gallery</RouterLink>
      </nav>
    </div>

    <!-- This will render the active child component (Planning, Design, etc.) -->
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.page-hero {
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  text-align: center;
  padding: 5rem 2rem;
}
.page-hero h1 {
  color: var(--color-white);
  font-size: 3rem;
}
.page-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-top: 1rem;
}

.sub-nav-wrapper {
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
  padding: 0 2rem;
  position: sticky;
  top: 81px; /* Height of your main header */
  z-index: 90;
}
.sub-nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.sub-nav a {
  padding: 1rem 1.5rem;
  color: var(--color-text);
  font-family: var(--font-sans);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
}
.sub-nav a:hover {
  background-color: #e9e9e9;
  color: var(--color-heading);
}
.sub-nav a.router-link-exact-active {
  color: var(--color-primary-cta);
  border-bottom-color: var(--color-primary-cta);
  font-weight: 600;
}
</style>
