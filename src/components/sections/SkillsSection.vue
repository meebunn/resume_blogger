<script setup>
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  skills: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="skills" class="section">
    
    <div class="container">
      <SectionTitle :eyebrow="skills.eyebrow" :title="skills.title" :subtitle="skills.subtitle" />
      <div class="skills__grid">
        <div v-for="group in skills.groups" :key="group.name" class="card">
          <h3>{{ group.name }}</h3>
          <div class="tag-list">
            <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
