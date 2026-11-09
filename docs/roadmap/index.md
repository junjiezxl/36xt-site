---
title: 新手从 0 到 1 出海路线图
description: 从核心证件准备、零成本地址证明、海外保号手机卡到境外银行账户与合规资金闭环的一站式通关指南。
outline: [2, 3]
---

<script setup>
const roadmapTabs = [
  { id: 1, label: '新手6步通关总览', badge: '打卡清单', badgeType: 'hot' },
  { id: 2, label: '第1步：核心证件准备', badge: '护照/通行证', badgeType: 'free' },
  { id: 3, label: '第2步：零成本地址证明', badge: '必看干货', badgeType: 'hot' },
  { id: 4, label: '第3步：开卡顺序与防关户', badge: '风控铁律', badgeType: 'warn' },
  { id: 5, label: '跨境资金合规闭环', badge: '合规必读', badgeType: 'vip' }
]
</script>

# 🧭 新手从 0 到 1 出海完整路线图

<BrokerTabs :tabs="roadmapTabs" v-slot="{ activeTab, selectTab }">

<!-- ==================== TAB 1: 新手6步通关总览 ==================== -->
<div v-show="activeTab === 1" class="ht-panel">

<div class="ht-hero-title">
  36星途新手出海路线图：<span class="ht-red">拒绝黑心中介与信息差，0 中介费搞定全套海外配置</span>
</div>

很多第一次接触海外服务（如海淘订阅、留学缴费、商旅出行、港美股合规理财或跨境收付款）的朋友，最容易踩的两个大坑是：
1. **顺序搞反**：还没办好海外手机号和地址证明，就急着提交银行开户申请，结果因材料不全被秒拒，留下拒批记录。
2. **花冤枉钱找中介**：把本来 **0 元开户费** 的香港银行卡或 10 元就能办的海外保号卡，花几千块钱找所谓“包过渠道”代办，不仅泄露全套隐私，还可能因伪造材料被银行永久拉黑。

<div class="ht-flow-steps">
  <span class="ht-flow-item">① 护照 + 港澳通行证</span>
  <span class="ht-flow-arrow">→</span>
  <span class="ht-flow-item">② 零成本地址证明</span>
  <span class="ht-flow-arrow">→</span>
  <span class="ht-flow-item">③ 海外保号手机卡 (DITO / Club SIM)</span>
  <span class="ht-flow-arrow">→</span>
  <span class="ht-flow-item">④ 境外银行账户 (港卡 / Maya / iFAST)</span>
  <span class="ht-flow-arrow">→</span>
  <span class="ht-flow-item">⑤ 同名入金激活与合规养护</span>
</div>

## 一、整体时间与真实 DIY 预算表

| 阶段 | 核心事项 | 预计耗时 | 官方/基础成本 | 必要性与直达 |
| :--- | :--- | :--- | :--- | :--- |
| **第 1 步** | 办理因私普通护照 + 港澳通行证 | 约 7 个工作日 | 护照 ¥120 / 通行证 ¥60 | ⭐⭐⭐⭐⭐ <a href="javascript:void(0)" @click="selectTab(2)">看 Tab 2 证件</a> |
| **第 2 步** | 准备近 3 个月内的纸质/PDF 地址证明 | 10 分钟 ~ 3 天 | **¥0**（国内信用卡账单） | ⭐⭐⭐⭐⭐ <a href="javascript:void(0)" @click="selectTab(3)">看 Tab 3 地址证明</a> |
| **第 3 步** | 激活第一张海外保号手机卡 | eSIM 5分钟即开 | 入手 ¥10~¥50，年保号 ¥1~¥15 | ⭐⭐⭐⭐⭐ <a href="/sim/">去手机卡专区 →</a> |
| **第 4 步** | 开通境外银行账户（赴港或远程） | 赴港2天1晚 / 远程当天 | **¥0 开户费**（选0管理费银行） | ⭐⭐⭐⭐⭐ <a href="/bank/">去银行卡专区 →</a> |
| **第 5 步** | 首笔同名入金激活与日常防冻养护 | 半天 | 同名转账 ¥0~¥80 | ⭐⭐⭐⭐⭐ <a href="javascript:void(0)" @click="selectTab(4)">看 Tab 4 防关户</a> |

## 二、新手 6 步出海通关打卡表（进度自动保存）

<RoadmapSteps />

<p style="text-align: center; margin-top: 18px;">
  <a href="/roadmap/toolkit-overview" style="font-weight: 600; color: var(--vp-c-brand-1);">🔥 查看《出海工具全家桶：从证件到 eSIM 的一条龙总览页》→</a>
