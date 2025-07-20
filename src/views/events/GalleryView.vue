<template>
  <div class="page-content">
    <section class="service-intro">
      <h2>Event Gallery</h2>
      <p class="subtitle">Inspiration for Your Unforgettable Moment</p>
      <p>
        Explore a collection of moments from some of the beautiful events we've had the honor of
        bringing to life. Let these stories spark inspiration for your own.
      </p>
    </section>

    <div class="gallery-grid">
      <!-- In a real app, you would loop through an array of image objects -->
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Corporate Gala"
        />
        <div class="overlay">
          <h3>Corporate Gala</h3>
          <p>An elegant evening of celebration and networking.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd51622?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Elegant Wedding"
        />
        <div class="overlay">
          <h3>Elegant Wedding</h3>
          <p>A romantic and timeless matrimonial celebration.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1579542791624-9a8c160997a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Product Launch"
        />
        <div class="overlay">
          <h3>Product Launch</h3>
          <p>A dynamic and engaging brand experience.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Outdoor Festival"
        />
        <div class="overlay">
          <h3>Outdoor Festival</h3>
          <p>A vibrant community gathering with live music.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1594488541293-9c87d46174a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Intimate Dinner"
        />
        <div class="overlay">
          <h3>Intimate Dinner Party</h3>
          <p>A curated culinary experience for close friends.</p>
        </div>
      </div>
      <div class="gallery-item">
        <img
          src="https://images.unsplash.com/photo-1593113646773-4621b3a0ca76?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600"
          alt="Charity Fundraiser"
        />
        <div class="overlay">
          <h3>Charity Fundraiser</h3>
          <p>An inspiring evening dedicated to a great cause.</p>
        </div>
      </div>
    </div>

    <!-- Reusable CTA Section -->
    <section class="cta-section">
      <h2>Inspired by What You See?</h2>
      <p>
        Let's turn your inspiration into reality. We're here to help you plan your perfect event.
      </p>
      <RouterLink to="/get-a-quote" class="cta-button">Start Planning Now</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.page-content {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.service-intro {
  text-align: center;
  margin-bottom: 4rem;
}
.service-intro h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-serif);
  color: var(--color-heading);
}
.service-intro .subtitle {
  font-size: 1.2rem;
  color: var(--color-primary-cta);
  font-weight: 600;
  margin-bottom: 1rem;
}
.service-intro p {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  aspect-ratio: 4 / 3; /* Maintain aspect ratio */
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 1; /* Always visible for better readability */
  transition: opacity 0.4s ease;
}

.overlay h3 {
  font-size: 1.5rem;
  font-family: var(--font-serif);
  margin: 0;
  transform: translateY(20px);
  transition: transform 0.4s ease;
}

.overlay p {
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
  transition-delay: 0.1s; /* Slight delay */
}

.gallery-item:hover .overlay h3,
.gallery-item:hover .overlay p {
  transform: translateY(0);
}

.gallery-item:hover .overlay p {
  opacity: 1;
}

/* GENERAL PAGE STYLING */
.page-content {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.page-content h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: var(--font-serif);
  color: var(--color-heading);
}

.page-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

/* SECTION 1: INTRO */
.service-intro {
  text-align: center;
  margin-bottom: 4rem;
}
.service-intro .subtitle {
  font-size: 1.2rem;
  color: var(--color-primary-cta);
  font-weight: 600;
  margin-bottom: 1rem;
}
.service-intro p {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

/* SECTION 2: FEATURE HIGHLIGHT (IMAGE + TEXT) */
.feature-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
}
.feature-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.feature-text p {
  line-height: 1.8;
  color: var(--color-text);
}

/* Make it stack on smaller screens */
@media (max-width: 768px) {
  .feature-highlight {
    grid-template-columns: 1fr;
  }
}

/* SECTION 3: "WHAT'S INCLUDED" GRID */
.whats-included {
  text-align: center;
  margin-bottom: 5rem;
}
.whats-included h3 {
  font-size: 2rem;
  margin-bottom: 3rem;
}
.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  text-align: left;
}
.included-item {
  background: #f9f9f9;
  padding: 2rem;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.included-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.08);
}
.included-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
.icon-placeholder {
  font-size: 1.5rem;
  color: var(--color-primary-cta);
  background-color: #fff;
  border: 2px solid #e0e0e0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-weight: 700;
}

/* SECTION 4: CALL TO ACTION */
.cta-section {
  text-align: center;
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  padding: 4rem 2rem;
  border-radius: 8px;
  margin-top: 2rem;
}
.cta-section h2 {
  color: var(--color-white);
}
.cta-section p {
  max-width: 500px;
  margin: 0 auto 2rem auto;
  opacity: 0.9;
}
.cta-button {
  display: inline-block;
  background-color: var(--color-primary-cta);
  color: var(--color-dark-slate);
  padding: 1rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
}
.cta-button:hover {
  background-color: #d4a056; /* slightly lighter gold */
  transform: translateY(-3px);
}
</style>
