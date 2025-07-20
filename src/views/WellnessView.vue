<script setup lang="ts">
// No script logic needed yet, but ready for future interactivity
</script>

<template>
  <main>
    <!-- 1. UPDATED HERO SECTION -->
    <section class="page-hero">
      <div class="page-hero-content">
        <h1>Cultivate Your Well-being</h1>
        <p>
          Holistic experiences for personal balance and transformative programs for organizations.
        </p>
      </div>
    </section>

    <!-- 2. "OUR PHILOSOPHY" INTRO SECTION -->
    <section class="page-section">
      <h2>A Holistic Approach to a Fuller Life</h2>
      <p class="section-intro">
        At WellPRO, we believe true wellness is a harmonious balance of mind, body, and spirit. It's
        not a one-size-fits-all solution, but a personal journey. We provide the tools, guidance,
        and experiences to help you—or your team—thrive. p>
      </p>
    </section>

    <!-- 3. NEW "CHOOSE YOUR PATH" SECTION -->
    <section class="page-section path-chooser-section">
      <div class="path-chooser-grid">
        <!-- Path 1: Personal Wellness -->
        <div class="path-card">
          <div class="path-icon">
            <!-- You can use an SVG icon here -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3>For Your Life</h3>
          <p>
            Invest in yourself with personalized coaching, private retreats, and workshops designed
            to help you find clarity, energy, and peace.
          </p>
          <a href="#personal-wellness" class="path-button">Explore Personal Wellness</a>
        </div>
        <!-- Path 2: Corporate Wellness -->
        <div class="path-card">
          <div class="path-icon">
            <!-- You can use an SVG icon here -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3>For Your Business</h3>
          <p>
            Elevate your organization with bespoke programs that boost morale, reduce burnout, and
            foster a thriving, productive company culture.
          </p>
          <a href="#corporate-wellness" class="path-button">Discover Corporate Programs</a>
        </div>
      </div>
    </section>

    <!-- 4. DETAILED PERSONAL WELLNESS SERVICES -->
    <section id="personal-wellness" class="page-section">
      <h2>Personal Wellness Journeys</h2>
      <p class="section-intro">
        Your path to well-being is unique. Select from our curated services or work with us to
        create a personalized plan.
      </p>
      <div class="wellness-grid">
        <div class="wellness-card">
          <h3>Mindfulness & Meditation</h3>
          <p>
            Learn techniques to reduce stress, improve focus, and cultivate inner calm through
            guided one-on-one or small group sessions.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Personalized Fitness Coaching</h3>
          <p>
            Move your body in a way that feels good. We offer private yoga, strength training, and
            movement coaching tailored to your goals.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Nutritional Guidance</h3>
          <p>
            Holistic, non-judgmental guidance to help you build a healthy and joyful relationship
            with food. Includes meal planning and pantry makeovers.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Life & Wellness Coaching</h3>
          <p>
            Partner with a certified coach to set meaningful goals, overcome obstacles, and design a
            life that aligns with your values.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Private Retreats & Respite</h3>
          <p>
            Curated solo or small-group getaways designed for you to disconnect, immerse in nature,
            and return to your life recharged and inspired.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Creative & Expressive Arts</h3>
          <p>
            Unlock your creativity as a form of self-care. We host workshops in journaling,
            painting, and other arts to foster expression and release.
          </p>
        </div>
      </div>
    </section>

    <!-- 5. DETAILED CORPORATE WELLNESS SERVICES -->
    <section id="corporate-wellness" class="page-section alternate-bg">
      <h2>Transformative Corporate Programs</h2>
      <p class="section-intro">
        From single workshops to comprehensive annual strategies, we partner with you to build a
        healthier, happier, and more engaged workforce.
      </p>
      <div class="wellness-grid">
        <div class="wellness-card">
          <h3>Team Building & Retreats</h3>
          <p>
            Custom-designed off-sites that go beyond trust falls. We focus on meaningful connection,
            strategic alignment, and genuine team rejuvenation.
          </p>
        </div>
        <div class="wellness-card">
          <h3>On-Site Wellness Workshops</h3>
          <p>
            Bring wellness to your office. We offer engaging, interactive sessions on stress
            management, nutrition, ergonomics, and mental fitness.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Leadership Wellness Coaching</h3>
          <p>
            Equip your leaders with the tools to manage their own well-being and lead their teams
            with empathy, resilience, and inspiration.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Keynote Speaking & Seminars</h3>
          <p>
            Dynamic and inspiring talks on a range of wellness topics, perfect for company-wide
            meetings, lunch-and-learns, or special events.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Mental Health First-Aid</h3>
          <p>
            Certified training that empowers employees to recognize and respond to mental health
            challenges among their colleagues, creating a culture of support.
          </p>
        </div>
        <div class="wellness-card">
          <h3>Company Wellness Challenges</h3>
          <p>
            Boost engagement with fun, gamified challenges focused on movement, mindfulness, or
            healthy habits, complete with tracking and prizes.
          </p>
        </div>
      </div>
    </section>

    <!-- 6. FINAL CALL TO ACTION -->
    <section class="cta-section">
      <h2>Ready to Begin Your Wellness Journey?</h2>
      <p>Whether for yourself or your organization, the first step is a simple conversation.</p>
      <RouterLink to="/#contact" class="cta-button">Contact Us For a Consultation</RouterLink>
    </section>
  </main>
</template>

<style scoped>
/* Hero for internal pages - no changes */
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

/* General page section styling - no changes */
.page-section {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.page-section h2 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-family: var(--font-serif);
}
.section-intro {
  max-width: 700px;
  margin: 0 auto 3.5rem auto;
  font-size: 1.1rem;
  line-height: 1.7;
}

/* --- NEW STYLES --- */

/* Path Chooser Section */
.path-chooser-section {
  background-color: #fdfdfd;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.path-chooser-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.path-card {
  padding: 2.5rem;
  text-align: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;
}
.path-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  border-color: var(--color-primary-cta);
}
.path-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem auto;
  color: var(--color-primary-cta);
}
.path-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
.path-card p {
  line-height: 1.6;
  margin-bottom: 2rem;
}
.path-button {
  display: inline-block;
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  padding: 0.8rem 1.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}
.path-button:hover {
  background-color: var(--color-heading);
}

/* Media query for path chooser on smaller screens */
@media (max-width: 768px) {
  .path-chooser-grid {
    grid-template-columns: 1fr;
  }
}

/* Alternate background for section distinction */
.alternate-bg {
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

/* Wellness Grid Styling - Minor tweak for consistency */
.wellness-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  text-align: left;
}
.wellness-card {
  background-color: #fff;
  border: 1px solid #eee;
  padding: 2rem;
  border-radius: 8px;
  border-top: 5px solid var(--color-primary-cta); /* Changed from --color-gold for consistency */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.wellness-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.07);
}
.wellness-card h3 {
  font-family: var(--font-sans);
  font-size: 1.4rem;
  color: var(--color-heading);
  margin-top: 0;
  margin-bottom: 0.75rem;
}

/* Final CTA Section */
.cta-section {
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  text-align: center;
  padding: 5rem 2rem;
}
.cta-section h2 {
  font-size: 2.5rem;
  color: var(--color-white);
}
.cta-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.cta-button {
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
  background-color: #fff;
  transform: translateY(-3px);
}
</style>