</p>

</div>

<!-- ==================== TAB 2: 第1步：核心证件准备 ==================== -->
<div v-show="activeTab === 2" class="ht-panel">

<div class="ht-hero-title">
  第 1 步：核心证件准备与 <span class="ht-red">6 个月有效期红线避坑</span>
</div>

<div class="ht-section-header">📋 必办三大证件清单</div>
<ul class="ht-list ht-numbered">
  <li><strong>二代居民身份证（剩余有效期 &gt; 6 个月）：</strong>所有境内外银行 KYC 的基础身份核验文件。</li>
  <li><strong>因私普通护照（Passport，剩余有效期 &gt; 6 个月）：</strong>国际通用最高等级身份证件！无论是实名 <a href="/sim/?tab=2">菲律宾 DITO 手机卡</a>、远程开通 <a href="/bank/?tab=6">菲律宾 Maya / 英国 iFAST 银行</a>，还是申请境外证券账户，全部依赖护照。全国通办，微信/支付宝搜「移民局 12367」预约，工本费 <strong>120 元</strong>，约 7 个工作日取证。</li>
  <li><strong>往来港澳通行证 + 有效旅游签注（G签/L签）：</strong>亲自赴港/赴澳开立中银香港、众安银行（ZA Bank）、汇丰 One、澳门蚂蚁银行的必备通关证件（工本费 60 元 + 一次签注 15 元）。</li>
</ul>

<div class="ht-section-header">⚠️ 证件拍摄与 NFC 识别避坑指南</div>
<ul class="ht-list">
  <li><strong>绝不能有反光白斑：</strong>护照与身份证表面有防伪覆膜，拍摄上传时请关闭闪光灯、侧倾 15° 避开顶灯眩光，确保四角边框完整露在取景框内。</li>
  <li><strong>NFC 读卡技巧：</strong>汇丰、中银等 App 需要手机 NFC 读取电子护照或港澳通行证芯片，<strong>请先取下厚手机壳或磁吸环</strong>，将证件紧贴手机背面上方摄像头旁静置 5~10 秒不动。</li>
</ul>

<p style="text-align: center; margin-top: 20px;">
  <a href="/roadmap/documents" style="display:inline-block;padding:10px 24px;background:var(--vp-c-brand-1);color:#fff !important;border-radius:8px;font-weight:600;text-decoration:none;">📖 查看《核心证件准备与办理完整指南》</a>
</p>

</div>

<!-- ==================== TAB 3: 第2步：零成本地址证明 ==================== -->
<div v-show="activeTab === 3" class="ht-panel">

<div class="ht-hero-title">
  第 2 步：海外开户必查的 <span class="ht-red">零成本地址证明（Proof of Address）获取全攻略</span>
</div>

<div class="ht-section-header">📋 合格地址证明（POA）的四大黄金标准</div>
<ul class="ht-list ht-numbered">
  <li><strong>权威机构出具：</strong>银行信用卡/储蓄卡月结单、水电燃气局账单或政府机构信函。</li>
  <li><strong>时效在最近 3 个月（90 天）内：</strong>账单上的结单日期（Statement Date）必须在 90 天内。</li>
  <li><strong>本人姓名完全一致：</strong>账单抬头必须是你本人的中文姓名或拼音（不可用父母或配偶名字的账单）。</li>
  <li><span class="ht-hl">必须是详细的家庭住宅地址（带银行公章）：</span>切勿填写便利店、快递丰巢柜或写字楼工位地址！赴港去中银香港网点时，<strong>带完整住宅地址 + 银行红章的信用卡账单</strong>通过率 100%。</li>
</ul>

<div class="ht-section-header">🌟 三种最稳零成本获取方案（按推荐度排序）</div>
<ul class="ht-list">
  <li><strong>方案 A（最稳首选）：国内银行信用卡电子月结单 PDF（带地址 + 公章）</strong>
    <br/>招商银行（掌上生活 App → 查账 → 账单服务 → 补寄电子账单）、工商银行、中国银行、建设银行、中信银行等均支持免费导出带账单地址的 PDF 结单，激光彩色打印出来即可赴港通关！
  </li>
  <li><strong>方案 B（纯英文账单神器）：菲律宾 Maya 数字银行英文结单 / Bank Certificate</strong>
    <br/>如果你需要一份<strong>纯英文抬头与英文住宅地址</strong>的官方银行证明用于欧美平台认证，开通 <a href="/bank/ph-maya">菲律宾 Maya 数字银行</a> 后可在 App 内免费一键导出带英文地址与银行签章的 PDF！
  </li>
  <li><strong>方案 C（无信用卡替代）：四大行个人储蓄卡带章历史交易明细单，或个人所得税 App 纳税记录 PDF。</strong></li>
