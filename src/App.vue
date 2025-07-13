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

    <!-- The main navigation is now in the center column of our grid -->
    <nav>
      <!-- Added a "link-gold" class for custom default styling -->
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
          <!-- Replaced text arrow with an SVG for a cleaner look -->
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
      <!-- Added a "link-gold" class for custom default styling -->
      <RouterLink to="/#contact" class="link-gold">Contact</RouterLink>
    </nav>

    <!-- This empty div acts as a spacer in our grid to keep the nav centered -->
    <div class="header-spacer"></div>
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
  /* 1. Switched to CSS Grid for perfect centering */
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* Left, Center, Right */
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  justify-self: start; /* Align brand to the left */
}
.brand a {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-heading);
  text-decoration: none;
}
.header-spacer {
  justify-self: end; /* This just fills the right column */
}

nav {
  display: flex;
  align-items: center;
  gap: 3rem; /* Increased space between nav items */
}

nav a,
.dropdown-toggle {
  position: relative; /* Needed for the ::after underline */
  font-family: var(--font-sans);
  font-weight: 600;
  color: var(--color-heading); /* Default color is now the dark slate */
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.5px; /* Increased letter spacing for elegance */
  padding-bottom: 15px; /* More space for the underline */
  /* Remove the border-bottom */
}

/* 2. Custom default color for specific links */
nav a.link-gold,
.dropdown-toggle.link-gold {
  color: var(--color-primary-cta);
}

/* 3. New Underline Style using ::after pseudo-element */
nav a::after,
.dropdown-toggle::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px; /* Thicker underline */
  background-color: var(--color-primary-cta);
  transform: scaleX(0); /* Hidden by default */
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

/* Show underline on hover or when the link is active */
nav a:hover::after,
.dropdown-toggle:hover::after,
nav a.router-link-exact-active::after,
.dropdown-toggle.router-link-active::after {
  transform: scaleX(1);
}

/* All links turn gold on hover */
nav a:hover,
.dropdown-toggle:hover {
  color: var(--color-primary-cta);
}

.dropdown-toggle {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

/* 4. SVG Arrow Styling */
.dropdown-arrow {
  width: 18px;
  height: 18px;
  fill: currentColor; /* The arrow will match the text color */
  margin-left: 0.5em;
  transition: transform 0.3s ease;
}
.dropdown-toggle:hover .dropdown-arrow,
.dropdown-toggle.router-link-active .dropdown-arrow {
  transform: translateY(2px);
}

/* --- Dropdown Menu Styles --- */
.nav-item.dropdown {
  position: relative;
  display: inline-block;
  padding-bottom: 15px; /* Match the link padding */
  margin-bottom: -15px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  margin-top: 5px; /* Small space from the nav */
  min-width: 200px;
  z-index: 110;
  display: flex;
  flex-direction: column;
}

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

footer {
  text-align: center;
  padding: 3rem 5%;
  margin-top: 4rem;
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  font-size: 0.9rem;
}
</style>
