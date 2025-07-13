<template>
  <div class="page-content">
    <h2>Event Gallery</h2>
    <p>
      A look at some of the unforgettable moments we've helped create. Get inspired for your next
      event.
    </p>
    <div class="gallery-grid">
      <!-- You would replace these with actual images -->
      <div class="gallery-item placeholder">Corporate Gala</div>
      <div class="gallery-item placeholder">Elegant Wedding</div>
      <div class="gallery-item placeholder">Product Launch</div>
      <div class="gallery-item placeholder">Outdoor Festival</div>
      <div class="gallery-item placeholder">Intimate Dinner Party</div>
      <div class="gallery-item placeholder">Charity Fundraiser</div>
    </div>
  </div>
</template>

<style scoped>
.page-content {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.page-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.page-content p {
  max-width: 600px;
  margin: 0 auto 3rem auto;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.placeholder {
  height: 250px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: #888;
  border-radius: 8px;
}
</style>
