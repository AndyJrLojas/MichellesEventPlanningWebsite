<script setup lang="ts">
// No script logic needed for this static page yet
</script>

<template>
  <main>
    <!-- 1. HERO SECTION FOR WELLNESS PAGE -->
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Corporate Wellness, Reimagined</h1>
        <p>Invest in your team's greatest asset: their well-being.</p>
      </div>
    </section>

    <!-- 2. WELLNESS SERVICES GRID -->
    <section class="page-section">
      <h2>Our Wellness Offerings</h2>
      <p class="section-intro">
        We design and execute bespoke wellness events that boost morale, improve productivity, and
        foster a positive company culture.
      </p>
      <div class="wellness-grid">
        <div class="wellness-card">
          <h3>Respite & Retreats</h3>
          <p>
            Curated off-site experiences designed for teams to disconnect, recharge, and return
            inspired.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Company Sports Days</h3>
          <p>
            Promote teamwork and friendly competition with a fully organized day of fun and games.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Fitness & Movement</h3>
          <p>
            On-site yoga, group fitness classes, and movement workshops led by certified
            instructors.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Nutrition Programs</h3>
          <p>
            Engaging workshops and healthy cooking demonstrations to empower better food choices.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Mental Wellness</h3>
          <p>
            Mindfulness sessions, stress management seminars, and resources for mental health
            support.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Workshops & Seminars</h3>
          <p>
            Expert-led sessions on a variety of topics, from financial wellness to work-life
            balance.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero for internal pages */
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

/* General page section styling */
.page-section {
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.page-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.section-intro {
  max-width: 650px;
  margin: 0 auto 3rem auto;
  font-size: 1.1rem;
}

/* Wellness Grid Styling */
.wellness-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  text-align: left;
}

.wellness-card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 2rem;
  border-radius: 8px;
  border-top: 5px solid var(--color-gold);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.wellness-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}

.wellness-card h3 {
  font-family: var(--font-sans); /* Use sans-serif for card titles for clarity */
  font-size: 1.4rem;
  color: var(--color-heading);
  margin-top: 0;
  margin-bottom: 0.75rem;
}
</style>
