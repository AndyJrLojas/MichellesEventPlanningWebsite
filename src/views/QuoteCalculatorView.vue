<template>
  <main class="quote-page">
    <div class="page-header">
      <h1>Build Your Instant Quote</h1>
      <p>Select the services and rentals you're interested in to get an estimated cost.</p>
    </div>

    <div class="calculator-layout">
      <!-- Left side: The selection options -->
      <div class="options-panel">
        <form @submit.prevent="handleSubmit">
          <!-- Services Section -->
          <section class="quote-section">
            <h2>Core Services</h2>
            <div v-for="service in services" :key="service.id" class="form-item checkbox-item">
              <input type="checkbox" :id="service.id" v-model="selections[service.id]" />
              <!-- error line-->
              <label :for="service.id">
                <span class="item-name">{{ service.name }}</span>
                <span class="item-price">{{ formatPrice(service.price) }}</span>
              </label>
              <p class="item-description">{{ service.description }}</p>
            </div>
          </section>

          <!-- Rentals Section -->
          <section class="quote-section">
            <h2>Event Rentals</h2>
            <div v-for="item in rentals" :key="item.id" class="form-item number-item">
              <label :for="item.id">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">{{ formatPrice(item.price) }} / each</span>
              </label>
              <input
                type="number"
                :id="item.id"
                v-model.number="selections[item.id]"
                min="0"
                placeholder="0"
              />
            </div>
          </section>

          <!-- Contact Info Section -->
          <section class="quote-section">
            <h2>Your Details</h2>
            <p>Complete your details to save or send your quote.</p>
            <div class="form-item text-item">
              <label for="name">Full Name</label>
              <input type="text" id="name" v-model="contact.name" required />
            </div>
            <div class="form-item text-item">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="contact.email" required />
            </div>
            <div class="form-item text-item">
              <label for="event-date">Estimated Event Date</label>
              <input type="date" id="event-date" v-model="contact.eventDate" />
            </div>
          </section>
        </form>
      </div>

      <!-- Right side: The summary -->
      <aside class="summary-panel">
        <div class="summary-box">
          <h3>Your Quote Summary</h3>
          <ul v-if="selectedItems.length > 0" class="summary-list">
            <li v-for="item in selectedItems" :key="item.id">
              <span
                >{{ item.name }} ({{ item.quantity > 1 ? `x${item.quantity}` : 'Selected' }})</span
              >
              <span>{{ formatPrice(item.totalPrice) }}</span>
            </li>
          </ul>
          <p v-else class="empty-summary">Your selected items will appear here.</p>

          <div class="summary-total">
            <span>Estimated Total</span>
            <span class="total-price">{{ formatPrice(totalCost) }}</span>
          </div>

          <button class="submit-button" @click="handleSubmit">Request This Quote</button>
          <p class="disclaimer">
            *This is an estimate. Prices may vary based on final details and availability.
          </p>
        </div>
      </aside>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// --- STATE: Define selections object FIRST ---
const selections = ref({
  planning: false,
  design: false,
  coordination: false,
  chairs: 0,
  tables: 0,
  linens: 0,
  uplighting: false,
})

// --- TYPES: Create types based on our data ---

// 1. Create a type that represents ONLY the valid keys from our selections object.
// This will become: 'planning' | 'design' | 'coordination' | 'chairs' | ...
type SelectionKey = keyof typeof selections.value

// 2. Define interfaces for our items, ensuring their 'id' uses our new key type.
interface Service {
  id: SelectionKey
  name: string
  price: number
  description: string
}

interface Rental {
  id: SelectionKey
  name: string
  price: number
}

// --- DATA: Apply the new types to our data arrays ---
const services = ref<Service[]>([
  {
    id: 'planning',
    name: 'Full-Service Planning',
    price: 3500,
    description: 'From concept to execution, we handle every detail.',
  },
  {
    id: 'design',
    name: 'Creative Event Design',
    price: 2000,
    description: 'Theming, decor, and creating an immersive atmosphere.',
  },
  {
    id: 'coordination',
    name: 'Day-Of Coordination',
    price: 1200,
    description: 'Ensures everything runs smoothly on the event day.',
  },
])

