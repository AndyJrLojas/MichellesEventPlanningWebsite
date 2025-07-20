<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isEventsDropdownOpen = ref(false)
</script>

<template>
  <header>
    <div class="brand">
      <RouterLink to="/">WellPRO</RouterLink>
    </div>

    <nav>
      <RouterLink to="/#about" class="link-gold">About Us</RouterLink>

      <div class="nav-item dropdown" @mouseleave="isEventsDropdownOpen = false">
        <a
          class="dropdown-toggle"
          @mouseover="isEventsDropdownOpen = true"
          @click="isEventsDropdownOpen = !isEventsDropdownOpen"
          :class="{ 'router-link-active': $route.path.startsWith('/events') }"
          aria-haspopup="true"
          :aria-expanded="isEventsDropdownOpen"
        >
          Events
          <svg class="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
          </svg>
        </a>

        <div v-if="isEventsDropdownOpen" class="dropdown-menu">
          <RouterLink to="/events/planning" @click="isEventsDropdownOpen = false"
            >Event Planning</RouterLink
          >
          <RouterLink to="/events/design" @click="isEventsDropdownOpen = false"
            >Event Design</RouterLink
          >
          <RouterLink to="/events/coordination" @click="isEventsDropdownOpen = false"
            >Coordination</RouterLink
          >
          <RouterLink to="/events/rentals" @click="isEventsDropdownOpen = false"
            >Rentals & Inventory</RouterLink
          >
          <RouterLink to="/events/gallery" @click="isEventsDropdownOpen = false"
            >Gallery</RouterLink
          >
        </div>
      </div>

      <RouterLink to="/wellness">Wellness</RouterLink>
      <RouterLink to="/#contact" class="link-gold">Contact</RouterLink>
    </nav>

    <div class="header-action">
      <RouterLink to="/get-a-quote" class="cta-button">Get A Quote</RouterLink>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>© 2025 WellPRO Event Services. All rights reserved.</p>
  </footer>
</template>

<style scoped>
header {
  background-color: var(--color-background);
  padding: 1.5rem 5%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  justify-self: start;
}
.brand a {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-heading);
  text-decoration: none;
}

.header-action {
  justify-self: end;
}

nav {
  display: flex;
  align-items: center;
  gap: 3rem;
}

nav a,
.dropdown-toggle {
  position: relative;
  font-family: var(--font-sans);
  font-weight: 600;
  color: var(--color-heading);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  padding-bottom: 15px;
}

nav a.link-gold,
.dropdown-toggle.link-gold {
  color: var(--color-primary-cta);
}

nav a::after,
.dropdown-toggle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-primary-cta);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

nav a:hover::after,
.dropdown-toggle:hover::after,
nav a.router-link-exact-active::after,
.dropdown-toggle.router-link-active::after {
  transform: scaleX(1);
}

nav a:hover,
.dropdown-toggle:hover {
  color: var(--color-primary-cta);
}

.dropdown-toggle {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.dropdown-arrow {
  width: 18px;
  height: 18px;
  fill: currentColor;
  margin-left: 0.5em;
  transition: transform 0.3s ease;
}
.dropdown-toggle:hover .dropdown-arrow,
.dropdown-toggle.router-link-active .dropdown-arrow {
  transform: translateY(2px);
}

/* --- DROPDOWN FIX STARTS HERE --- */

.nav-item.dropdown {
  position: relative;
  display: inline-block;
  /* DELETED: The problematic padding and margin that complicated the layout */
  /* padding-bottom: 15px; */
  /* margin-bottom: -15px; */
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  /* UPDATED: Creates visual space INSIDE the menu, preventing a hover gap */
  padding: 1rem 0;

  /* DELETED: This margin was the cause of the invisible gap */
  /* margin-top: 5px; */

  min-width: 220px; /* Slightly increased for better text fit */
  z-index: 110;
  display: flex;
  flex-direction: column;
}
/* --- DROPDOWN FIX ENDS HERE --- */

.dropdown-menu a {
  color: var(--color-text);
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-align: left;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
}

.dropdown-menu a.router-link-active {
  color: var(--color-primary-cta);
  font-weight: 700;
}

.cta-button {
  background-color: var(--color-primary-cta);
  color: var(--color-dark-slate);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.cta-button:hover {
  background-color: #d4a056; /* A slightly lighter gold for hover */
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

footer {
  text-align: center;
  padding: 3rem 5%;
  margin-top: 4rem;
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  font-size: 0.9rem;
}
</style>
