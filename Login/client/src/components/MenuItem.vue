<template>
  <details
    v-if="data?.length"
    class="guide-menu-item"
    :class="{ 'is-root': depth === 0 }"
    :open="expanded"
    @toggle="onToggle"
  >
    <summary class="guide-menu-row">
      <span v-if="number" class="guide-menu-number">{{ number }}.</span>
      <span class="guide-menu-label">{{ displayLabel }}</span>
      <span class="guide-menu-chevron" aria-hidden="true"></span>
    </summary>
    <div class="guide-menu-children">
      <MenuItem
        v-for="item in data"
        :key="item.label"
        :label="item.label"
        :depth="depth + 1"
        :data="item.children"
        :href="item.href"
      />
    </div>
  </details>
  <RouterLink
    v-else-if="href"
    :to="href"
    class="guide-menu-item guide-menu-row"
    :class="{ 'is-root': depth === 0 }"
    :aria-current="route.path === href ? 'page' : undefined"
    @click="scrollPageToTop"
  >
    <span v-if="number" class="guide-menu-number">{{ number }}.</span>
    <span class="guide-menu-label">{{ displayLabel }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { menuNodeContainsRoute, type GuideMenuNode } from '@/types/guideMenu'

const props = defineProps<{
  label: string
  depth: number
  data?: GuideMenuNode[]
  href?: string
  icon?: string
}>()

const route = useRoute()
const expanded = ref(false)
const cleanLabel = computed(() =>
  props.label
    .trim()
    .replace(/:\s*$/, '')
    .replace(/^Teoria$/, 'Teoría')
    .replace(/^Ejemplo$/, 'Ejemplos')
)
const number = computed(() =>
  props.depth === 0 ? cleanLabel.value.match(/^(\d+)\.\s*/)?.[1] : undefined
)
const displayLabel = computed(() =>
  number.value ? cleanLabel.value.replace(/^\d+\.\s*/, '') : cleanLabel.value
)

watch(
  () => route.path,
  (path) => {
    expanded.value = Boolean(props.data?.some((item) => menuNodeContainsRoute(item, path)))
  },
  { immediate: true }
)

function onToggle(event: Event) {
  expanded.value = (event.currentTarget as HTMLDetailsElement).open
}

async function scrollPageToTop() {
  await nextTick()
  window.scrollTo({ top: 0 })
}
</script>