</ul>

<p style="text-align: center; margin-top: 20px;">
  <a href="/roadmap/address-proof" style="display:inline-block;padding:10px 24px;background:var(--vp-c-brand-1);color:#fff !important;border-radius:8px;font-weight:600;text-decoration:none;">📖 查看《零成本地址证明导出步骤与英文地址翻译模板》</a>
</p>

</div>

<!-- ==================== TAB 4: 第3步：开卡顺序与防关户 ==================== -->
<div v-show="activeTab === 4" class="ht-panel">

<div class="ht-hero-title">
  第 3 步：开卡黄金顺序与 <span class="ht-red">境外银行风控防关户（防冻卡）六大铁律</span>
</div>

<div class="ht-section-header">🚨 导致港卡/海外账户被封户（关户）的 6 大高危雷区</div>
<ul class="ht-list ht-numbered">
  <li><span class="ht-hl">雷区 1：与陌生人私人换汇（对敲）或接收不明第三方资金</span> —— 这是港卡被封的头号死因！只要对手方账户涉诈或涉赌，整条资金链上的关联港卡全部连坐冻结。<strong>铁律：只走本人同名账户互转！</strong></li>
  <li><span class="ht-hl">雷区 2：快进快出「过桥账」</span> —— 资金刚汇入几分钟就全额转走、账户常年余额为 0，极易触发反洗钱系统自动锁卡。建议留存少量底仓或买点货币基金过夜。</li>
  <li><span class="ht-hl">雷区 3：直接用银行账户做加密货币 C2C 收付款</span> —— 香港汇丰、中银、众安及英国 iFAST/Wise 均严禁个人账户用于加密货币场外 C2C 交易。</li>
  <li><strong>雷区 4：登录 IP 满世界乱跳（开着全局 VPN 登银行 App）</strong> —— 在中国内地登录香港银行或英国 iFAST App 时，<strong>直接关掉梯子用国内原生网络直连</strong>最安全！</li>
  <li><strong>雷区 5：长期 0 余额休眠超过 12 个月</strong> —— 每年至少做 2~4 次小额同名转账、换汇或绑微信/Apple Pay 买瓶水保持活跃。</li>
  <li><strong>雷区 6：漏接银行合规尽职调查（KYC Review）邮件或信函</strong> —— 注册邮箱务必用每日查看的主力邮箱，收到补件通知在期限内如实回复即可。</li>
</ul>

<p style="text-align: center; margin-top: 20px;">
  <a href="/roadmap/order-and-risk" style="display:inline-block;padding:10px 24px;background:var(--vp-c-brand-1);color:#fff !important;border-radius:8px;font-weight:600;text-decoration:none;">📖 查看《开卡顺序与境外银行防关户完整守则》</a>
</p>

</div>

<!-- ==================== TAB 5: 跨境资金合规闭环 ==================== -->
<div v-show="activeTab === 5" class="ht-panel">

<div class="ht-hero-title">
  跨境资金闭环（合规版）：<span class="ht-red">合法出境、境外使用、合规回流与长期持有</span>
</div>

<div class="ht-section-header">📋 个人购汇便利化额度与「六不得」红线</div>
<ul class="ht-list">
  <li><strong>年度便利化额度：</strong>境内个人经常项目购汇额度为每人每年等值 <strong>5 万美元</strong>（按自然年 1月1日—12月31日计算），凭有效身份证件、如实申报真实合法用途（如出境旅游、留学、商旅、海淘消费等）即可办理。</li>
  <li><strong>严格遵守外汇「六不得」：</strong>不得虚假申报购汇信息；不得提供不实证明材料；不得出借或借用他人额度分拆购汇；不得用于境外买房、尚未开放的资本项目等违法违规用途。</li>
  <li><strong>同名低损耗通道推荐：</strong>内地中国银行 ↔ 中国银行（香港）同名港币互转，或使用「跨境支付通」小额合规转账，路径清晰、手续费最低。</li>
</ul>

<p style="text-align: center; margin-top: 20px;">
  <a href="/roadmap/compliant-fund-loop" style="display:inline-block;padding:10px 24px;background:var(--vp-c-brand-1);color:#fff !important;border-radius:8px;font-weight:600;text-decoration:none;">📖 查看《跨境资金闭环（合规版）完整指南》</a>
</p>

</div>

</BrokerTabs>
