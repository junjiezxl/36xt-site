<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { withBase } from 'vitepress'

interface StepItem {
  id: string
  stage: string
  title: string
  cost: string
  time: string
  summary: string
  pitfall: string
  link: string
  linkText: string
}

const STORAGE_KEY = '36xt_roadmap_progress_v1'

const steps: StepItem[] = [
  {
    id: 'passport',
    stage: '阶段 01 · 身份基石',
    title: '办理因私普通护照（建议顺带办港澳通行证）',
    cost: '¥120（护照）',
    time: '约 7 个工作日',
    summary: '几乎所有海外银行、数字钱包与实名手机卡唯一通用的法定国际身份证件。',
    pitfall: '避坑：检查身份证与护照有效期均大于 6 个月；签名页务必与日常拼音/中文习惯一致。',
    link: '/roadmap/documents',
    linkText: '查看证件避坑清单 →'
  },
  {
    id: 'address',
    stage: '阶段 02 · 合规材料',
    title: '准备一份合规的「地址证明」（Proof of Address）',
    cost: '¥0 零成本',
    time: '10 分钟 ~ 3 天',
    summary: '用于证实你的常住地址，境外银行远程开户或赴港开户高频必查材料。',
    pitfall: '避坑：优先用近 3 个月内的国内银行信用卡纸质/PDF 结单（带姓名+完整家庭地址+公章），水电煤账单须本人户名。',
    link: '/roadmap/address-proof',
    linkText: '零成本地址证明攻略 →'
  },
  {
    id: 'sim',
    stage: '阶段 03 · 通信独立',
    title: '激活第一张海外低成本保号手机卡',
    cost: '约 ¥10 ~ ¥100/年',
    time: '邮寄 1~2 周 / eSIM 即开',
    summary: '专门用于接收海外银行 OTP 验证码、注册国际服务，与国内手机号解耦且漫游免费收短信。',
    pitfall: '避坑：一定要先拿到海外手机号再去开海外银行，避免后续跨国改绑手机号触发风控锁户！',
    link: '/sim/',
    linkText: '对比热门保号手机卡 →'
  },
  {
    id: 'credit_card',
    stage: '阶段 04 · 激活媒介',
    title: '准备一张国内银行外币/全币种信用卡（Visa / Mastercard）',
    cost: '免年费',
    time: '约 3~7 天',
    summary: '用于首次给海外手机卡（如 Giffgaff）充值激活，以及海外日常订阅支付。',
    pitfall: '避坑：选“有效期内免年费 + 免货币转换费”的银联/Visa 或 Mastercard 套卡即可，无需追求高端卡。',
    link: '/roadmap/documents#外币信用卡准备',
    linkText: '查看选卡建议 →'
  },
  {
    id: 'first_bank',
    stage: '阶段 05 · 首张境外账户',
    title: '开通第一张合规海外银行账户',
    cost: '¥0 管理费起',
    time: '赴港当天 / 远程 3~5 天',
    summary: '能去香港首选「汇丰 One + 中银香港 + 众安 ZA」一日三开；暂不出境可了解英国 iFAST 等远程合规渠道。',
    pitfall: '避坑：如实填写职业与收入区间，切勿听信中介伪造流水或包装高管身份。',
    link: '/bank/',
    linkText: '查看境外银行开户对比 →'
  },
  {
    id: 'kyc_keepalive',
    stage: '阶段 06 · 长期养护',
    title: '完成同名小额入金测试 & 设好保号日历提醒',
    cost: '小额测试',
    time: '每半年 5 分钟',
    summary: '打通「国内购汇 → 同名跨境汇款 → 境外账户入账」闭环，并给手机卡设置 150 天保号提醒。',
    pitfall: '避坑：严禁帮陌生人代收代付、严禁接触来路不明资金（如 P2P 黑资），避免触发反洗钱关户。',
    link: '/roadmap/order-and-risk',
    linkText: '阅读防关户生存指南 →'
  }
]

const checkedIds = ref<string[]>([])

onMounted(() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        checkedIds.value = parsed
      }
    }
  } catch {
    // ignore storage errors
  }
})

function toggleStep(id: string) {
  const idx = checkedIds.value.indexOf(id)
  if (idx >= 0) {
    checkedIds.value.splice(idx, 1)
  } else {
    checkedIds.value.push(id)
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds.value))
  } catch {
    // ignore storage errors
  }
}

