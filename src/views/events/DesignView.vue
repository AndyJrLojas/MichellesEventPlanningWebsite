<template>
  <div class="page-content">
    <!-- Section 1: Main Introduction -->
    <section class="service-intro">
      <h2>Creative Event Design</h2>
      <p class="subtitle">Crafting Atmospheres, Creating Memories</p>
      <p>
        We believe an event should be an immersive experience. Our design team works with you to
        create a cohesive theme, from stunning floral arrangements and lighting to custom stationery
        and decor, crafting an atmosphere that truly wows your guests.
      </p>
    </section>

    <!-- Section 2: Visual Feature Highlight -->
    <section class="feature-highlight">
      <div class="feature-image">
        <!-- Replace with a real, high-quality image of a beautifully designed event space -->
        <img
          src="https://via.placeholder.com/600x400.png/c4a265/2c3e50?text=Stunning+Event+Decor"
          alt="Beautifully designed event table"
        />
      </div>
      <div class="feature-text">
        <h3>Aesthetics with Purpose</h3>
        <p>
          Our design process is collaborative and creative. We develop mood boards and 3D renderings
          to help you visualize the space, ensuring every element—from the color palette to the
          texture of the linens—aligns perfectly with your vision.
        </p>
      </div>
    </section>

    <!-- Section 3: "What's Included" Grid -->
    <section class="whats-included">
      <h3>Our Design Services Include:</h3>
      <div class="included-grid">
        <div class="included-item">
          <div class="icon-placeholder">🎨</div>
          <h4>Theme & Concept</h4>
          <p>Developing a unique and cohesive theme that tells your story.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">💡</div>
          <h4>Lighting Design</h4>
          <p>Creating ambiance and highlighting key features with professional lighting.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">💐</div>
          <h4>Floral & Decor</h4>
          <p>Sourcing and styling stunning floral arrangements and decor elements.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🛋️</div>
          <h4>Layout & Space Plan</h4>
          <p>Optimizing the event flow and guest experience with strategic layouts.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">💌</div>
          <h4>Custom Stationery</h4>
          <p>Designing everything from invitations and menus to signage and place cards.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🖼️</div>
          <h4>Mood Boards</h4>
          <p>Providing detailed visual guides to ensure a cohesive final look.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Call to Action (CTA) -->
    <section class="cta-section">
      <h2>Ready to Design Your Dream Event?</h2>
      <p>Let's craft a beautiful and memorable experience. Get a personalized quote today.</p>
      <RouterLink to="/get-a-quote" class="cta-button">Build Your Quote</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
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
