<template>
  <span class="guide-sidebar-anchor" hidden aria-hidden="true"></span>
  <Teleport to="#guide-sidebar-host">
    <aside
      class="guide-sidebar"
      :class="{ 'is-collapsed': !mobileExpanded }"
      :aria-label="`Contenido de ${title}`"
    >
      <header class="guide-sidebar-head">
        <div class="guide-sidebar-heading">
          <div>
            <p class="guide-sidebar-eyebrow">Contenido de la guía</p>
            <h2>{{ title }}</h2>
          </div>
          <button
            class="guide-sidebar-toggle"
            type="button"
            :aria-expanded="mobileExpanded"
            :aria-controls="`${id}-content`"
            @click="mobileExpanded = !mobileExpanded"
          >
            {{ mobileExpanded ? 'Cerrar' : 'Contenido' }}
          </button>
        </div>
      </header>
      <nav
        :id="`${id}-content`"
        ref="menuBody"
        class="guide-sidebar-body"
        aria-label="Temas y actividades"
      >
        <RouterLink
          :to="introRoute"
          class="guide-sidebar-overview"
          :aria-current="route.path === introRoute ? 'page' : undefined"
        >
          Introducción a la guía
        </RouterLink>
        <p class="guide-sidebar-section-label">{{ sectionLabel }}</p>
        <MenuItem
          v-for="item in sections"
          :key="item.label"
          :label="item.label"
          :depth="0"
          :data="item.children"
          :href="item.href"
        />
      </nav>
      <footer class="guide-sidebar-foot">
        {{ sections.length }} {{ countLabel }} · {{ footerText }}
      </footer>
    </aside>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
import type { GuideMenuNode } from '@/types/guideMenu'

const props = defineProps<{
  items: GuideMenuNode[]
  id: string
  title: string
  introRoute: string
  sectionLabel: string
  countLabel: string
  footerText: string
}>()

const route = useRoute()
const mobileExpanded = ref(false)
const menuBody = ref<HTMLElement | null>(null)
const sections = computed(() => props.items.filter((item) => item.href || item.children?.length))

async function revealCurrentItem() {
  await nextTick()
  const body = menuBody.value
  const active = body?.querySelector<HTMLElement>('[aria-current="page"]')
  if (!body || !active || !body.clientHeight) return
  const bodyRect = body.getBoundingClientRect()
  const activeRect = active.getBoundingClientRect()
  if (activeRect.top < bodyRect.top || activeRect.bottom > bodyRect.bottom) {
    body.scrollTop += activeRect.top - bodyRect.top - 16
  }
}

watch(
  () => route.path,
  () => {
    mobileExpanded.value = false
    revealCurrentItem()
  },
  { immediate: true }
)
watch(mobileExpanded, (expanded) => {
  if (expanded) revealCurrentItem()
})
</script>