function resetProgress() {
  checkedIds.value = []
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore storage errors
  }
}

const progressPercent = computed(() =>
  Math.round((checkedIds.value.length / steps.length) * 100)
)
</script>

<template>
  <div class="roadmap-box">
    <div class="roadmap-header">
      <div>
        <div class="roadmap-title">🎯 36星途 0 → 1 出海通关打卡（本地自动保存）</div>
        <div class="roadmap-sub">
          已完成 <strong>{{ checkedIds.length }}</strong> / {{ steps.length }} 步（{{ progressPercent }}%）· 点击卡片左侧复选框记录你的实操进度
        </div>
      </div>
      <button
        v-if="checkedIds.length > 0"
        type="button"
        class="reset-btn"
        @click="resetProgress"
      >
        重置进度
      </button>
    </div>

    <div class="progress-track">
      <div class="progress-fill" :style="{ width: progressPercent + '%' }" />
    </div>

    <div class="step-list">
      <div
        v-for="item in steps"
        :key="item.id"
        class="step-card"
        :class="{ done: checkedIds.includes(item.id) }"
      >
        <button
          type="button"
          class="check-btn"
          :aria-label="'切换完成状态：' + item.title"
          @click="toggleStep(item.id)"
        >
          <span v-if="checkedIds.includes(item.id)">✓</span>
        </button>

        <div class="step-body">
          <div class="step-meta">
            <span class="stage-tag">{{ item.stage }}</span>
            <span class="meta-pill">💰 {{ item.cost }}</span>
            <span class="meta-pill">⏱️ {{ item.time }}</span>
          </div>
          <h4 class="step-heading" @click="toggleStep(item.id)">
            {{ item.title }}
          </h4>
          <p class="step-desc">{{ item.summary }}</p>
          <div class="step-pitfall">{{ item.pitfall }}</div>
          <a class="step-link" :href="withBase(item.link)">{{ item.linkText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roadmap-box {
  margin: 24px 0;
  padding: 22px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.roadmap-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
}

.roadmap-title {
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.roadmap-sub {
  margin-top: 4px;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}

.reset-btn {
  padding: 4px 12px;
  font-size: 0.8rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.18s ease;
}

.reset-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.progress-track {
  margin: 14px 0 20px;
  height: 8px;
  border-radius: 999px;
  background: var(--vp-c-bg-mute);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #0284c7, #0d9488);
  transition: width 0.3s ease;
}

.step-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.step-card {
  display: flex;
  gap: 14px;
  padding: 16px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s ease, opacity 0.2s ease;
}

.step-card:hover {
  border-color: var(--vp-c-brand-1);
}

.step-card.done {
  opacity: 0.78;
  border-color: rgba(13, 148, 136, 0.45);
}

.check-btn {
  flex-shrink: 0;
  margin-top: 3px;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  border: 2px solid var(--vp-c-text-3);
  background: transparent;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.18s ease;
}

.step-card.done .check-btn {
  background: #0d9488;
  border-color: #0d9488;
}

.step-body {
  flex: 1;
  min-width: 0;
}

.step-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 6px;
}

.stage-tag {
  font-size: 0.76rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.meta-pill {
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
}

.step-heading {
  margin: 4px 0 6px !important;
  font-size: 1rem !important;
  font-weight: 650;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.step-card.done .step-heading {
  text-decoration: line-through;
  color: var(--vp-c-text-2);
}

.step-desc {
  margin: 0 0 8px !important;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.step-pitfall {
  padding: 8px 11px;
  border-radius: 8px;
  font-size: 0.83rem;
  line-height: 1.5;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  margin-bottom: 8px;
}

.step-link {
  display: inline-block;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none !important;
}

.step-link:hover {
  text-decoration: underline !important;
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .roadmap-box {
    padding: 16px 14px;
    margin: 18px 0;
  }

  .roadmap-title {
    font-size: 0.98rem;
  }

  .roadmap-sub {
    font-size: 0.82rem;
  }

  .step-card {
    padding: 14px 12px;
    gap: 10px;
  }

  .check-btn {
    width: 26px;
    height: 26px;
    font-size: 15px;
  }

  .step-heading {
    font-size: 0.95rem !important;
  }

  .step-desc {
    font-size: 0.85rem;
  }

  .step-pitfall {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
}
</style>
