<script setup>
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  experience: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <SectionTitle
        :eyebrow="experience.eyebrow"
        :title="experience.title"
        :subtitle="experience.subtitle"
      />
      <div class="timeline">
        <div v-for="item in experience.items" :key="item.role" class="timeline-item">
          <div class="timeline-header">
            <h3>{{ item.role }}</h3>
            <span class="muted">{{ item.company }} · {{ item.period }}</span>
          </div>
          <ul class="bullet-list">
            <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
