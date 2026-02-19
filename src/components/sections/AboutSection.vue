<script setup>
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="about" class="section">
    <!-- <div class="container">
      <SectionTitle :eyebrow="about.eyebrow" :title="about.title" :subtitle="about.subtitle" />
      <div class="about__text">
        <p v-for="paragraph in about.paragraphs" :key="paragraph" class="body">
          {{ paragraph }}
        </p>
      </div>

    </div> -->
  </section>
</template>
