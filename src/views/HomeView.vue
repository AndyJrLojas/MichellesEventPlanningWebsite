<script setup lang="ts">
// We need to import the image to use it in the template
import heroImage from '@/assets/hero-image.jpg'
</script>

<template>
  <main>
    <!-- 1. HERO SECTION (Two-column layout) -->
    <section id="hero" class="hero-section">
      <div class="hero-text-panel">
        <div class="hero-text-content">
          <h1>
            Helping You Plan
            <br />
            <span class="script-text">Smarter</span> Not Harder
          </h1>
          <p>
            You're a hardworking professional with great ideas. The problem is, organizing a
            flawless event takes time and expertise. That's where we come in.
          </p>
          <a href="#contact" class="cta-button">Plan Your Event Today</a>
        </div>
      </div>
      <div class="hero-image-panel">
        <img :src="heroImage" alt="Professional event planner" />
      </div>
    </section>

    <!-- 2. BIO / ABOUT US SECTION -->
    <section id="about" class="page-section content-section">
      <h2>From Big Ideas to Unforgettable Realities</h2>
      <p>
        Over 10 years ago, we started with a simple passion: bringing people together. We’ve learned
        that a great event isn't just about the logistics; it's about the feeling you create. It's
        about working smarter, not harder, to craft a seamless experience that lets you shine. We
        handle the details so you can enjoy the moment.
      </p>
    </section>

    <!-- 3. SERVICES SECTION (Like "What You'll Get" / "Who This is for") -->
    <section id="services" class="dual-panel-section">
      <div class="panel dark-panel">
        <h2>What You'll Get</h2>
        <ul>
          <li>
            <strong>Industry-Specific Expertise:</strong> We understand the unique challenges of
            corporate, social, and non-profit events.
          </li>
          <li>
            <strong>No Cookie-Cutter Strategies:</strong> Your event plan is customized based on
            your specific goals, audience, and vision.
          </li>
          <li>
            <strong>Transparent Process:</strong> We explain exactly what we’re doing and why, with
            no jargon or hidden details.
          </li>
          <li>
            <strong>Results-Focused Approach:</strong> We measure success by your new client
            inquiries, guest satisfaction, and flawless execution.
          </li>
        </ul>
      </div>
      <div class="panel light-panel">
        <h2>Who This Is For</h2>
        <ul>
          <li><strong>Businesses</strong> seeking to host impactful corporate events.</li>
          <li><strong>Couples</strong> planning their dream wedding.</li>
          <li><strong>Organizations</strong> wanting to create memorable fundraisers.</li>
          <li><strong>Individuals</strong> tired of the stress of event planning.</li>
        </ul>
      </div>
    </section>

    <!-- 4. CONTACT SECTION -->
    <section id="contact" class="page-section content-section">
      <h2>Let's Create Something Amazing</h2>
      <p>
        Ready to start planning? We'd love to hear from you. Reach out to us for a complimentary
        consultation.
      </p>
      <div class="contact-details">
        <p>
          <strong>Email:</strong>
          <a href="mailto:contact@wellproevents.com">contact@wellproevents.com</a>
        </p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* --- Hero Section --- */
.hero-section {
  display: grid;
  grid-template-columns: 1fr; /* Default to single column for mobile */
  min-height: 80vh;
}

.hero-text-panel {
  background-color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: var(--color-white);
}

.hero-text-content {
  max-width: 500px;
}

.hero-text-content h1 {
  font-size: 3.5rem;
  line-height: 1.2;
  color: var(--color-white);
}

.hero-text-content .script-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

.hero-text-content p {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  margin: 1.5rem 0 2.5rem;
  opacity: 0.9;
}

.cta-button {
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-family: var(--font-sans);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-image-panel {
  background-color: #eee;
}

.hero-image-panel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px; /* Ensure image has height on mobile */
}

/* --- Content Section (About, Contact) --- */
.content-section {
  padding: 6rem 2rem;
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.content-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
}

/* --- Dual Panel Section (Services) --- */
.dual-panel-section {
  display: grid;
  grid-template-columns: 1fr; /* Mobile first */
  color: var(--color-white);
}

.panel {
  padding: 4rem 2rem;
}

.panel h2 {
  color: var(--color-white);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.panel ul {
  list-style-type: none;
}

.panel li {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: var(--font-sans);
}

.dark-panel {
  background-color: var(--color-dark-slate);
}

.light-panel {
  background-color: var(--color-gold);
}

/* --- Responsive Layout for larger screens --- */
@media (min-width: 992px) {
  .hero-section {
    grid-template-columns: 55% 45%; /* Two columns on desktop */
  }

  .dual-panel-section {
    grid-template-columns: 1fr 1fr; /* Two columns on desktop */
  }

  .panel {
    padding: 6rem 4rem;
  }
}
</style>
