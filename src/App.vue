<script setup>
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import SiteFooter from './components/sections/SiteFooter.vue'

import { about, contact, experience, hero, projects, skills, socials } from './data/content.js'
</script>

<template>
  <div class="page">
    <HeroSection :hero="hero" />
    <!-- <AboutSection :about="about" /> -->
    <SkillsSection :skills="skills" />
    <ProjectsSection :projects="projects" />
    <ExperienceSection :experience="experience" />
    <ContactSection :contact="contact" :socials="socials" />
    <!-- <SiteFooter /> -->
  </div>
</template>
