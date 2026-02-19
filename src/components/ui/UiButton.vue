<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary'
  },
  target: {
    type: String,
    default: ''
  }
})

const isLink = props.href.length > 0
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    :href="isLink ? props.href : undefined"
    :target="props.target || undefined"
    class="btn"
    :class="`btn--${props.variant}`"
  >
    <slot />
  </component>
</template>
