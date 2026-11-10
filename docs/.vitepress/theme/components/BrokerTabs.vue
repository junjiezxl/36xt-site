<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export interface TabItem {
  id: number
  label: string
}

const props = defineProps<{
  tabs: TabItem[]
  defaultTab?: number
}>()

const activeTab = ref<number>(props.defaultTab || (props.tabs[0]?.id ?? 1))
const copiedCode = ref<string>('')
const route = useRoute()

function readTabFromUrl() {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const tabParam = Number(params.get('tab'))
  if (tabParam && props.tabs.some(t => t.id === tabParam)) {
    activeTab.value = tabParam
  }
}

function selectTab(id: number) {
  activeTab.value = id
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href)
    url.searchParams.set('tab', String(id))
    window.history.replaceState({}, '', url.toString())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function onSelectChange(e: Event) {
  const target = e.target as HTMLSelectElement
  const id = Number(target.value)
  if (id) selectTab(id)
}

async function copyCode(code: string) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(code)
      copiedCode.value = code
      setTimeout(() => {
        if (copiedCode.value === code) copiedCode.value = ''
      }, 2200)
    } catch {
      // ignore
    }
  }
}

onMounted(() => {
  readTabFromUrl()
  window.addEventListener('popstate', readTabFromUrl)
})

watch(() => route.fullPath, () => {
  readTabFromUrl()
})

defineExpose({
  activeTab,
  selectTab,
  copyCode,
  copiedCode
})
</script>

<template>
  <div class="ht-broker-card">
    <!-- Haitun-Style Top Underline Tab Header (No scrollbar, clean flat tabs) -->
    <div class="ht-tabs-header" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :class="['ht-tab-item', { 'is-active': activeTab === tab.id }]"
        @click="selectTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Mobile Quick Dropdown (< 768px) -->
    <div class="ht-mobile-selector">
      <select :value="activeTab" @change="onSelectChange" class="ht-select">
        <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
          {{ tab.label }}
        </option>
      </select>
    </div>

    <!-- Tab Body Content -->
    <div class="ht-tabs-body">
      <slot :activeTab="activeTab" :selectTab="selectTab" :copyCode="copyCode" :copiedCode="copiedCode" />
    </div>
  </div>
</template>

<style scoped>
.ht-broker-card {
  background: var(--ht-card-bg, #ffffff);
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--ht-card-border, #e5e7eb);
  overflow: hidden;
}

.ht-tabs-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 0 24px;
  background: var(--ht-card-bg, #ffffff);
  border-bottom: 2px solid #e4e7ed;
}

.dark .ht-tabs-header {
  border-bottom-color: #1e293b;
}

.ht-tab-item {
  position: relative;
  height: 56px;
  line-height: 56px;
  padding: 0 18px;
  font-size: 16px;
  font-weight: 500;
  color: #606266;
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.dark .ht-tab-item {
  color: #94a3b8;
}

.ht-tab-item:hover {
  color: #2563eb;
}

.dark .ht-tab-item:hover {
  color: #38bdf8;
}

.ht-tab-item.is-active {
  color: #1e293b;
  font-weight: 600;
}

.dark .ht-tab-item.is-active {
  color: #f8fafc;
}

.ht-tab-item.is-active::after {
  content: '';
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -2px;
  height: 3px;
  background-color: #3b82f6;
  border-radius: 2px;
}

.ht-tabs-body {
  padding: 28px 32px;
}

.ht-mobile-selector {
  display: none;
  padding: 12px 16px 0;
}

.ht-select {
  width: 100%;
  padding: 9px 12px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid #3b82f6;
  border-radius: 8px;
  outline: none;
}

@media (max-width: 768px) {
  .ht-tabs-header {
    padding: 0 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
    scrollbar-width: none;
  }
  .ht-tabs-header::-webkit-scrollbar {
    display: none;
  }
  .ht-tab-item {
    height: 48px;
    line-height: 48px;
    padding: 0 12px;
    font-size: 14px;
  }
  .ht-tab-item.is-active::after {
    left: 12px;
    right: 12px;
  }
  .ht-mobile-selector {
    display: block;
  }
  .ht-tabs-body {
    padding: 18px 16px;
  }
}
</style>
