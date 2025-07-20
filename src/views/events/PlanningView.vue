<template>
  <div class="page-content">
    <!-- Section 1: Main Introduction -->
    <section class="service-intro">
      <h2>Full-Service Event Planning</h2>
      <p class="subtitle">From Concept to Flawless Execution</p>
      <p>
        Our comprehensive planning service is designed for busy clients who want a stress-free
        experience from start to finish. We handle every intricate detail, acting as your creative
        partner and logistical expert to bring your vision to life.
      </p>
    </section>

    <!-- Section 2: Visual Feature Highlight -->
    <section class="feature-highlight">
      <div class="feature-image">
        <!-- Replace with a real, high-quality image of your team planning -->
        <img
          src="https://via.placeholder.com/600x400.png/c4a265/2c3e50?text=Collaborative+Planning"
          alt="Event planning session"
        />
      </div>
      <div class="feature-text">
        <h3>Your Vision, Our Expertise</h3>
        <p>
          We start by listening. Understanding your goals, style, and budget is the foundation of
          our process. We then translate your ideas into a concrete plan, managing everything from
          venue scouting and vendor negotiations to budget tracking and timeline creation.
        </p>
      </div>
    </section>

    <!-- Section 3: "What's Included" Grid -->
    <section class="whats-included">
      <h3>What's Included in Our Planning Service?</h3>
      <div class="included-grid">
        <div class="included-item">
          <!-- Icon Placeholder: Use real SVGs from a library like heroicons.com -->
          <div class="icon-placeholder">✓</div>
          <h4>Venue Selection</h4>
          <p>Finding the perfect backdrop for your event based on your needs and budget.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✓</div>
          <h4>Vendor Management</h4>
          <p>Coordinating with the best caterers, florists, photographers, and more.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✓</div>
          <h4>Budget & Timeline</h4>
          <p>Detailed tracking to keep your event on schedule and within budget.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✓</div>
          <h4>Guest Logistics</h4>
          <p>Managing RSVPs, seating arrangements, and guest communications.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✓</div>
          <h4>Event Design</h4>
          <p>Conceptualizing the theme, decor, and overall aesthetic of your event.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">✓</div>
          <h4>On-Site Coordination</h4>
          <p>Full management on the day of the event to ensure a seamless experience.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Call to Action (CTA) -->
    <section class="cta-section">
      <h2>Ready to Start Planning?</h2>
      <p>
        Let's create an unforgettable event together. Get a personalized quote based on your needs.
      </p>
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
