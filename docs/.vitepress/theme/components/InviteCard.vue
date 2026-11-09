<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  bankName: string
  code: string
  note?: string
  guideLink?: string
  guideText?: string
}>()

const copied = ref(false)

async function copyInvite() {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(props.code)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2200)
    } catch {
      // fallback
    }
  }
}
</script>

<template>
  <div class="ht-invite-card">
    <div class="ht-invite-main">
      <div class="ht-invite-info">
        <span class="ht-invite-tag">🎁 {{ bankName }} 专属开户邀请码</span>
        <div class="ht-invite-code-row">
          <code class="ht-invite-code">{{ code }}</code>
          <button type="button" class="ht-copy-btn" @click="copyInvite">
            {{ copied ? '✅ 已复制邀请码' : '📋 一键复制' }}
          </button>
        </div>
        <p v-if="note" class="ht-invite-note">{{ note }}</p>
      </div>
      <div v-if="guideLink" class="ht-invite-action">
        <a :href="guideLink" class="ht-guide-link">
          {{ guideText || '查看详细图文教程 →' }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ht-invite-card {
  margin: 18px 0;
  padding: 18px 22px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(13, 148, 136, 0.08) 100%);
  border: 1.5px dashed var(--vp-c-brand-1);
}

.ht-invite-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.ht-invite-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 6px;
}

.ht-invite-code-row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.ht-invite-code {
  font-size: 22px !important;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 4px 14px !important;
  border-radius: 8px;
  background: var(--vp-c-bg) !important;
  color: #dc2626 !important;
  border: 1px solid var(--vp-c-divider);
}

.dark .ht-invite-code {
  color: #f87171 !important;
}

.ht-copy-btn {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}

.ht-copy-btn:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

.ht-invite-note {
  margin: 8px 0 0 !important;
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.ht-guide-link {
  display: inline-block;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1) !important;
  border: 1px solid var(--vp-c-brand-1);
  text-decoration: none !important;
  transition: all 0.2s;
}

.ht-guide-link:hover {
  background: var(--vp-c-brand-1);
  color: #ffffff !important;
}
</style>
