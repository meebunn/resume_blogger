<script setup>
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  contact: {
    type: Object,
    required: true
  },
  socials: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <SectionTitle
        :eyebrow="contact.eyebrow"
        :subtitle="contact.subtitle"
      />
      <div class="contact__grid">
        <div class="card contact-card">
          <!-- <h3>Say hello</h3>
          <p class="muted">{{ contact.availability }}</p>
           -->
          <div class="social-list">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ social.label }}
            </a>
          </div>
          
          <a class="contact-email" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          <a class="contact-meta" href="tel:+66809453597">+66 80 945 3597</a>
          <div class="contact-meta">
            <span>{{ contact.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
