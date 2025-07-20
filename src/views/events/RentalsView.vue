<template>
  <div class="page-content">
    <!-- Section 1: Main Introduction -->
    <section class="service-intro">
      <h2>Rentals & Inventory</h2>
      <p class="subtitle">The Finishing Touches for Your Perfect Event</p>
      <p>
        Gain access to our curated collection of high-quality event rentals. From tables and chairs
        to unique decor pieces and lighting, we provide the essential elements to complete your
        event's look and feel, all in one place.
      </p>
    </section>

    <!-- Section 2: Visual Feature Highlight -->
    <section class="feature-highlight">
      <div class="feature-image">
        <!-- Replace with a real, high-quality image of various rental items set up -->
        <img
          src="https://via.placeholder.com/600x400.png/c4a265/2c3e50?text=Curated+Inventory"
          alt="A collection of event rental items"
        />
      </div>
      <div class="feature-text">
        <h3>Quality You Can See and Feel</h3>
        <p>
          We pride ourselves on maintaining a pristine inventory of stylish and reliable event
          essentials. Our team will help you select the perfect pieces to match your theme and
          handle all the logistics of delivery, setup, and pickup.
        </p>
      </div>
    </section>

    <!-- Section 3: "What's Included" Grid - Adapted for categories -->
    <section class="whats-included">
      <h3>Browse Our Rental Categories</h3>
      <div class="included-grid">
        <div class="included-item">
          <div class="icon-placeholder">🪑</div>
          <h4>Tables & Seating</h4>
          <p>A wide selection of chairs, banquet tables, cocktail tables, and lounge furniture.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🍽️</div>
          <h4>Linens & Tableware</h4>
          <p>Premium linens, chargers, glassware, and flatware in various styles.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">💡</div>
          <h4>Lighting & Effects</h4>
          <p>Uplighting, string lights, gobos, and special effect lighting to set the mood.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✨</div>
          <h4>Decor & Centerpieces</h4>
          <p>Vases, candle holders, backdrops, arches, and other unique decor items.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">⛺</div>
          <h4>Tents & Structures</h4>
          <p>High-quality tents, flooring, and staging for outdoor events of all sizes.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🔊</div>
          <h4>Audiovisual Gear</h4>
          <p>Sound systems, microphones, projectors, and screens for presentations.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Call to Action (CTA) -->
    <section class="cta-section">
      <h2>Find the Perfect Items for Your Event</h2>
      <p>Use our quote calculator to select items and get an instant estimate.</p>
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
