<template>
  <div class="page-content">
    <!-- Section 1: Main Introduction -->
    <section class="service-intro">
      <h2>Seamless Day-Of Coordination</h2>
      <p class="subtitle">Be a Guest at Your Own Event</p>
      <p>
        You've done the planning, now it's time to enjoy your event. Our coordination service
        ensures everything runs smoothly on the big day. We manage the timeline, direct vendors, and
        handle any unforeseen issues, so you can relax and be fully present.
      </p>
    </section>

    <!-- Section 2: Visual Feature Highlight -->
    <section class="feature-highlight-reversed">
      <div class="feature-text">
        <h3>Your Peace of Mind is Our Priority</h3>
        <p>
          Weeks before your event, we'll connect with all your vendors, create a detailed timeline,
          and conduct a final walkthrough. On the day, we are the first to arrive and the last to
          leave, ensuring your vision is executed perfectly while you celebrate.
        </p>
      </div>
      <div class="feature-image">
        <!-- Replace with a real, high-quality image of a coordinator managing an event -->
        <img
          src="https://via.placeholder.com/600x400.png/c4a265/2c3e50?text=Expert+Coordination"
          alt="Event coordinator managing an event"
        />
      </div>
    </section>

    <!-- Section 3: "What's Included" Grid -->
    <section class="whats-included">
      <h3>Our Coordination Services Include:</h3>
      <div class="included-grid">
        <div class="included-item">
          <div class="icon-placeholder">📋</div>
          <h4>Timeline Management</h4>
          <p>Creating and executing a detailed minute-by-minute event timeline.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🤝</div>
          <h4>Vendor Direction</h4>
          <p>Serving as the single point of contact for all vendors on the event day.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🛠️</div>
          <h4>Setup & Teardown</h4>
          <p>Overseeing the complete setup and breakdown of the event space.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🆘</div>
          <h4>Problem Solving</h4>
          <p>Discreetly handling any unexpected challenges that may arise.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🤵</div>
          <h4>Guest Assistance</h4>
          <p>Ensuring your guests feel welcomed, informed, and comfortable.</p>
        </div>
        <div class="included-item">
          <div class="icon-placeholder">🎁</div>
          <h4>Final Details</h4>
          <p>Managing final payments, tips, and the collection of personal items.</p>
        </div>
      </div>
    </section>

    <!-- Section 4: Call to Action (CTA) -->
    <section class="cta-section">
      <h2>Ready to Enjoy a Stress-Free Event?</h2>
      <p>Let us handle the details so you can make memories. Get a personalized quote.</p>
      <RouterLink to="/get-a-quote" class="cta-button">Build Your Quote</RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* NOTE: We add one extra class for the reversed layout */
.feature-highlight-reversed {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
}
@media (max-width: 768px) {
  .feature-highlight-reversed {
    grid-template-columns: 1fr;
  }
  .feature-highlight-reversed .feature-text {
    order: 2; /* Flips order on mobile */
  }
  .feature-highlight-reversed .feature-image {
    order: 1;
  }
}
.feature-highlight-reversed .feature-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.feature-highlight-reversed .feature-text p {
  line-height: 1.8;
  color: var(--color-text);
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
