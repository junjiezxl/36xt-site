<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isWide = ref(true)
const lightboxSrc = ref<string | null>(null)
const lightboxAlt = ref<string>('')

function applyWideClass(wide: boolean) {
  if (typeof document === 'undefined') return
  if (wide) {
    document.documentElement.classList.add('ht-widescreen')
  } else {
    document.documentElement.classList.remove('ht-widescreen')
  }
}

function toggleWide() {
  isWide.value = !isWide.value
  applyWideClass(isWide.value)
  try {
    localStorage.setItem('36xt_widescreen', isWide.value ? '1' : '0')
  } catch {
    // ignore
  }
}

function handleDocClick(e: MouseEvent) {
  const target = e.target as HTMLElement | null
  if (!target) return
  if (target.tagName === 'IMG' && target.closest('.vp-doc')) {
    const img = target as HTMLImageElement
    if (img.src) {
      lightboxSrc.value = img.src
      lightboxAlt.value = img.alt || '图片预览'
    }
  }
}

function closeLightbox() {
  lightboxSrc.value = null
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && lightboxSrc.value) {
    closeLightbox()
  }
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('36xt_widescreen')
    if (saved !== null) {
      isWide.value = saved === '1'
    } else {
      isWide.value = true
    }
  } catch {
    isWide.value = true
  }
  applyWideClass(isWide.value)
  document.addEventListener('click', handleDocClick)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('click', handleDocClick)
    document.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <!-- Floating Wide / Narrow Screen Toggle Button (Desktop > 1280px, Haitun Style) -->
  <button
    type="button"
    class="ht-wide-toggle"
    :title="isWide ? '切换为标准窄屏阅读模式' : '切换为宽屏大图阅读模式'"
    @click="toggleWide"
  >
    <span class="ht-wide-icon">{{ isWide ? '🗗' : '🗖' }}</span>
    <span>{{ isWide ? '切换窄屏' : '切换宽屏' }}</span>
  </button>

  <!-- Fullscreen Image Lightbox -->
  <Teleport to="body">
    <Transition name="ht-fade">
      <div v-if="lightboxSrc" class="ht-lightbox-overlay" @click="closeLightbox">
        <div class="ht-lightbox-inner">
          <img :src="lightboxSrc" :alt="lightboxAlt" class="ht-lightbox-img" @click.stop />
          <div class="ht-lightbox-caption">
            <span>{{ lightboxAlt }}</span>
            <button type="button" class="ht-lightbox-close" @click="closeLightbox">✕ 关闭预览</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.ht-wide-toggle {
  position: fixed;
  right: 24px;
  bottom: 28px;
  z-index: 45;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  box-shadow: 0 8px 20px -4px rgba(2, 132, 199, 0.45);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ht-wide-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px -4px rgba(2, 132, 199, 0.55);
}

@media (max-width: 1280px) {
  .ht-wide-toggle {
    display: none;
  }
}

.ht-lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: zoom-out;
}

.ht-lightbox-inner {
  max-width: 92vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ht-lightbox-img {
  max-width: 90vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.ht-lightbox-caption {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #f8fafc;
  font-size: 14px;
}

.ht-lightbox-close {
  padding: 5px 14px;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  cursor: pointer;
}

.ht-lightbox-close:hover {
  background: rgba(255, 255, 255, 0.28);
}

.ht-fade-enter-active,
.ht-fade-leave-active {
  transition: opacity 0.2s ease;
}

.ht-fade-enter-from,
.ht-fade-leave-to {
  opacity: 0;
}
</style>
