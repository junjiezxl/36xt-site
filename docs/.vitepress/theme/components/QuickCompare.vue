<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const travel = ref<'remote' | 'hk'>('remote')
const device = ref<'physical' | 'esim'>('physical')

const recommendation = computed(() => {
  const sim =
    device.value === 'esim'
      ? {
          name: '菲律宾 DITO eSIM 或 香港 Club SIM',
          cost: 'DITO 年保号 < ¥1/年 · Club SIM 约 HK$6/年',
          reason: '你的手机支持原生 eSIM，强烈推荐中国护照正规实名的菲律宾 DITO 或香港 Club SIM！抗封号、无月租、大陆漫游免费收验证码，比无实名的英国卡稳定得多。',
          link: '/sim/ph-dito',
          linkText: '查看 DITO eSIM 开通指南 →'
        }
      : {
          name: '实体 eSIM 写卡器（配 DITO / Club SIM）',
          cost: '芯片几十元 · DITO 年保号 < ¥1/年',
          reason: '针对国行双实体卡槽手机，目前主流且最稳妥的方案是配一张可擦写 eSIM 芯片（如 5ber/Estk），插进卡槽直接烧录 DITO 或 Club SIM，抗封且年费极低（Giffgaff 近期封卡严重已不推荐）。',
          link: '/sim/ph-dito',
          linkText: '查看 DITO 低成本保号教程 →'
        }

  const bank =
    travel.value === 'hk'
      ? {
          name: '香港汇丰 One + 中银香港 + 众安 ZA Bank（一日三开）',
          cost: '0 账户管理费 · 中银支持内地同名港币互转低损耗',
          reason: '既然近期能去香港，强烈建议肉身赴港一次搞定传统大行 + 数字银行组合！下卡稳、额度高、自带实体万事达扣账卡。',
          link: '/bank/hk-walk-in',
          linkText: '查看赴港一日通关攻略 →'
        }
      : {
          name: '英国 iFAST Global Bank + Wise 多币种账户（远程护照申请）',
          cost: '0 管理费 · 支持护照 + 地址证明线上视频/资料审核',
          reason: '暂不方便出境时，优先选择持英国正规银行牌照的 iFAST Global Bank，配合 Wise 管理多币种收支；切勿轻信收费几千元的违规代开中介。',
          link: '/bank/remote-accounts',
          linkText: '查看远程直开账户对比 →'
        }

  return { sim, bank }
})
</script>

<template>
  <div class="finder-card">
    <div class="finder-title">⚡ 30 秒选卡决策器：根据你的现状推荐首张组合</div>
    <div class="finder-controls">
      <div class="control-group">
        <span class="control-label">1. 近期能否出境（如去香港）？</span>
        <div class="segmented">
          <button
            type="button"
            :class="{ active: travel === 'remote' }"
            @click="travel = 'remote'"
          >
            🏠 暂不出境（内地远程）
          </button>
          <button
            type="button"
            :class="{ active: travel === 'hk' }"
            @click="travel = 'hk'"
          >
            🚄 近期可去香港/境外
          </button>
        </div>
      </div>

      <div class="control-group">
        <span class="control-label">2. 你的手机支持哪种卡槽？</span>
        <div class="segmented">
          <button
            type="button"
            :class="{ active: device === 'physical' }"
            @click="device = 'physical'"
          >
            📲 国行手机（仅实体卡）
          </button>
          <button
            type="button"
            :class="{ active: device === 'esim' }"
            @click="device = 'esim'"
          >
            🌐 支持原生 eSIM / 写卡器
          </button>
        </div>
      </div>
    </div>

    <div class="result-grid">
      <div class="result-item">
        <div class="result-badge">📱 推荐首张手机卡</div>
        <h4>{{ recommendation.sim.name }}</h4>
        <div class="result-cost">{{ recommendation.sim.cost }}</div>
        <p>{{ recommendation.sim.reason }}</p>
        <a :href="withBase(recommendation.sim.link)">{{ recommendation.sim.linkText }}</a>
      </div>

      <div class="result-item">
        <div class="result-badge">🏦 推荐首张境外账户</div>
        <h4>{{ recommendation.bank.name }}</h4>
        <div class="result-cost">{{ recommendation.bank.cost }}</div>
        <p>{{ recommendation.bank.reason }}</p>
        <a :href="withBase(recommendation.bank.link)">{{ recommendation.bank.linkText }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.finder-card {
  margin: 26px 0;
  padding: 22px;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.finder-title {
  font-size: 1.06rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.finder-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
  margin-bottom: 18px;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.control-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.segmented {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  padding: 4px;
  border-radius: 10px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.segmented button {
  padding: 8px 10px;
  border-radius: 7px;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.83rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.segmented button.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 14px;
}

.result-item {
  padding: 16px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.result-badge {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.result-item h4 {
  margin: 4px 0 6px !important;
  font-size: 0.98rem !important;
  color: var(--vp-c-text-1);
}

.result-cost {
  font-size: 0.8rem;
  font-weight: 600;
  color: #0d9488;
  margin-bottom: 8px;
}

.result-item p {
  margin: 0 0 10px !important;
  font-size: 0.87rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.result-item a {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none !important;
}

.result-item a:hover {
  text-decoration: underline !important;
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .finder-card {
    padding: 16px 14px;
    margin: 18px 0;
  }
  
  .finder-title {
    font-size: 0.98rem;
    margin-bottom: 12px;
  }
  
  .segmented button {
    padding: 8px 6px;
    font-size: 0.78rem;
  }
  
  .result-item {
    padding: 14px;
  }
}
</style>
