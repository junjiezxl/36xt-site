<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export interface TabItem {
  id: number
  label: string
  badge?: string
  badgeType?: 'hot' | 'free' | 'vip' | 'warn'
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
  <div class="ht-workspace">
    <!-- Desktop & Tablet Horizontal Tab Header (Haitun Style + Beautified) -->
    <div class="ht-tabs-bar" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :class="['ht-tab-btn', { active: activeTab === tab.id }]"
        @click="selectTab(tab.id)"
      >
        <span class="ht-tab-label">{{ tab.label }}</span>
        <span
          v-if="tab.badge"
          :class="['ht-tab-badge', `is-${tab.badgeType || 'hot'}`]"
        >
          {{ tab.badge }}
        </span>
      </button>
    </div>

    <!-- Mobile Quick Selector Bar (< 768px) -->
    <div class="ht-mobile-selector">
      <label class="ht-mobile-label">当前查看栏目：</label>
      <div class="ht-select-wrap">
        <select :value="activeTab" @change="onSelectChange" class="ht-select">
          <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
            {{ tab.id }}. {{ tab.label }}{{ tab.badge ? ` (${tab.badge})` : '' }}
          </option>
        </select>
      </div>
    </div>

    <!-- Tab Content Panels -->
    <div class="ht-tab-panels">
      <slot :activeTab="activeTab" :selectTab="selectTab" :copyCode="copyCode" :copiedCode="copiedCode" />
    </div>
  </div>
</template>

<style scoped>
.ht-workspace {
  margin-top: 4px;
}

.ht-tabs-bar {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
  padding: 6px 6px;
  margin-bottom: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  scrollbar-width: thin;
  position: sticky;
  top: calc(var(--vp-nav-height, 64px) + 8px);
  z-index: 20;
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px -6px rgba(15, 23, 42, 0.08);
}

.ht-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.ht-tab-btn:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.ht-tab-btn.active {
  color: #ffffff;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 12px -2px rgba(2, 132, 199, 0.38);
}

.dark .ht-tab-btn.active {
  background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
}

.ht-tab-badge {
  display: inline-block;
  padding: 1px 6px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1.4;
  border-radius: 999px;
}

.ht-tab-badge.is-hot {
  background: #fee2e2;
  color: #dc2626;
}

.ht-tab-badge.is-free {
  background: #dcfce7;
  color: #15803d;
}

.ht-tab-badge.is-vip {
  background: #fef3c7;
  color: #b45309;
}

.ht-tab-badge.is-warn {
  background: #ffedd5;
  color: #c2410c;
}

.ht-tab-btn.active .ht-tab-badge {
  background: rgba(255, 255, 255, 0.22);
  color: #ffffff;
}

.ht-mobile-selector {
  display: none;
  margin-bottom: 18px;
  padding: 10px 14px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.ht-mobile-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.ht-select-wrap {
  flex: 1;
}

.ht-select {
  width: 100%;
  padding: 7px 10px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  outline: none;
}

@media (max-width: 768px) {
  .ht-mobile-selector {
    display: flex;
  }
  .ht-tabs-bar {
    position: static;
    padding: 5px;
    margin-bottom: 16px;
  }
  .ht-tab-btn {
    padding: 7px 12px;
    font-size: 13px;
  }
}
</style>
