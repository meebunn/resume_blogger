<script setup>
import UiButton from '../ui/UiButton.vue'

defineProps({
  hero: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="top" class="section hero">
    <div class="container hero__grid">
      <div class="hero__content reveal">
        <p class="eyebrow">{{ hero.role }}</p>
        <h1 class="hero__title">{{ hero.name }}</h1>
        <p class="lead">{{ hero.summary }}</p>
        <div class="hero__meta">
          <span class="meta-item">{{ hero.location }}</span>
          <span class="dot">•</span>
          <span class="meta-item">{{ hero.availability }}</span>
        </div>
        <div class="actions">
          <UiButton :href="hero.ctaPrimary.href" variant="primary">
            {{ hero.ctaPrimary.label }}
          </UiButton>
          <UiButton :href="hero.ctaSecondary.href" variant="ghost">
            {{ hero.ctaSecondary.label }}
          </UiButton>
        </div>
        <!-- <div class="stats">
          <div v-for="stat in hero.stats" :key="stat.label" class="stat-card">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div> -->
      </div>
      <div class="hero__image reveal delay-1" v-if="hero.image">
        <img :src="hero.image" :alt="hero.name" class="profile-image" />
      </div>
      <div class="hero__panel reveal delay-2">
        <div class="hero__panel-card">
          <p class="eyebrow">Focus</p>
          <h3>Product-focused UI with clean systems.</h3>
          <ul class="checklist">
            <li v-for="item in hero.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>
        <!-- <div class="hero__panel-card subtle">
          <p class="eyebrow">Now</p>
          <p class="muted">Currently exploring motion, accessibility, and design systems.</p>
        </div> -->
      </div>
    </div>
  </section>
</template>