const rentals = ref<Rental[]>([
  { id: 'chairs', name: 'Chiavari Chairs', price: 8 },
  { id: 'tables', name: 'Round Banquet Tables (8-10 ppl)', price: 15 },
  { id: 'linens', name: 'Premium Table Linens', price: 25 },
  // Note: 'uplighting' is also a valid SelectionKey, so this is type-safe
  { id: 'uplighting', name: 'LED Uplighting Package', price: 450 },
])

// This type is now correctly inferred
const allItems = computed<(Service | Rental)[]>(() => [...services.value, ...rentals.value])

const contact = ref({
  name: '',
  email: '',
  eventDate: '',
})

// --- COMPUTED: This section now works without errors! ---
const selectedItems = computed(() => {
  return allItems.value
    .map((item) => {
      // TypeScript now knows `item.id` is a valid key for `selections.value`
      const quantity = selections.value[item.id]
      const finalQuantity = typeof quantity === 'boolean' ? (quantity ? 1 : 0) : quantity
      return {
        ...item,
        quantity: finalQuantity,
        totalPrice: item.price * (finalQuantity || 0), // Use || 0 for safety
      }
    })
    .filter((item) => item.quantity > 0)
})

const totalCost = computed(() => {
  return selectedItems.value.reduce((total, item) => total + item.totalPrice, 0)
})

// --- METHODS ---
const formatPrice = (price: number) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const handleSubmit = () => {
  if (totalCost.value === 0) {
    alert('Please select at least one service or item.')
    return
  }
  console.log('Quote Submitted:', {
    contactDetails: contact.value,
    selectedServices: selectedItems.value,
    estimatedTotal: totalCost.value,
  })
  alert(
    `Thank you, ${contact.value.name}! Your quote request for ${formatPrice(
      totalCost.value,
    )} has been sent. We will be in touch shortly.`,
  )
}
</script>

<style scoped>
/* Page Layout & Header */
.quote-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.page-header {
  text-align: center;
  margin-bottom: 3rem;
}
.page-header h1 {
  font-size: 3rem;
  color: var(--color-heading);
  font-family: var(--font-serif);
}
.page-header p {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-top: 0.5rem;
}
.calculator-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: flex-start;
}
@media (max-width: 992px) {
  .calculator-layout {
    grid-template-columns: 1fr;
  }
}

/* Options Panel (Left) */
.options-panel {
  background-color: #fff;
}
.quote-section {
  margin-bottom: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}
.quote-section h2 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary-cta);
}
.form-item {
  margin-bottom: 1.5rem;
}
.item-name {
  font-weight: 600;
  font-size: 1.1rem;
}
.item-price {
  font-weight: 500;
  color: var(--color-primary-cta);
}

/* Checkbox Style */
.checkbox-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 0 1rem;
}
.checkbox-item input[type='checkbox'] {
  margin-top: 0.25rem;
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary-cta);
}
.checkbox-item label {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.item-description {
  grid-column: 2;
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
  margin-top: 0.25rem;
}

/* Number Input Style */
.number-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.number-item label {
  flex-grow: 1;
}
.number-item input {
  width: 80px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
}

/* Text Input Style */
.text-item {
  display: flex;
  flex-direction: column;
}
.text-item label {
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.text-item input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

/* Summary Panel (Right) */
.summary-panel {
  position: sticky;
  top: 120px; /* Adjust based on your header height + some padding */
}
.summary-box {
  background-color: var(--color-dark-slate);
  color: var(--color-white);
  padding: 2rem;
  border-radius: 8px;
}
.summary-box h3 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--color-white);
}
.summary-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}
.summary-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.empty-summary {
  text-align: center;
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
}
.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 700;
  padding-top: 1rem;
}
.total-price {
  color: var(--color-primary-cta);
  font-size: 1.5rem;
}
.submit-button {
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background-color: var(--color-primary-cta);
  color: var(--color-dark-slate);
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.submit-button:hover {
  background-color: #d4a056; /* A slightly lighter gold for hover */
}
.disclaimer {
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>
