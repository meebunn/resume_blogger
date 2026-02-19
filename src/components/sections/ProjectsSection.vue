<script setup>
import SectionTitle from '../ui/SectionTitle.vue'

defineProps({
  projects: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <SectionTitle
        :eyebrow="projects.eyebrow"
        :title="projects.title"
        :subtitle="projects.subtitle"
      />
      <div class="projects__grid">
        <article v-for="project in projects.items" :key="project.name" class="card project-card">
          <div>
            <h3>{{ project.name }}</h3>
            <p class="muted">{{ project.description }}</p>
          </div>
          <div class="tag-list">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="project-links">
            <a
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
            >
              {{ link.label }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
